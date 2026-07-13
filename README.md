# smoke-test

A minimal Node.js HTTP server for Konflux smoke testing.

## Running locally

```bash
node server.js
```

The server listens on port 8080 (override with `PORT` env var) and returns:

```json
{ "message": "Hello from Konflux!", "status": "ok" }
```

## Container build

```bash
podman build -t smoke-test .
podman run -p 8080:8080 smoke-test
```

## CI

Pushing to any branch with `test` in its name auto-creates a PR and merges it to `main`.
# Trigger CI test
# No trigger test
