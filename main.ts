import { mkdirSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Setup: the dog's office perks. Punch: the human's lot, last.
const SETUP = "The office dog has a bed, a bowl, and a Slack channel.";
const PUNCH = "I have a hot desk and a login that expires every 90 days.";
const LINE = `${SETUP} ${PUNCH}`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE);
