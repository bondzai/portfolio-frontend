package models

type KeyValueSlice []KeyValue

type KeyValue map[string]interface{}

func (data *KeyValueSlice) Filter(key string, value interface{}) {
	dstIndex := 0

	for _, item := range *data {
		if item[key] != value {
			(*data)[dstIndex] = item
			dstIndex++
		}
	}

	*data = (*data)[:dstIndex]
}
