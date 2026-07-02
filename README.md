# DOS Retro

DOS games playable in the browser via [js-dos](https://js-dos.com). No downloads or setup required.

**Play here:** https://moshedo.github.io/dos-retro/

## How it works

- The site is a static page hosted on GitHub Pages
- Each game entry in `docs/index.html` specifies its files (via raw `fetch`) and a `dosboxConf` (inline or generated)
- A default DOSBox config is generated per-game from `defaultConf(command)` — each game only needs to override the specific keys that differ (e.g. `machine=vesa_oldvbe`, `frameskip=0`). Overrides are merged at the key level via `parseIni`/`mergeConfigs`/`serializeIni`
- Game files are hosted on [next-challenge-200-plus](https://github.com/mosheDO/next-challenge-200-plus) and fetched from `raw.githubusercontent.com`
- When you pick a game, [js-dos](https://js-dos.com) emulates DOSBox entirely in your browser via WebAssembly, loading files via `initFs` and applying the merged `dosboxConf`

## Adding a game

1. Upload the game's files to [next-challenge-200-plus](https://github.com/mosheDO/next-challenge-200-plus) under the appropriate directory
2. Add an entry to the `GAMES` array in `docs/index.html`:
   ```js
   {
     id: "my-game",
     title: "My Game",
     subtitle: "Genre (Year)",
     command: "GAME.EXE",
     files: [
       { path: "GAME.EXE", url: RAW + "/PATH/GAME.EXE" },
       { path: "GAME.DAT", url: RAW + "/PATH/GAME.DAT" },
     ],
     // optional: only keys that differ from the default
     dosboxConf: [
       "[section]",
       "key=value",
     ].join("\n")
   }
   ```
3. No `dosboxConf` is needed if the default config (SVGA, aspect, normal2x scaler) works — the `[autoexec]` is generated from `command` automatically
4. Push — the game appears on the site automatically

## Currently playable

- Greedy (Pac-Man clone, 1996)
- Speed Haste (Racing, 1996)
- SkyRoads (3D Racing, 1994)
- Dangerous Dave (Platformer, 1990)
- PAKO II (Pac-Man clone, 1996)

## License

The js-dos emulator is GPL-2.0 licensed. The game files are
preserved for historical/archival purposes; all rights belong to
their respective owners.
