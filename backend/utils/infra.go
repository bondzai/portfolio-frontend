package utils

import (
	"encoding/json"
	"fmt"
	"log"
	"os"
	"time"

	"github.com/joho/godotenv"
)

func GetEnv(key, fallback string) string {
	value := os.Getenv(key)

	if value == "" {
		if err := godotenv.Load(); err == nil {
			value = os.Getenv(key)
		} else {
			log.Printf("Error loading .env file: %s\n", err)
		}
	}

	if value == "" {
		return fallback
	}

	return value
}

func FailOnError(err error, msg string) {
	if err != nil {
		log.Panicf("%s: %s", msg, err)
	}
}

func PrintStruct(data interface{}) {
	jsonBytes, err := json.MarshalIndent(data, "", "\t")
	if err != nil {
		log.Printf("Error while marshaling data to JSON: %v", err)
	} else {
		fmt.Println(string(jsonBytes))
	}
}

func PerformanceMonitor(f func() interface{}) func() interface{} {
	return func() interface{} {
		startTime := time.Now()
		result := f()
		endTime := time.Now()

		elapsedTime := endTime.Sub(startTime)
		fmt.Printf("Function took %s to execute.\n", elapsedTime)

		return result
	}
}
