package service

import (
	"fmt"
	"time"
)

func GetData(redisClient RedisCache) ([]map[string]interface{}, error) {
	cacheKey := "projectList"
	var data []map[string]interface{}

	err := redisClient.GetCache(cacheKey, &data)
	if err != nil {
		data, err = ReadData()
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
