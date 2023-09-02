package main

import (
	"log"
	"net/http"
	"os"

	"portfolio/services"
	"portfolio/services/mongodb"
	"portfolio/services/redis"
	"portfolio/utils"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func init() {
	log.SetPrefix("LOG: ")
	log.SetFlags(log.Ldate | log.Ltime | log.Lshortfile)
	log.Println("initial started")
	mongodb.CheckConnection()
}

func main() {
	app := fiber.New()

	redisClient := redis.NewRedisCache()

	app.Use(cors.New(cors.Config{
		AllowOrigins:     "https://thejb.onrender.com, http://localhost:5173",
		AllowHeaders:     "Origin,Content-Type,Accept,Content-Length,Accept-Language,Accept-Encoding,Connection,Access-Control-Allow-Origin",
		AllowCredentials: true,
		AllowMethods:     "GET,POST,HEAD,PUT,DELETE,PATCH,OPTIONS",
	}))

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Portfolio backend is running...")
	})

	app.Get("/projects/", func(c *fiber.Ctx) error {
		key := "projects"
		url := utils.GetEnv("DB_URL", "") + "?action=getData&sheetName=" + key
		data, err := services.GetData(redisClient, url, key)
		if err != nil {
			log.Println(err)
			return c.SendStatus(http.StatusInternalServerError)
		}
		return c.JSON(data)
	})

	app.Get("/skills/", func(c *fiber.Ctx) error {
		key := "skills"
		url := utils.GetEnv("DB_URL", "") + "?action=getData&sheetName=" + key
		data, err := services.GetData(redisClient, url, key)
		if err != nil {
			log.Println(err)
			return c.SendStatus(http.StatusInternalServerError)
		}
		return c.JSON(data)
	})

	app.Get("/certifications/", func(c *fiber.Ctx) error {
		key := "certifications"
		url := utils.GetEnv("DB_URL", "") + "?action=getData&sheetName=" + key
		data, err := services.GetData(redisClient, url, key)
		if err != nil {
			log.Println(err)
			return c.SendStatus(http.StatusInternalServerError)
		}
		return c.JSON(data)
	})

	app.Get("/roadmap/", func(c *fiber.Ctx) error {
		key := "roadmap"
		data, err := services.GetMongoData(redisClient, key)
		if err != nil {
			log.Println(err)
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

	app.Listen(utils.GetEnv("PORT", ":5000"))
}
