import { signInWithPopup } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
/* config */
import { googleAuth, googleProvider } from '../../config/firebase'

/**
 * Googleアカウント・ログイン
 */
export const signInWithGoogle = () => {
  signInWithPopup(googleAuth, googleProvider)
}

/**
 * Googleアカウント・ログアウト
 */
export const signOutWithGoogle = () => {
  googleAuth.signOut()
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
