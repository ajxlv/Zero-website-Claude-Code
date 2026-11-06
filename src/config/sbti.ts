/** SBTi simulator (Platform). Baseline is the labelled sample dashboard figure. */
export const sbti = { baseline: 144.3, startYear: 2024, years: 7, targetShare: 0.58, defaultRate: 7 } as const;

export function project(rate: number) {
  return Array.from({ length: sbti.years }, (_, i) => ({
    year: sbti.startYear + i,
    value: sbti.baseline * Math.pow(1 - rate / 100, i),
  }));
}
export function status(rate: number) {
  const end = sbti.baseline * Math.pow(1 - rate / 100, sbti.years - 1);
  const target = sbti.baseline * sbti.targetShare;
  return end <= target ? { on: true, label: 'On track for SBTi 2030' } : { on: false, label: `Off track · ${(end - target).toFixed(0)} t above target` };
}
