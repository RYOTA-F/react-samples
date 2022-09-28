import style from 'styled-components'

export const Form = style.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 36px;
  margin-left: -20px;
`

export const FormItem = style.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`

export const FormHyphen = style.div`
  margin: 0 12px 0 -8px;
  font-size: 6rem;
  color: #9fa9b9;
`

export const Input = style.input`
  width: 80px;
  height: 80px;
  text-align: center;
  border: 4px solid #cfd4dc;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, .05);
  border-radius: 8px;
  font-size: 4.8rem;
  line-height: 7.2rem;
  color: #0f2950;
`

export const InputAlert = style.input`
  width: 80px;
  height: 80px;
  text-align: center;
  border: 1px solid #de350b;
  box-shadow: 0 1px 2px rgba(16, 24, 40, .05);
  border-radius: 8px;
  font-size: 4.8rem;
  line-height: 7.2rem;
  color: #0f2950;
`

export const Alert = style.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  font-size: 1.2rem;
  line-height: 12px;
  align-items: center;
  color: #f24727;
`

export const AlertMessage = style.div`
  margin-left: 2px;
`
