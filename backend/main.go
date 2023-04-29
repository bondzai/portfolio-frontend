package main

import (
	"context"
	"fmt"
	"log"

	service "portfolio/service"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	app := fiber.New()

	redisClient := service.NewRedisClient()

	app.Get("/", func(c *fiber.Ctx) error {
		pong, err := redisClient.Ping(context.Background()).Result()
		if err != nil {
			fmt.Println("Error pinging Redis:", err)
			return c.SendStatus(fiber.StatusInternalServerError)
		}

		return c.SendString("Hello, World! Redis ping result: " + pong)
	})

	app.Listen(":5000")
}
