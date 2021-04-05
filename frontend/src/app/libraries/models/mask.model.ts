export interface Mask {
  mask: (RegExp | string)[] | MaskFunction;
  guide?: boolean;
  showMask?: boolean;
  keepCharPositions?: boolean;
}

export type MaskFunction = (action: string) => (RegExp | string)[];
