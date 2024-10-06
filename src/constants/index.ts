import { Dimension } from "../types";

export const TIMBERS: Map<string, Dimension> = new Map<string, Dimension>([
  ["A", [1.98, 0.15, 0.03]], // long main frame
  ["B", [0.9, 0.15, 0.03]], // short main frame
  ["C", [2.4, 0.1, 0.03]], //main poles
  ["D", [0.9 + 2 * 0.1 - 2 * 0.03, 0.07, 0.03]], //slats
  ["E", [1.98, 0.05, 0.05]], // slats support
  ["F", [0.8 + 0.15, 0.1, 0.03]], // stair sides (level 2)
  ["G", [0.3, 0.1, 0.03]], // stair
  ["H", [1.6 + 0.15, 0.1, 0.03]], // stair sides (level 3)
]);
