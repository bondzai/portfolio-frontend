package main

import (
	"context"
	"fmt"
	"net/http"

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

	app.Get("/projectList", func(c *fiber.Ctx) error {
		data, err := service.ReadData()
		if err != nil {
			return c.SendStatus(http.StatusInternalServerError)
		}
		return c.JSON(data)
	})

	app.Listen(":5000")
}
