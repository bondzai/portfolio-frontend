FROM golang:1.19-alpine

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod tidy && go mod verify


COPY . .
RUN go build -v -o ./app

EXPOSE 8080

CMD [ "./app" ]
