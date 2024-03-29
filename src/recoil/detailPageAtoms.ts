import { atom } from 'recoil';

export const activeRoom = atom<string | null>({
    key: 'activeRoom',
    default: null,
});

export const activeRoomPrice = atom<number | null>({
    key: 'activeRoomPrice',
    default: null,
});

export const activeRoomName = atom<string>({
    key: 'activeRoomName',
    default: '',
});

export const activeRoomNumber = atom<number>({
    key: 'activeRoomNumber',
    default: 0,
});

export const activeMaxPerson = atom<number>({
    key: 'activeMaxPerson',
    default: 99,
});

export const merchantUid = atom<string>({
    key: 'merchantUid',
    default: '',
})

export const couponList = atom<Array<any>>({
    key: 'couponList',
    default: [],
})

export const swipePageState = atom<number>({
    key: 'swipePageState',
    default: 0,
})

export const paymentRadioSelected = atom<string>({
    key: 'paymentRadioSelected',
    default: '',
})

export const couponRadio = atom<number>({
    key: 'couponRadio',
    default: 0,
})