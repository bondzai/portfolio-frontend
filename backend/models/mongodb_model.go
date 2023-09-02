package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type MongoData struct {
	ID    primitive.ObjectID `bson:"_id,omitempty"`
	Item  []MongoItem        `bson:"tasks_cal"`
	Tasks map[string]interface{}
}

type MongoItem struct {
	ItemID      string  `bson:"item_id"`
	Itemfloat   float64 `bson:"just_float"`
	ItemPointer *bool   `bson:"just_pointer"`
	ItemInt     int     `bson:"just_int"`
}

type MongoItemMap struct {
	Version int `bson:"version"`
	ItemMap map[string]interface{}
}
