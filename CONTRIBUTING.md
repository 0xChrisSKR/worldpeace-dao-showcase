# Contributing

This repository is a public showcase package for Chris Chuang's engineering portfolio.

Contributions are limited to documentation fixes, public-safe diagrams, validation scripts, and non-sensitive showcase improvements.

## Rules

- Do not add secrets, environment files, private endpoints, private topology, or private source code.
- Do not add claims about production users, revenue, patents, awards, or scale unless a public source is linked.
- Keep the README readable for recruiters and engineering managers.
- Keep technical notes specific enough for an engineer to review.

## Local checks

```bash
node tools/validate-repository.mjs
```

If the repository has application code, also run the available build, lint, and typecheck commands.
