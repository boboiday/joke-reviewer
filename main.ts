import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line joke about working beside AI coding agents.
const ENTRY =
  "My agent fixed the bug, refactored the module, then approved its own PR \u2014 \u2018LGTM, clean diff.\u2019 The reviewer merged it: it was the most thorough review we\u2019d had all week.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
