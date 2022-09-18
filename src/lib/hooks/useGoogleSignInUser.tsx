import { useEffect } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'
/* config */
import { googleAuth } from '../../config/firebase'
/* store */
import signInUserState, { SignInUserStateType } from '../../store/auth'

/**
 * Googleアカウント・サインイン状態を監視
 */
const useGoogleSignInUser = () => {
  const [signInUser, setSignInUser] = useRecoilState<SignInUserStateType>(signInUserState)
  const resetStatus = useResetRecoilState(signInUserState)

  useEffect(() => {
    const signIn = googleAuth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setSignInUser({
          login: true,
          uid: authUser.uid,
          displayName: authUser.displayName ? authUser.displayName : '',
          photoUrl: authUser.photoURL ? authUser.photoURL : '',
        })
      } else {
        resetStatus()
      }
    })
    return () => signIn()
  }, [setSignInUser, resetStatus])

  return signInUser
}

export default useGoogleSignInUser
