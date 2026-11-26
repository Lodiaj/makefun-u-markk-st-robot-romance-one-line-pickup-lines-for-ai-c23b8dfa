import { mkdirSync, writeFileSync } from "node:fs";

// One pickup line, aimed at a robot: the joke is the role reversal —
// a human proving they are not a robot, just to talk to the machine.
// 73 characters, one line, no trailing newline, so the gate's
// 1-to-200-character check sees exactly the line itself.
const LINE =
  "Are you a CAPTCHA? Because I'd prove I'm not a robot just to talk to you.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 non-blank characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
