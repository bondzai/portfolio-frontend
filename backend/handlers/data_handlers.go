package handlers

import (
	"log"
	"net/http"

	"portfolio/services"
	"portfolio/services/redis"
	"portfolio/utils"

	"github.com/gofiber/fiber/v2"
)

type DataHandler struct {
	RedisClient redis.RedisCache
}

func NewDataHandler() DataHandler {
	return DataHandler{
		RedisClient: redis.NewRedisCache(),
	}
}

func (h *DataHandler) HandleData(c *fiber.Ctx) error {
	dataType := c.Params("dataType")

	switch dataType {
	case "roadmap":
		key := "roadmap"
		data, err := services.GetMongoData(h.RedisClient, key)
		if err != nil {
			log.Println(err)
			return c.SendStatus(http.StatusInternalServerError)
		}
		return c.JSON(data)

	case "wakatime":
		key := "wakatime"
		data, err := services.GetWakatimeData(h.RedisClient, key)
		if err != nil {
			log.Println(err)
			return c.SendStatus(http.StatusInternalServerError)
		}
		return c.JSON(data)

	default:
		key := dataType
		url := utils.GetEnv("GO_SHEET_URL", "") + "?action=getData&sheetName=" + key

		data, err := services.GetData(h.RedisClient, url, key)
		if err != nil {
			log.Println(err)
			return c.SendStatus(http.StatusInternalServerError)
		}
		return c.JSON(data)
	}
}

func (h *DataHandler) FlushCache(c *fiber.Ctx) error {
	h.RedisClient.FlushAllCache()

	return c.SendStatus(http.StatusOK)
}
