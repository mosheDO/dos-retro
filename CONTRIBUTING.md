# Contributing

All changes to `master` go through a pull request. Direct pushes to
`master` are blocked by branch protection, so even maintainers must
open a PR and merge through the GitHub UI (or `gh pr merge`).

For small fixes (a typo, a config tweak, an extra game file), the
flow is:

1. Create a branch from `master`.
2. Commit your change on that branch.
3. Push the branch and open a PR.
4. Merge the PR — squash-merge is fine for one-commit changes.
5. Delete the branch after merge.

## Local sanity checks

- Run `node --check docs/games/<id>.js` for any new or modified game
  file.
- Open `docs/index.html` in a browser and click through the game list
  to make sure nothing regressed.
