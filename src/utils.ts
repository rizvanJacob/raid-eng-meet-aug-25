export const printDurationsStats = (durationsMs: number[]) => {
  if (durationsMs.length === 0) {
    console.error("No durations logged!");
    return;
  }

  durationsMs.sort((a, b) => a - b);
  const n = durationsMs.length;
  const avg = durationsMs.reduce((sum, val) => sum + val, 0) / n;

  // Compute percentiles
  const getPercentile = (p: number) => {
    const index = Math.floor((p / 100) * (n - 1));
    return durationsMs[index];
  };

  const stats: { label: string; value: number }[] = [
    { label: "Min", value: durationsMs[0] },
    ...Array.from({ length: 9 }, (_, i) => {
      const p = i + 1;
      return { label: `${p}P`, value: getPercentile(p) };
    }),
    { label: "Max", value: durationsMs[n - 1] },
    { label: "Avg", value: avg },
  ];

  // Find max label and value length for padding
  const labelPad = Math.max(...stats.map((s) => s.label.length));
  const valuePad = Math.max(...stats.map((s) => s.value.toFixed(0).length));

  // Print results
  console.log(`\n    Count   : ${n}`);
  for (const { label, value } of stats) {
    const rounded = Math.round(value);
    const stars = "*".repeat(Math.floor(rounded / 50));
    const paddedLabel = label.padEnd(labelPad);
    const paddedValue = `${rounded}`.padStart(valuePad);
    console.log(`    ${paddedLabel} : ${paddedValue} ms  ${stars}`);
  }
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
