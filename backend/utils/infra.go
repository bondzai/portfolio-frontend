package utils

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

const (
	devMode = false
)

func GetEnv(key, fallback string) string {
	if devMode {
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
		log.Printf("Error: %s: %v\n", msg, err)
		os.Exit(1)
	}
}
