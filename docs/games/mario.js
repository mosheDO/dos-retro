GAMES.push({
  id: "mario",
  title: "Mario Brothers",
  subtitle: "Platformer (1990)",
  command: "MARIO.EXE",
  files: [
    { path: "MARIO.EXE", url: RAW + "/LEVELS/MARIO/MARIO.EXE" },
    { path: "MARIO.DA1", url: RAW + "/LEVELS/MARIO/MARIO.DA1" },
    { path: "MARIO.DA2", url: RAW + "/LEVELS/MARIO/MARIO.DA2" },
    { path: "DF.EXE",    url: RAW + "/LEVELS/MARIO/DF.EXE" },
    { path: "MARIO.PIF", url: RAW + "/LEVELS/MARIO/MARIO.PIF" },
  ],
  dosboxConf: [
    "[cpu]",
    "cycles=6000 fixed",
  ].join("\n")
});
