import type{ Cell } from "./Cell";

export interface Row {
  cells: Cell[];
  title: string;
  id: number;
}