import { renameSync, readdirSync } from "fs";

readdirSync("./build/cjs").forEach((e) => {
  renameSync(`./build/cjs/${e}`, `./build/cjs/${e.replace(".js", ".cjs")}`);
});
