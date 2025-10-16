import { execSync } from "child_process";
import path from "path";
import fs from "fs";
import { getArgs, getAvailableCompositionIds } from "./_helpers";

const render = async () => {
  const args = getArgs();

  if (args.compositionId == null) {
    console.error(
      `No composition specified. Pass in a composition to render with --compositionId=<compositionId>`,
    );

    process.exit(1);
  }
  const availableCompositionIds = getAvailableCompositionIds();

  if (!availableCompositionIds.includes(args.compositionId)) {
    console.error(
      `Composition ${args.compositionId} not found. Available compositions: ${availableCompositionIds.join(", ")}`,
    );

    process.exit(1);
  }

  execSync(
    `npx remotion render src/index.ts --compositionId=${args.compositionId} --log=verbose --repro`,
    {
      stdio: "inherit",
      shell: "/bin/bash",
    },
  );

  const rootDir = path.join(__dirname, "..");

  const zipFileName = fs
    .readdirSync(rootDir)
    .find(
      (file) => file.endsWith(".zip") && file.startsWith(`remotion-repro-${args.compositionId}-`),
    );

  if (zipFileName == null) {
    throw new Error("No zip file found in project root");
  }

  const reproZipOutputPath = path.join(rootDir, zipFileName);

  const renderResultOutputPath = path.join(rootDir, "out", `${args.compositionId}.mp4`);

  const reproZipDestinationPath = path.join(
    rootDir,
    "src",
    "repros",
    args.compositionId,
    "repro.zip",
  );

  const renderResultDestinationPath = path.join(
    rootDir,
    "src",
    "repros",
    args.compositionId,
    "render.mp4",
  );

  fs.renameSync(renderResultOutputPath, renderResultDestinationPath);

  fs.renameSync(reproZipOutputPath, reproZipDestinationPath);
};

render();
