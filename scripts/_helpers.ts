import { execSync } from "child_process";

export const getArgs = (): Record<string, string> => {
  return Object.fromEntries(
    process.argv.slice(2).map((arg) => {
      const [key, val] = arg.replace(/^--/, "").split("=");
      return [key, val];
    }),
  );
};

export const getAvailableCompositionIds = (): string[] => {
  return execSync("npx remotion compositions", {
    stdio: "pipe",
    shell: "/bin/bash",
    encoding: "utf8",
  })
    .split("\n")
    .filter(
      (line) =>
        line.trim() &&
        !line.includes("Bundling") &&
        !line.includes("Bundled") &&
        !line.includes("The following compositions"),
    )
    .map((line) => line.split(/\s+/)[0])
    .filter((name) => name && name.length > 0);
};
