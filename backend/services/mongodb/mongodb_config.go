package mongodb

import (
	"context"
	"log"
	"portfolio/utils"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var ctx = context.TODO()
var db *mongo.Database

func CheckConnection() {
	if db == nil {
		connection, err := ConnectToMongoDB()
		if err != nil {
			log.Fatal(err)
		} else {
			db = connection.Database(utils.GetEnv("MONGODB", ""))
		}
	} else {
		err := db.Client().Ping(context.Background(), nil)
		if err != nil {
			log.Printf("Lost connection to MongoDB: %v. Reconnecting...", err)
			connection, err := ConnectToMongoDB()
			if err != nil {
				log.Fatal(err)
			} else {
				db = connection.Database(utils.GetEnv("MONGODB", ""))
			}
		}
	}
}

func ConnectToMongoDB() (*mongo.Client, error) {
	url := utils.GetEnv("MONGODB_URL", "mongodb://mongoadmin:mongoadmin@localhost:27017/")

	clientOptions := options.Client().ApplyURI(url)

	client, err := mongo.Connect(context.Background(), clientOptions)
	if err != nil {
		log.Printf("Failed to connect to MongoDB: %v", err)
		return nil, err
	}

	err = client.Ping(context.Background(), nil)
	if err != nil {
		log.Printf("Failed to ping MongoDB server: %v", err)
		client.Disconnect(context.Background())
		return nil, err
	}

	log.Println("Connected to MongoDB!")
	return client, nil
}

func DisconnectFromMongoDB(client *mongo.Client) {
	err := client.Disconnect(context.Background())
	if err != nil {
		log.Fatal(err)
	}

	log.Println("Disconnected from MongoDB!")
}
