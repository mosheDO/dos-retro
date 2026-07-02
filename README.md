# DOS Retro

DOS games playable in the browser via [js-dos](https://js-dos.com). No downloads or setup required.

**Play here:** https://moshedo.github.io/dos-retro/

## How it works

- The site is a static page hosted on GitHub Pages
- Game bundles (`.jsdos` files — ZIP archives with game files + `dosbox.conf`) are stored in the [next-challenge-200-plus](https://github.com/mosheDO/next-challenge-200-plus) repo
- When you pick a game, [js-dos](https://js-dos.com) emulates DOSBox entirely in your browser via WebAssembly
- Game files are fetched from `raw.githubusercontent.com`

## Adding a game

1. Create a `.jsdos` bundle — a ZIP containing game files + `dosbox.conf` with an `[autoexec]` section that runs the game
2. Upload it to [next-challenge-200-plus/bundles/](https://github.com/mosheDO/next-challenge-200-plus/tree/master/bundles)
3. Add an entry to the `GAMES` array in `docs/index.html` with the `id`, `title`, `subtitle`, and `bundle` URL
4. Push — the game appears on the site automatically

## Currently playable

- Greedy (Pac-Man clone, 1996)
- Speed Haste (Racing, 1996)
- Dangerous Dave (Platformer, 1990)

## License

The js-dos emulator is GPL-2.0 licensed. The game files are
preserved for historical/archival purposes; all rights belong to
their respective owners.
