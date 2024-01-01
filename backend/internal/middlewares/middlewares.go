package middlewares

import (
	"encoding/json"
	"os"

	"github.com/gofiber/fiber/v2"
)

func CustomAuth(c *fiber.Ctx) error {
	if c.IP() == "127.0.0.1" || c.IP() == "::1" {
		expectedToken := os.Getenv("GO_DEV_TOKEN")
		actualToken := c.Get("Authorization")

		if actualToken != expectedToken {
			return c.Status(fiber.StatusUnauthorized).SendString("Unauthorized: Dev-mode ")
		}
	}

	return c.Next()
}

func CustomExtraAuth(c *fiber.Ctx) error {
	expectedToken := os.Getenv("GO_EXTRA_TOKEN")

	bodyBytes := c.Body()

	var requestBody map[string]string

	if err := json.Unmarshal(bodyBytes, &requestBody); err != nil {
		return c.Status(fiber.StatusBadRequest).SendString("Invalid JSON")
	}

	actualToken, exists := requestBody["ExtraAuth"]

	if !exists || actualToken != expectedToken {
		return c.Status(fiber.StatusUnauthorized).SendString("Unauthorized: Cache flushing.")
	}

	return c.Next()
}
