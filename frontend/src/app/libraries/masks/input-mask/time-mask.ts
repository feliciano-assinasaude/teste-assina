import { Mask } from '../../models/mask.model';

export const timeMaskFunction = (input: string): (RegExp | string)[] => [
  /\d/,
  /\d/,
  ':',
  /\d/,
  /\d/,
];

export const defaultTimeMask: Mask = {
  guide: false,
  showMask: false,
  mask: timeMaskFunction,
};
