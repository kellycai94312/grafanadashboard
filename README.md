## Getting started

- Recommended `node js 14+` and `npm 6+`
- Install dependencies: `npm install` or `yarn install`
- Start the server: `npm run start` or `yarn start`

## Use the proxy version

Run the following

```
# start the node server
./scripts/run-container.sh -p 5000:3000 --network scada-infra_default --name dashboard --entrypoint bash node:17 -c "./scripts/start-server.sh"
```

Open the proxied dashboard

http://localhost:3080/dashboard/machine?machine_name=01&machine_serial=APA-AU-1231-34-X

No proxy for testing

http://localhost:5000/dashboard/machine?machine_name=01&machine_serial=APA-AU-1231-34-X
