import { Dimension } from "../types";

export const TIMBERS: Map<string, Dimension> = new Map<string, Dimension>([
  ["A", [1.9, 0.15, 0.02]], // long main frame
  ["B", [0.88, 0.15, 0.02]], // short main frame
  ["C", [2.01, 0.1, 0.02]], //main poles
  ["D", [0.88 + 2 * 0.1 - 2 * 0.03, 0.07, 0.02]], //slats
  ["E", [1.9, 0.04, 0.04]], // slats support
  ["F", [0.8 + 0.15, 0.06, 0.02]], // stair sides (level 2)
  ["G", [0.3, 0.06, 0.02]], // stair
  ["H", [1.6 + 0.15, 0.06, 0.02]], // stair sides (level 3)
  ["I", [0.88, 0.06, 0.02]], // guardrail short
  ["J", [1.9, 0.06, 0.02]], // guardrail long
  ["K", [1.58, 0.06, 0.02]], // guardrail medium
  ["L", [1.21, 0.06, 0.02]], // stair side long (level 2)
]);

export const GUARDRAIL_HEIGHT = 0.2;
