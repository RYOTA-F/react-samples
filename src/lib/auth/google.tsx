import { useEffect } from 'react'
import { signInWithPopup } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRecoilState, useResetRecoilState } from 'recoil'
/* config */
import { googleAuth, googleProvider } from '../../config/firebase'
/* store */
import { signInUserState } from '../../store/auth'

/**
 * Googleアカウント・ログイン
 */
export const signInWithGoogle = async () => {
  const res = await signInWithPopup(googleAuth, googleProvider)
  return res.user
}

/**
 * Googleアカウント・ログアウト
 */
export const signOutWithGoogle = async () => {
  await googleAuth.signOut()
  return true
}

/**
 * Googleアカウント・ログイン状態チェック
 */
export const useIsSigned = () => {
  const [user] = useAuthState(googleAuth)
  return Boolean(user)
}

/**
 * Googleアカウント・ログイン中アカウント情報取得
 */
export const getCurrentUserInfo = () => {
  const userName = String(googleAuth.currentUser?.displayName)
  const imageUrl = String(googleAuth.currentUser?.photoURL)

  return { userName, imageUrl }
}

/**
 * SignInの状態を監視する
 */
export const useGoogleAuth = () => {
  const [signInUser, setSignInUser] = useRecoilState(signInUserState)
  const resetStatus = useResetRecoilState(signInUserState)

  useEffect(() => {
    const unSub = googleAuth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setSignInUser({
          uid: authUser.uid,
          displayName: authUser.displayName ? authUser.displayName : '',
          photoUrl: authUser.photoURL ? authUser.photoURL : '',
        })
      } else {
        resetStatus()
      }
    })
    return () => unSub()
  }, [setSignInUser, resetStatus])

  return signInUser
}
