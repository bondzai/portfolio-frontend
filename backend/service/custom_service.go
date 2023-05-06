package service

import (
	"fmt"
	"time"
)

func GetData(redisClient RedisCache, url string, cacheKey string) ([]map[string]interface{}, error) {
	var data []map[string]interface{}

	err := redisClient.GetCache(cacheKey, &data)
	if err != nil {
		data, err = GetDataFromAPI(url)
		if err != nil {
			return nil, err
		}

		err = redisClient.SetCache(cacheKey, data, 24*time.Hour)
		if err != nil {
			fmt.Println("Error caching data:", err)
		}
	}

	return data, nil
}
