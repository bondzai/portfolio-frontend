package utils

import (
	"log"
	"os"

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
