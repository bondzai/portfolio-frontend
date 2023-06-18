package service

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"os"
	"strings"
	"time"

	"github.com/go-redis/redis/v8"
)

type RedisCache struct {
	client *redis.Client
}

func NewRedisCache() RedisCache {
	redisURL := strings.TrimSpace(os.Getenv("REDIS_URL"))
	if redisURL == "" {
		redisURL = "rediss://localhost:6379"
	}

	opts, err := redis.ParseURL(redisURL)
	if err != nil {
		fmt.Println("Error parsing Redis URL:", err)
	}

	client := redis.NewClient(opts)

	pong, err := client.Ping(context.Background()).Result()
	if err != nil {
		fmt.Println("Error connecting to Redis:", err)
	}

	if err := client.FlushAll(context.Background()).Err(); err != nil {
		fmt.Println("Error flushing Redis cache:", err)
	}

	fmt.Println("Connected to Redis:", pong)

	return RedisCache{client}
}

func (r RedisCache) FlushAllCache() {
	if err := r.client.FlushAll(context.Background()).Err(); err != nil {
		fmt.Println("Error flushing Redis cache:", err)
	}

	fmt.Println("Flush cache successfully")
}

func (r RedisCache) GetCache(key string, data interface{}) error {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
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
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
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
