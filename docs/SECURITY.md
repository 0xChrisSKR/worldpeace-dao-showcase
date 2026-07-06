# Security

## Public Safety Boundary

This repository must not include:

- Private keys
- `.env` files
- Deployment tokens
- Private RPC endpoints
- VPS topology
- Private repository names that are not already public
- Production credentials
- Private source code from closed repositories

## Claim Boundary

This repository does not claim production users, revenue, active customer adoption, patents, awards, or production-scale uptime unless a public source is linked.

## Security-Relevant Design Notes

- WorldPeace DAO Showcase is presented with explicit public-safe boundaries.
- The Docker preview uses `.env.example`; real secrets must never be committed.
- CI validation scans for local Windows paths and common secret-shaped patterns.
- Pull requests must keep diagrams, examples, and docs public-safe.
