/** Illustrative LCA stages for one tote bag (kgCO2e). */
export const lcaStages = [
  { l: 'Raw materials', v: 1.84, c: 'var(--s3)', n: 'Raw materials drive 56% of the footprint. Switching fibre supplier is the biggest lever.' },
  { l: 'Manufacturing', v: 0.92, c: 'var(--deep)', n: 'Manufacturing energy is 28%. Renewable power at the plant cuts most of it.' },
  { l: 'Distribution', v: 0.31, c: 'var(--moss)', n: 'Distribution is under 10%. Consolidated freight helps at the margin.' },
  { l: 'Use', v: 0.12, c: 'var(--leaf)', n: 'Use phase is small for this product.' },
  { l: 'End of life', v: 0.08, c: 'var(--leaf)', n: 'End of life is the smallest stage; recyclability claims need evidence.' },
] as const;
