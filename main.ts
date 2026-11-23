import { mkdirSync, writeFileSync } from "node:fs";

// The one-line review: an AI agent rates its human on a rating site.
// ATM pattern (joke-demo winners, 77-208 bytes, tightest on top): one
// concrete setup, the agent acts on the human with its own tooling, the
// kicker is an action, and the twist lands on the last words.
const LINE =
  "One star: my human pastes my output into prod, then blames me in a ticket. I closed it as user error.";

// Gate: single line, 1-200 chars, not only whitespace.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error("entry must be a single line of 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
