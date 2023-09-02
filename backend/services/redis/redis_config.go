package redis

import (
	"context"
	"log"
	"portfolio/utils"
	"strings"

	"github.com/go-redis/redis/v8"
)

type RedisCache struct {
	client *redis.Client
}

func NewRedisCache() RedisCache {
	redisURL := strings.TrimSpace(utils.GetEnv("REDIS_URL", "rediss://localhost:6379"))

	opts, err := redis.ParseURL(redisURL)
	if err != nil {
		log.Println("Error parsing Redis URL:", err)
	}

	client := redis.NewClient(opts)

	pong, err := client.Ping(context.Background()).Result()
	if err != nil {
		log.Println("Error connecting to Redis:", err)
	}

	if err := client.FlushAll(context.Background()).Err(); err != nil {
		log.Println("Error flushing Redis cache:", err)
	}

	log.Println("Connected to Redis:", pong)

	return RedisCache{client}
}
