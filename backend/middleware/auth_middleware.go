// middleware/auth_middleware.go

package middleware

import (
	"net/http"
	"os"

	"github.com/gofiber/fiber/v2"
)

// AuthMiddleware is a custom middleware to check for authentication.
func AuthMiddleware(c *fiber.Ctx) error {
	// Check if the Authorization header contains the correct API token
	expectedToken := os.Getenv("API_TOKEN")
	actualToken := c.Get("Authorization")

	if actualToken != expectedToken {
		return c.SendStatus(http.StatusUnauthorized)
	}

	return c.Next()
}
