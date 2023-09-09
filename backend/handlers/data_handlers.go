package handlers

import (
	"log"
	"net/http"
	"os"

	"portfolio/services"
	"portfolio/services/redis"
	"portfolio/utils"

	"github.com/gofiber/fiber/v2"
)

// DataHandler is responsible for handling routes related to various data types.
type DataHandler struct {
	RedisClient redis.RedisCache
}

// NewDataHandler creates a new instance of DataHandler with the given dependencies.
func NewDataHandler() DataHandler {
	return DataHandler{
		RedisClient: redis.NewRedisCache(),
	}
}

// GetData handles the GET /{dataType} route where dataType can be "projects," "skills," or "certifications."
func (h *DataHandler) GetData(c *fiber.Ctx) error {
	dataType := c.Params("dataType")
	key := dataType
	url := utils.GetEnv("DB_URL", "") + "?action=getData&sheetName=" + key

	data, err := services.GetData(h.RedisClient, url, key)
	if err != nil {
		log.Println(err)
		return c.SendStatus(http.StatusInternalServerError)
	}

	return c.JSON(data)
}

// GetRoadmap handles the GET /roadmap route.
func (h *DataHandler) GetRoadmap(c *fiber.Ctx) error {
	key := "roadmap"
	data, err := services.GetMongoData(h.RedisClient, key)
	if err != nil {
		log.Println(err)
		return c.SendStatus(http.StatusInternalServerError)
	}
	return c.JSON(data)
}

// GetWakatime handles the GET /wakatime route.
func (h *DataHandler) GetWakatime(c *fiber.Ctx) error {
	key := "wakatime"
	data, err := services.GetWakatimeData(h.RedisClient, key)
	if err != nil {
		log.Println(err)
		return c.SendStatus(http.StatusInternalServerError)
	}
	return c.JSON(data)
}

// FlushCache handles the POST /flush-cache route.
func (h *DataHandler) FlushCache(c *fiber.Ctx) error {
	// Check if the Authorization header contains the correct API token
	expectedToken := os.Getenv("API_TOKEN")
	actualToken := c.Get("Authorization")

	if actualToken != expectedToken {
		return c.SendStatus(http.StatusUnauthorized)
	}

	h.RedisClient.FlushAllCache()

	return c.SendStatus(http.StatusOK)
}
