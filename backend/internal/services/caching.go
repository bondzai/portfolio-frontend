package services

import (
	"errors"
	"log"
	googlesheet "portfolio/internal/services/google-sheet"
	"portfolio/internal/services/mongodb"
	"portfolio/internal/services/redis"
	req "portfolio/internal/services/req"
	"time"
)

func getCacheOrDataSource(redisClient redis.RedisCache, cacheKey string, fetchDataFunc func() (interface{}, error)) (interface{}, error) {
	var cachedData interface{}

	err := redisClient.GetCache(cacheKey, &cachedData)
	if err != nil {
		fetchedData, fetchErr := fetchDataFunc()
		if fetchErr != nil {
			return nil, fetchErr
		}

		cacheErr := redisClient.SetCache(cacheKey, fetchedData, 24*time.Hour)
		if cacheErr != nil {
			log.Println("Error caching data:", cacheErr)
		}

		return fetchedData, nil
	}

	return cachedData, nil
}

func GetData(redisClient redis.RedisCache, dataParams map[string]interface{}) (interface{}, error) {
	dataSource, dataSourceOk := dataParams["dataSource"].(string)
	dataType, dataTypeOk := dataParams["dataType"].(string)

	if !dataSourceOk || !dataTypeOk {
		return nil, errors.New("invalid data parameters")
	}

	switch dataSource {
	case "mongodb":
		return getCacheOrDataSource(redisClient, dataType, func() (interface{}, error) {
			return mongodb.GetRoadmap()
		})

	case "googlesheet":
		return getCacheOrDataSource(redisClient, dataType, func() (interface{}, error) {
			return googlesheet.GetDataFromAPI(dataType)
		})

	case "httpRequests":
		return getCacheOrDataSource(redisClient, dataType, func() (interface{}, error) {
			return req.FetchDataFromAPI()
		})

	default:
		return nil, errors.New("invalid data")
	}
}
