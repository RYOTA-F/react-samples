import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: sessionStorage,
})

export const signInUserState = atom({
  key: 'auth/signIn',
  default: {
    uid: '',
    displayName: '',
    photoUrl: '',
  },
  effects_UNSTABLE: [persistAtom],
})
