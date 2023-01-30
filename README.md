# base-template-node

Opinionated NodeJS Template for kickstarting work on side projects, made easy.

# Development

## Build

```shell
# Install dependencies
yarn

# Start the server
yarn dev
```

> Note: Hot reload is available when developing in local mode.

Output:

```shell
{"level":"info","message":"Hello World!","timestamp":"2023-01-01T00:00:00.000+00:00"}
```

# Production

## Deploy

Deployments to production should be triggered by a webhook when a commit, or a pull-request is merged to `master`.

If you need to force a deployment, use the following command:

```shell
# Build the server
yarn build

# Start the server
yarn start
```
