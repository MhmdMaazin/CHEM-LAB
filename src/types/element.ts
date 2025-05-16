export interface Element {
  symbol: string;
  name: string;
  atomicNumber: number;
  atomicMass: string;
  category: string;
  block: string;
  electronConfiguration: string;
  description: string;
  group?: number;
  period?: number;
}