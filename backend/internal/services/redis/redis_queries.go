package redis

import (
	"context"
	"encoding/json"
	"errors"
	"log"
	"time"

	"github.com/go-redis/redis/v8"
)

func (r RedisCache) FlushAllCache() error {
	if err := r.client.FlushAll(context.Background()).Err(); err != nil {
		log.Println("Error flushing Redis cache:", err)
		return err
	}

	log.Println("Flush cache successfully")
	return nil
}

func (r RedisCache) GetCache(key string, data interface{}) error {
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()

	result, err := r.client.Get(ctx, key).Result()
	if err != nil {
		if errors.Is(err, redis.Nil) {
			return errors.New("cache miss")
		}
		return err
	}

	err = json.Unmarshal([]byte(result), &data)
	if err != nil {
		return err
	}

	return nil
}

func (r RedisCache) SetCache(key string, data interface{}, expiration time.Duration) error {
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()

	jsonData, err := json.Marshal(data)
	if err != nil {
		return err
	}

	err = r.client.Set(ctx, key, jsonData, expiration).Err()
	if err != nil {
		return err
	}

	return nil
}
