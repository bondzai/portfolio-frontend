NODE_VERSION := 14.18.0
NVM_USE := . ${HOME}/.nvm/nvm.sh && nvm use $(NODE_VERSION)

.PHONY: run

run:
	@$(NVM_USE) && yarn run dev
