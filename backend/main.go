package main

import (
	"fmt"
	"net/http"
	"os"

	service "portfolio/service"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()

	redisClient := service.NewRedisCache()

	app.Use(cors.New(cors.Config{
		AllowOrigins:     "https://thejb.onrender.com, http://localhost:5173",
		AllowHeaders:     "Origin,Content-Type,Accept,Content-Length,Accept-Language,Accept-Encoding,Connection,Access-Control-Allow-Origin",
		AllowCredentials: true,
		AllowMethods:     "GET,POST,HEAD,PUT,DELETE,PATCH,OPTIONS",
	}))

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	app.Get("/projects/", func(c *fiber.Ctx) error {
		key := "projects"
		url := os.Getenv("DB_URL") + "?action=getData&sheetName=" + key
		data, err := service.GetData(redisClient, url, key)
		if err != nil {
			fmt.Println(err)
			return c.SendStatus(http.StatusInternalServerError)
		}
		return c.JSON(data)
	})

	app.Get("/skills/", func(c *fiber.Ctx) error {
		key := "skills"
		url := os.Getenv("DB_URL") + "?action=getData&sheetName=" + key
		data, err := service.GetData(redisClient, url, key)
		if err != nil {
			fmt.Println(err)
			return c.SendStatus(http.StatusInternalServerError)
		}
		return c.JSON(data)
	})

	app.Get("/certifications/", func(c *fiber.Ctx) error {
		key := "certifications"
		url := os.Getenv("DB_URL") + "?action=getData&sheetName=" + key
		data, err := service.GetData(redisClient, url, key)
		if err != nil {
			fmt.Println(err)
			return c.SendStatus(http.StatusInternalServerError)
		}
		return c.JSON(data)
	})

	app.Post("/flush-cache/", func(c *fiber.Ctx) error {
		if c.Get("Authorization") != os.Getenv("API_TOKEN") {
			return c.SendStatus(http.StatusUnauthorized)
		}

		redisClient.FlushAllCache()

		return c.SendStatus(http.StatusOK)
	})

	app.Listen(":5000")
}
