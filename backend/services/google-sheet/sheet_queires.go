package googlesheet

import (
	"encoding/json"
	"net/http"
)

type GoogleSheetData []map[string]interface{}

func GetDataFromAPI(dataType string) (GoogleSheetData, error) {
	url := getGoogleSheetURL() + dataType

	resp, err := http.Get(url)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	var data GoogleSheetData
	err = json.NewDecoder(resp.Body).Decode(&data)
	if err != nil {
		return nil, err
	}

	data.filter("is_showing", false)

	return data, nil
}

func (data *GoogleSheetData) filter(key string, value interface{}) {
	dstIndex := 0

	for _, item := range *data {
		if item[key] != value {
			(*data)[dstIndex] = item
			dstIndex++
		}
	}

	*data = (*data)[:dstIndex]
}
