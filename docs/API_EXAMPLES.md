# API Examples

This repository is a public showcase for a DApp prototype. API examples focus on public demo and repository artifacts, not donation volume, TVL, or production user claims.

## Public Artifact Requests

README request:

```bash
curl -L "https://raw.githubusercontent.com/0xChrisSKR/worldpeace-dao-showcase/main/README.md"
```

Architecture document request:

```bash
curl -L "https://raw.githubusercontent.com/0xChrisSKR/worldpeace-dao-showcase/main/docs/ARCHITECTURE.md"
```

Career mapping request:

```bash
curl -L "https://raw.githubusercontent.com/0xChrisSKR/worldpeace-dao-showcase/main/docs/CAREER_MAPPING.md"
```

Representative response shape:

```json
{
  "repository": "worldpeace-dao-showcase",
  "artifact": "public engineering showcase",
  "source": "https://github.com/0xChrisSKR/worldpeace-dao-showcase",
  "claimBoundary": "verifiable public material only"
}
```


## Public Demo Example

Request:

```bash
curl -I "https://dao.worldpeace-bnb.org/"
```

Expected review outcome:

```json
{
  "artifact": "public DApp demo",
  "reviewFocus": ["wallet surface", "governance surface", "treasury concept", "Unity WebGL entry"],
  "claimsExcluded": ["TVL", "donation volume", "active DAO userbase"]
}
```
