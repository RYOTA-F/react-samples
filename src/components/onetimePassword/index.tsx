import { FC, useState } from 'react'
/* components */
import Button from '../button'
/* styles */
import { Form, FormItem, FormHyphen, Input, InputAlert, Alert, AlertMessage } from './style'

export type OnetimePasswordProp = {
  onetimePassword: number
  submitAction?: (value: boolean) => void
}

const OnetimePassword: FC<OnetimePasswordProp> = ({ onetimePassword, submitAction }) => {
  const CODE_DIGIT = 6
  const initCode = [...Array(CODE_DIGIT)].map((v) => '')

  const [code, setCode] = useState(initCode)
  const [isAuthenticationError, setIsAuthenticationError] = useState(false)

  /**
   * 入力値をチェック
   */
  const isValidValue = (data: string) => /^\d?$/.test(data)

  /**
   * 次のフォームにフォーカスを移動
   */
  const moveNextInput = (data: string, next: number) => {
    if (data.length) document.getElementById(String(next))?.focus()
  }

  /**
   * フォームのフォーカスを外す
   */
  const blurInput = (target: EventTarget & HTMLInputElement) => {
    if (target.value.length) target.blur()
  }

  /**
   * フォーカスが当たったら選択状態にする
   */
  const handleFocusCode = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.select()
  }

  /**
   * コードを入力
   */
  const handleInputCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isValidValue(event.target.value)) return

    const value = [...code]
    value[Number(event.target.id)] = event.target.value

    setCode(value)
    setIsAuthenticationError(false)

    if (event.target.id === String(CODE_DIGIT - 1)) {
      blurInput(event.target)
    } else {
      moveNextInput(event.target.value, Number(event.target.id) + 1)
    }
  }

  /**
   * 認証ボタンをクリック
   */
  const handleClickCertification = async (): Promise<void> => {
    if (code.some((v) => !v) || !submitAction) return

    const value = code.join('')
    if (onetimePassword === Number(value)) submitAction(true)
    if (onetimePassword !== Number(value)) setIsAuthenticationError(true)
  }

  return (
    <>
      <Form>
        {code.map((v, i) => (
          <FormItem key={i}>
            {i === 3 && <FormHyphen>-</FormHyphen>}
            <div>
              {isAuthenticationError ? (
                <InputAlert
                  type="text"
                  id={String(i)}
                  value={v}
                  onInput={handleInputCode}
                  onFocus={handleFocusCode}
                />
              ) : (
                <Input
                  type="text"
                  id={String(i)}
                  value={v}
                  onInput={handleInputCode}
                  onFocus={handleFocusCode}
                />
              )}
            </div>
          </FormItem>
        ))}
      </Form>

      {isAuthenticationError && (
        <Alert>
          <AlertMessage>認証コードが一致しません</AlertMessage>
        </Alert>
      )}

      {code.some((v) => !v) ? (
        <Button childlen="未入力" disabled={true} marginTop={100} />
      ) : (
        <Button childlen="認証" onClick={handleClickCertification} marginTop={100} />
      )}
    </>
  )
}

export default OnetimePassword
