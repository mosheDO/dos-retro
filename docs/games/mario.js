GAMES.push({
  id: "mario",
  title: "Mario Brothers",
  subtitle: "Platformer (1990)",
  command: "MARIO.EXE",
  files: [
    { path: "MARIO.EXE", url: RAW + "/LEVELS/MARIO/MARIO.EXE" },
  ],
  dosboxConf: [
    "[render]",
    "aspect=false",
  ].join("\n")
});
