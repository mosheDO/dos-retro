GAMES.push({
  id: "ddave",
  title: "Dangerous Dave",
  subtitle: "Platformer (1990)",
  command: "DAVE.EXE",
  files: [
    { path: "DAVE.EXE", url: RAW + "/LEVELS/DDAVE/DAVE.EXE" },
    { path: "DSCORES.DAV", url: RAW + "/LEVELS/DDAVE/DSCORES.DAV" },
  ],
  dosboxConf: [
    "[render]",
    "frameskip=0",
    "aspect=false",
    "",
    "[cpu]",
    "cputype=auto",
    "cycles=30000 fixed",
  ].join("\n")
});
