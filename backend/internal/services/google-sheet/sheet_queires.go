package googlesheet

import (
	"encoding/json"
	"net/http"
	"portfolio/internal/models"
)

func GetDataFromAPI(dataType string) (models.KeyValueSlice, error) {
	url := getGoogleSheetURL() + dataType

	resp, err := http.Get(url)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	var data models.KeyValueSlice
	err = json.NewDecoder(resp.Body).Decode(&data)
	if err != nil {
		return nil, err
	}

	data.Filter("is_showing", false)

	return data, nil
}
