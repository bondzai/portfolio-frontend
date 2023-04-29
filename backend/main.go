package main

import (
	"fmt"
	"net/http"

	service "portfolio/service"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	redisClient := service.NewRedisCache()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	app.Get("/projectList/", func(c *fiber.Ctx) error {
		data, err := service.GetData(redisClient)
		if err != nil {
			fmt.Println("Error get project list:", err)
			return c.SendStatus(http.StatusInternalServerError)
		}
		return c.JSON(data)
	})

	app.Listen(":5000")
}
