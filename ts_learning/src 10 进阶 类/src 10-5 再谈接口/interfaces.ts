export interface IFireShow {
  singleFire(): void;
  doubleFire(): void;
}

export interface IWisdomShow {
  calc(): void;
  dance(): void;
}

export interface IBalanceShow {
  soloBridge(): void;
  wire(): void;
}

export function HasFireShow(ani: object): ani is IFireShow {
  if (ani && (ani as IFireShow).singleFire && (ani as IFireShow).doubleFire) {
    return true;
  }
  return false;
}

export function hasWisdomShow(ani: object): ani is IWisdomShow {
  if (ani && (ani as IWisdomShow).dance && (ani as IWisdomShow).calc) {
    return true;
  }
  return false;
}
