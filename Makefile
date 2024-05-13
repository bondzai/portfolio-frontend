FRONT := ./frontend
BACK := ./backend

# The leading - tells make not to error if the target folder is empty.
-include $(FRONT)/Makefile.*
-include $(BACK)/Makefile.*

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
