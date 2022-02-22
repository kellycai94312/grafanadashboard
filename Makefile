shell: ## Open a shell with the project folder mounted inside a container
	./run-container.sh -p 5000:3000 --name dashboard --entrypoint bash node:17
	# open http://localhost:5000/dashboard/machine?machine_name=01&machine_serial=APA-AU-1231-34-X