import { atom } from 'recoil';

export const loginModalAtom = atom<boolean>({
  key: 'loginModalAtom',
  default: false,
});

export const joinModalAtom = atom<boolean>({
  key: 'joinModalAtom',
  default: false,
});

export const idFindModalAtom = atom<boolean>({
  key: 'idFindModalAtom',
  default: false,
});

export const additionalInfoModalAtom = atom<boolean>({
  key: 'additionalInfoModalAtom',
  default: false,
});

export const passwordFindModalAtom = atom<boolean>({
  key: 'passwordFindModalAtom',
  default: false,
});