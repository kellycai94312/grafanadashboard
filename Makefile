setup: ## install required node dependencies
	./scripts/run-container.sh --rm -ti --entrypoint bash node:17 -c "./scripts/setup.sh"

start-server: ## run the dashboard server
	./scripts/run-container.sh -p 5000:3000 --network scada-infra_default --name dashboard --entrypoint bash node:17 -c "./scripts/start-server.sh"
	# open http://localhost:5000/dashboard/machine?machine_name=01&machine_serial=APA-AU-1231-34-X
	# proxy version http://localhost:3080/dashboard/machine?machine_name=01&machine_serial=APA-AU-1231-34-X
