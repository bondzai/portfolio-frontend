package middleware

import (
	"net/http"
	"os"

	"github.com/gofiber/fiber/v2"
)

func AuthMiddleware(c *fiber.Ctx) error {
	expectedToken := os.Getenv("API_TOKEN")
	actualToken := c.Get("Authorization")

	if actualToken != expectedToken {
		return c.SendStatus(http.StatusUnauthorized)
	}

	return c.Next()
}
