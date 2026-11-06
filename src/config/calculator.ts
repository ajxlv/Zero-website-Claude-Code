/**
 * Carbon calculator factors and formulas. ILLUSTRATIVE (open item): replace with sourced,
 * dated factors (CEA India grid factor / DEFRA / IPCC) owned by the sustainability team.
 * Used by the Home mini-calculator and (extended) by the Free Tools calculator.
 */
export const factors = {
  gridKgPerKwh: 0.71,
  dieselKgPerL: 2.68,
  petrolKgPerL: 2.31,
  lpgKgPerKg: 2.98,
  tPerFlight: 0.25,
  tPerEmployeeCommuteYr: 0.6,
} as const;

export interface MiniInputs { kwh: number; diesel: number; trips: number }
export function miniCalc({ kwh, diesel, trips }: MiniInputs) {
  const s1 = (diesel * 12 * factors.dieselKgPerL) / 1000;
  const s2 = (kwh * 12 * factors.gridKgPerKwh) / 1000;
  const s3 = trips * 12 * factors.tPerFlight;
  const total = s1 + s2 + s3;
  return { s1, s2, s3, total };
}

/** Free Tools calculator (extended). Handoff section 8. */
export interface FullInputs { kwh: number; diesel: number; petrol: number; lpg: number; flights: number; staff: number }
export const fullDefaults: FullInputs = { kwh: 25000, diesel: 1200, petrol: 300, lpg: 200, flights: 4, staff: 80 };

export function fullCalc(i: FullInputs) {
  const s1 = ((i.diesel * factors.dieselKgPerL + i.petrol * factors.petrolKgPerL + i.lpg * factors.lpgKgPerKg) * 12) / 1000;
  const s2 = (i.kwh * factors.gridKgPerKwh * 12) / 1000;
  const s3 = i.flights * 12 * factors.tPerFlight + i.staff * factors.tPerEmployeeCommuteYr;
  return { s1, s2, s3, total: s1 + s2 + s3 };
}

export function tipFor({ s1, s2, s3, total }: ReturnType<typeof fullCalc>) {
  if (total === 0) return 'Enter some figures to see your estimate.';
  const big = Math.max(s1, s2, s3);
  if (big === s2) return 'Electricity is your biggest source. Renewable power or a solar PPA is usually the fastest lever.';
  if (big === s1) return 'Fuel burned on site is your biggest source. Look at boiler efficiency, fuel switching and fleet electrification.';
  return 'Travel and commuting lead. A travel policy and commute programme can move this quickly.';
}

export const calcFields = [
  { key: 'kwh', label: 'Electricity', unit: 'kWh / month', scope: 'S2' },
  { key: 'diesel', label: 'Diesel', unit: 'litres / month', scope: 'S1' },
  { key: 'petrol', label: 'Petrol', unit: 'litres / month', scope: 'S1' },
  { key: 'lpg', label: 'LPG', unit: 'kg / month', scope: 'S1' },
  { key: 'flights', label: 'Business flights', unit: 'return trips / month', scope: 'S3' },
  { key: 'staff', label: 'Employees', unit: 'people', scope: 'S3' },
] as const;
