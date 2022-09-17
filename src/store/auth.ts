import { atom } from 'recoil'

export const signInUserState = atom({
  key: 'auth/signIn',
  default: {
    uid: '',
    displayName: '',
    photoUrl: '',
  },
})
