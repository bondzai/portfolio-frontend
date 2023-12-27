FRONT := ./frontend
BACK := ./backend

.PHONY: init front-init back-init front-run

init: front-init back-init

front-init:
	@echo "  >  Installing dependencies...\n"
	cd $(FRONT) && yarn install

back-init:
	@echo "  >  Installing dependencies...\n"
	cd $(BACK) && go mod download && go mod tidy

front-run:
	@echo "  >  Running tests...\n"
	cd $(FRONT) && yarn dev
