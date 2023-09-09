package main

import (
	"log"

	"portfolio/handlers"
	"portfolio/middleware"
	"portfolio/services/mongodb"
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

	// Middleware
	app.Use(cors.New(cors.Config{
		AllowOrigins:     "https://thejb.onrender.com, http://localhost:5173",
		AllowHeaders:     "Origin,Content-Type,Accept,Content-Length,Accept-Language,Accept-Encoding,Connection,Access-Control-Allow-Origin",
		AllowCredentials: true,
		AllowMethods:     "GET,POST,HEAD,PUT,DELETE,PATCH,OPTIONS",
	}))

	// Handlers
	dataHandler := handlers.NewDataHandler()

	// Routes
	app.Get("/:dataType", dataHandler.HandleData) // Handle all data types with a single function
	app.Post("/flush-cache", middleware.AuthMiddleware, dataHandler.FlushCache)

	// Root route
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Portfolio backend is running...")
	})

	port := utils.GetEnv("PORT", ":5000")
	log.Printf("Server is running on port %s", port)
	app.Listen(port)
}
