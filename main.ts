// Absurd Clause Contest entry: writes one original sentence to /output/entry.txt.
// Node 22 stdlib only; no network, no fonts, no writes into the repo.
import { mkdirSync, writeFileSync } from "node:fs";

const clause =
  "Continued use of the Service constitutes your consent for the Company to dispatch a representative to live in your attic for up to ninety (90) days per calendar year, meals included.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", clause, "utf8");
console.log(`Wrote ${clause.length} chars to /output/entry.txt`);
console.log(clause);
