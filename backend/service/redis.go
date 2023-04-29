package service

import (
	"context"
	"fmt"
	"os"

	"github.com/go-redis/redis/v8"
)

func NewRedisClient() *redis.Client {
	redisHost := os.Getenv("REDIS_HOST")

	address := "localhost:6379"
	if redisHost != "" {
		address = redisHost
	}

	client := redis.NewClient(&redis.Options{
		Addr:     address,
		Password: "",
		DB:       0,
	})

	pong, err := client.Ping(context.Background()).Result()
	if err != nil {
		fmt.Println("Error connecting to Redis:", err)
	}

	fmt.Println("Connected to Redis:", pong)

	return client
}
