package utils

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

const (
	devMode        = true       // Change this to true for development mode
	devModeKey     = "DEV_MODE" // (Optional) Keep this for future flexibility
	devModeDefault = false
)

func GetEnv(key, fallback string) string {
	if devMode {
		// Load .env file in development mode
		if err := godotenv.Load(); err != nil {
			log.Printf("Error loading .env file: %s\n", err)
		}
	}

	value := os.Getenv(key)
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
