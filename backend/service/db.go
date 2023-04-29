package service

import (
	"encoding/json"
	"net/http"
	"os"
)

func ReadData() ([]map[string]interface{}, error) {
	url := os.Getenv("DB_PROJECT_LIST")

	resp, err := http.Get(url)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	var data []map[string]interface{}
	err = json.NewDecoder(resp.Body).Decode(&data)
	if err != nil {
		return nil, err
	}

	return data, nil
}
