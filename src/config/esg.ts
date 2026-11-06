/**
 * ESG readiness assessment. Scoring (0/1/2 per answer; Leading >= 70, Developing >= 40,
 * else Getting started) is PROPOSED: confirm with the sustainability team (open item).
 */
export const esgQuestions = [
  { c: 'Measurement', q: 'Do you measure your greenhouse gas emissions today?', o: ['Not yet', 'Scope 1 and 2 only', 'Scope 1, 2 and 3'] },
  { c: 'Data', q: 'Where does your sustainability data live?', o: ['Scattered across teams and email', 'Spreadsheets with an owner', 'A central system with an audit trail'] },
  { c: 'Targets', q: 'Have you set emission reduction targets?', o: ['No targets yet', 'Internal targets', 'Science-based (SBTi) targets'] },
  { c: 'Reporting', q: 'Which frameworks do you report to?', o: ['None', 'One, on request from customers', 'BRSR, GRI, CSRD or CDP every year'] },
  { c: 'Supply chain', q: 'Do you collect sustainability data from suppliers?', o: ['No', 'From a few key suppliers', 'From most suppliers, with primary data'] },
  { c: 'Governance', q: 'Who owns ESG in your organisation?', o: ['No clear owner', 'A part-time owner', 'A board-level owner with a team'] },
] as const;

export const esgRecs = [
  'Start with a Scope 1 and 2 baseline using utility bills and fuel records.',
  'Centralise data in one system so every figure can be traced.',
  'Set SBTi-aligned targets once your baseline is stable.',
  'Pick the framework your customers or regulator ask for first, usually BRSR in India.',
  'Engage your top five suppliers by spend for primary data.',
  'Name an ESG owner and review progress quarterly.',
] as const;

export const thresholds = { leading: 70, developing: 40 } as const;

export function level(score: number): [string, string] {
  if (score >= thresholds.leading) return ['Leading', 'You have the foundations. Focus on assurance and supply-chain depth.'];
  if (score >= thresholds.developing) return ['Developing', 'You are measuring, but gaps in data, targets or reporting will slow you down.'];
  return ['Getting started', 'Most companies start here. A baseline and a single data home make the biggest difference.'];
}

export function scoreOf(answers: number[]) {
  return Math.round((answers.reduce((a, b) => a + b, 0) / (esgQuestions.length * 2)) * 100);
}

/** The three weakest areas (lowest answers first, ties by question order) map to recommendations. */
export function weakest(answers: number[]) {
  return answers
    .map((v, i) => ({ v, i }))
    .sort((a, b) => a.v - b.v)
    .slice(0, 3)
    .map((x) => esgRecs[x.i]);
}
