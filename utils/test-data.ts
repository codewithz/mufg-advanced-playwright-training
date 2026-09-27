/**
 * Central place for test-data generation so every spec produces
 * collision-free data when running in parallel across workers.
 */
export function uniqueEmail(workerIndex: number, prefix = 'acct_holder'): string {
  return `${prefix}_${workerIndex}_${Date.now()}@example.com`;
}

export function uniqueUsername(workerIndex: number, prefix = 'acct_holder'): string {
  return `${prefix}_${workerIndex}_${Date.now()}`;
}
