import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: sessionStorage,
})

export const initialValue = {
  login: false,
  uid: '',
  displayName: '',
  photoUrl: '',
}

export type SignInUserStateType = typeof initialValue

const signInUserState = atom({
  key: 'auth/signIn',
  default: initialValue,
  effects_UNSTABLE: [persistAtom],
})

export default signInUserState
