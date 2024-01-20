package googlesheet

import "portfolio/utils"

func getGoogleSheetURL() string {
	return utils.GetEnv("GO_SHEET_URL", "")
}
