export interface EditOperation {
  type: string;
  [key: string]: unknown;
}

export interface ChartSpec {
  [key: string]: unknown;
}

export interface EditScript {
  ops: EditOperation[];
  chartSpecs?: ChartSpec[];
}

