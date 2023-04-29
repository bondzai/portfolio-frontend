package main

import (
	"context"
	"fmt"

	service "portfolio/service"

	"github.com/gofiber/fiber/v2"
)

func main() {
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
