package googlesheet

import (
	"encoding/json"
	"net/http"
)

func GetDataFromAPI(dataType string) ([]map[string]interface{}, error) {
	url := getGoogleSheetURL() + dataType

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
