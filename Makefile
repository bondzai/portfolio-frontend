NODE_VERSION := 18
NVM_USE := . ${HOME}/.nvm/nvm.sh && nvm use $(NODE_VERSION)

.PHONY: setup install dev build preview deploy docker-build docker-run docker-down

# Setup project (install yarn and dependencies)
setup:
	@$(NVM_USE) && npm install -g yarn && yarn install

install:
	@$(NVM_USE) && yarn install

dev:
	@$(NVM_USE) && yarn dev

build:
	@$(NVM_USE) && yarn build

preview:
	@$(NVM_USE) && yarn preview

deploy:
	@$(NVM_USE) && yarn firebase-deploy

# Docker commands
docker-build:
	docker-compose build

docker-run:
	docker-compose up -d

docker-down:
	docker-compose down
