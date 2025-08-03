export const printDurationsStats = (durationsMs: number[]) => {
  if (durationsMs.length === 0) {
    console.error("No durations logged!");
    return;
  }
  durationsMs.sort((a, b) => a - b);

  const n = durationsMs.length;
  const avg = durationsMs.reduce((sum, val) => sum + val, 0) / n;

  const q1 = durationsMs[Math.floor(0.25 * (n - 1))];
  const q2 = durationsMs[Math.floor(0.5 * (n - 1))]; // median
  const q3 = durationsMs[Math.floor(0.75 * (n - 1))];

  console.log(`
    Count   : ${n}
    Min     : ${durationsMs[0]} ms  ${"*".repeat(
    Math.floor(durationsMs[0] / 100)
  )}
    1Q      : ${q1} ms ${"*".repeat(Math.floor(q1 / 100))}
    2Q (Med): ${q2} ms ${"*".repeat(Math.floor(q2 / 100))}
    3Q      : ${q3} ms ${"*".repeat(Math.floor(q3 / 100))}
    Max     : ${durationsMs[n - 1]} ms ${"*".repeat(
    Math.floor(durationsMs[n - 1] / 100)
  )}
    Avg     : ${avg.toFixed(0)} ms ${"*".repeat(Math.floor(avg / 100))}
  `);
};

export const limitConcurrentTasks = async <T>(
  tasks: (() => Promise<T>)[],
  maxConcurrent: number
): Promise<T[]> => {
  const results: T[] = [];
  let currentIndex = 0;

  const runNext = async (): Promise<void> => {
    if (currentIndex >= tasks.length) return;
    const task = tasks[currentIndex++];
    const result = await task();
    results.push(result);
    await runNext();
  };

  const runners = Array.from(
    { length: Math.min(maxConcurrent, tasks.length) },
    runNext
  );
  await Promise.all(runners);
  return results;
};

export const printLineBreak = () => {
  console.log("=".repeat(50));
};
