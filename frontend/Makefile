NODE_VERSION := 14.18.0
NODE_EXEC := . ${HOME}/.nvm/nvm.sh && nvm use $(NODE_VERSION)

.PHONY: run

run:
	@echo "  >  Start application\n"
	$(NODE_EXEC) && yarn run dev
