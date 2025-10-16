import { execSync } from "child_process";
import fs from "fs";
import archiver from "archiver";

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

export const zipFolder = async ({ sourceDir, outPath }: { sourceDir: string; outPath: string }) => {
  return new Promise<void>((resolve, reject) => {
    const output = fs.createWriteStream(outPath);
    const archive = archiver("zip", { zlib: { level: 9 } }); // Best compression

    output.on("close", () => {
      console.log(`✅ Zipped ${sourceDir} → ${outPath} (${archive.pointer()} total bytes)`);
      resolve();
    });

    archive.on("error", (err) => reject(err));

    archive.pipe(output);
    archive.directory(sourceDir, false); // 'false' = omit the parent folder
    archive.finalize();
  });
};
