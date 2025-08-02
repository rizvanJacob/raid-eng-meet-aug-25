import dotenv from "dotenv";

dotenv.config({ path: "config.env" });

export const usersToSeed = Number.parseInt(process.env.USERS_TO_SEED || "");
export const queriesToSeed = Number.parseInt(process.env.QUERIES_TO_SEED || "");
export const numBranches = Number.parseInt(process.env.NUM_OF_BRANCHES || "");
export const deletedBranchRatio = Number.parseFloat(
  process.env.DELETED_BRANCH_RATIO || ""
);
export const numTitles = Number.parseInt(process.env.NUM_OF_TITLES || "");
export const oldestApptYearsAgo = Number.parseInt(
  process.env.OLDEST_APPOINTMENT_START_YEARS_AGO || ""
);
export const minApptDurationYears = Number.parseInt(
  process.env.MIN_APPOINTMENT_DURATION_YEARS || ""
);
export const maxApptDurationYears = Number.parseInt(
  process.env.MAX_APPOINTMENT_DURATION_YEARS || ""
);
export const assignedQueriesRatio = Number.parseFloat(
  process.env.ASSIGNED_QUERIES_RATIO || ""
);
export const canQueryRatio = Number.parseFloat(
  process.env.CAN_QUERY_RATIO || ""
);
