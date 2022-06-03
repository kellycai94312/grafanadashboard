.PHONY : help
help :
	@echo "Usage 'make [TARGET]', see list of targets below:"
	@grep -E '^[a-zA-Z0-9%\_\-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

setup: ## install required node dependencies
	./scripts/run-container.sh --rm -ti --entrypoint bash node:17 -c "./scripts/setup.sh"

start-server: ## run the dashboard server
	./scripts/run-container.sh -p 5000:3000 --network scada-infra_default --name dashboard --entrypoint bash node:17 -c "./scripts/start-server.sh"
	# open http://localhost:5000/dashboard/machine?machine_name=01&machine_serial=APA-AU-1231-34-X
	# proxy version http://localhost:3080/dashboard/machine?machine_name=01&machine_serial=APA-AU-1231-34-X
	# proxy version multi machine http://localhost:3080/overview.html
	# grafana http://localhost:3000/graphs/d/21aYM4xnz/machine-dashboard?orgId=1
