NODE_VERSION := 14.18.0
NVM_USE := . ${HOME}/.nvm/nvm.sh && nvm use $(NODE_VERSION)


.PHONY: run docker-build docker-run docker-down

run:
	@$(NVM_USE) && npm run dev

docker-build:
	docker-compose build

docker-run:
	docker-compose up -d

docker-down:
	docker-compose down
