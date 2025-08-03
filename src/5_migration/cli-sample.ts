import { execSync } from "child_process";
import readline from "readline";

import fs from "fs";
import path from "path";
import { printLineBreak } from "../utils";

const MIGRATIONS_PATH =
  "../../exercises/sample-solutions/5_migration/migrations";
const MIGRATION_TO_KEEP = "0_init";
function isDirectory(p: string): boolean {
  return fs.existsSync(p) && fs.statSync(p).isDirectory();
}

type CommandDescription = {
  description: string;
  command: string;
};

const COMMANDS: CommandDescription[] = [
  {
    description: `STEP 1: Update schema (see expand.prisma) and generate the new prisma client`,
    command: `npx prisma generate \\
        --schema exercises/sample-solutions/5_migration/expand.prisma`,
  },
  {
    description: `STEP 2: Create migration from expanded schema`,
    command: `npx prisma migrate dev \\
        --name expand-lecternId \\
        --schema exercises/sample-solutions/5_migration/expand.prisma`,
  },
  {
    description: `STEP 3: Deploy migration to production DB. \n\nThis command will do nothing in this workshop since we are using a single DB. However, during real development where you may have multiple DBs, this command will apply any migrations to the datasource specified in schema.prisma`,
    command: `npx prisma migrate deploy \\
        --schema exercises/sample-solutions/5_migration/expand.prisma`,
  },
  {
    description: `STEP 4: Migrate user data. In this scenario it involves users logging in with both mechanisms. The next command simulates this.`,
    command: "npm run start-5",
  },
  {
    description: `STEP 5: Update the schema (see contract.prisma) and re-generate the client. \n\n This client can now be used in your codebase with type-safety post-migration`,
    command: `npx prisma generate \\
        --schema exercises/sample-solutions/5_migration/contract.prisma`,
  },
  {
    description: `SETP 6: Contract the schema and create a migration`,
    command: `npx prisma migrate dev \\
        --name contract-user-ununsed-columns \\
        --schema exercises/sample-solutions/5_migration/contract.prisma`,
  },
  {
    description: `STEP 7: Deploy the contracted schema. Like Step 2, this step will do nothing in this workshop since we don't have multiple DBs`,
    command: `npx prisma migrate deploy \\
        --schema exercises/sample-solutions/5_migration/contract.prisma`,
  },
];

const color = {
  yellow: "\x1b[33m",
  gray: "\x1b[90m",
  reset: "\x1b[0m",
};

function cleanupMigrationsFolder(): void {
  const fullFolderPath = path.join(__dirname, MIGRATIONS_PATH);
  const entries = fs.readdirSync(fullFolderPath);

  const subdirs = entries.filter((entry) =>
    isDirectory(path.join(fullFolderPath, entry))
  );

  if (subdirs.length === 0) {
    return;
  }

  for (const entry of entries) {
    if (entry === MIGRATION_TO_KEEP) continue;
    const fullPath = path.join(fullFolderPath, entry);
    fs.rmSync(fullPath, { recursive: true, force: true });
  }
}

const waitForEnter = (): Promise<void> => {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    console.log(`${color.gray}Press ENTER to run...${color.reset}`);
    rl.question("", () => {
      rl.close();
      resolve();
    });
  });
};

const run = async (cmd: string) => {
  console.log(`\n${color.gray}Next command:${color.reset}`);
  console.log(cmd);
  console.log("");
  await waitForEnter();
  execSync(cmd, { stdio: "inherit" });
};

async function main() {
  cleanupMigrationsFolder();
  for (const { description, command } of COMMANDS) {
    printLineBreak();
    console.log(`${color.yellow}${description}${color.reset}`);
    await run(command);
  }
}

main();
