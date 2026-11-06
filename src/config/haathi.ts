export interface HaathiBar { l: string; v: string; w: string; c: string }
export interface HaathiQA { q: string; a: string; bars: HaathiBar[] }
/** Sample Q&A shown in the "Ask Haathi" demo. Figures are illustrative. */
export const haathi: HaathiQA[] = [
  { q: 'What are my top 3 emission sources this quarter?', a: 'Q3 came to 36.1 tCO₂e. Three sources make up 77% of it:', bars: [
    { l: 'Purchased goods', v: '12.2 t', w: '100%', c: 'var(--s3)' },
    { l: 'Purchased electricity', v: '11.1 t', w: '91%', c: 'var(--s2)' },
    { l: 'Upstream transport', v: '4.7 t', w: '39%', c: 'var(--s3)' } ] },
  { q: 'Which supplier should we engage first?', a: 'Supplier A (steel coils) accounts for 23% of purchased-goods emissions and has no primary data yet. Engaging them first gives the biggest data-quality gain.', bars: [
    { l: 'Supplier A · steel', v: '8.8 t', w: '100%', c: 'var(--s3)' },
    { l: 'Supplier B · resin', v: '4.8 t', w: '54%', c: 'var(--s3)' } ] },
  { q: 'How much would rooftop solar save?', a: 'A rooftop system at the Nashik plant would cut Scope 2 by about 15 tCO₂e a year, roughly 10% of your total footprint.', bars: [
    { l: 'Scope 2 today', v: '52.2 t', w: '100%', c: 'var(--s2)' },
    { l: 'With solar', v: '37.1 t', w: '71%', c: 'var(--moss)' } ] },
];
