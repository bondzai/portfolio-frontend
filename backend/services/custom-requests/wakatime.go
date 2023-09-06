package req

import (
	"encoding/base64"
	"encoding/json"

	"github.com/valyala/fasthttp"
)

var apiUrl = "https://wakatime.com/api/v1/users/current/stats/all_time"
var apiKey = "waka_1b092e56-ab0a-4198-8f92-d803eaf07bbf"

func FetchDataFromAPI() (map[string]interface{}, error) {
	req := fasthttp.AcquireRequest()
	req.SetRequestURI(apiUrl)
	req.Header.Add("Authorization", "Basic "+base64.StdEncoding.EncodeToString([]byte(apiKey)))

	resp := fasthttp.AcquireResponse()
	if err := fasthttp.Do(req, resp); err != nil {
		return nil, err
	}

	var response map[string]interface{}
	if err := json.Unmarshal(resp.Body(), &response); err != nil {
		return nil, err
	}

	wakatimeData := map[string]interface{}{
		"human_readable_range":                          response["data"].(map[string]interface{})["human_readable_range"],
		"days_including_holidays":                       response["data"].(map[string]interface{})["days_including_holidays"],
		"human_readable_total_including_other_language": response["data"].(map[string]interface{})["human_readable_total_including_other_language"],
		"operating_systems":                             response["data"].(map[string]interface{})["operating_systems"],
		"editors":                                       response["data"].(map[string]interface{})["editors"],
		"languages":                                     response["data"].(map[string]interface{})["languages"],
		"best_day":                                      response["data"].(map[string]interface{})["best_day"],
	}

	return wakatimeData, nil
}
