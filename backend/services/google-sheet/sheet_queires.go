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

	filterData(&data, "is_showing")

	return data, nil
}

func filterData(data *[]map[string]interface{}, filter string) {
	for i, item := range *data {
		for key, value := range item {
			if key == filter && value == false {
				removeElement(data, i)
			}
		}
	}
}

func removeElement(slice *[]map[string]interface{}, index int) {
	if index < 0 || index >= len(*slice) {
		return
	}

	copy((*slice)[index:], (*slice)[index+1:])

	*slice = (*slice)[:len(*slice)-1]
}
