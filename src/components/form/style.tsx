import style from 'styled-components'

export const FormContainer = style.form`
  margin: 0 auto;
  text-align: center;
`

export const FormLabel = style.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: 30px auto;
`

export const FormLabelText = style.div`
  width: 20%;
`

export const FormInput = style.input`
  height: 40px;
  width: 200px;
  font-size: 16px;
`

export const FormEmpty = style.div`
  width: 120px;
`

export const FormSelect = style.select`
  height: 44px;
  width: 120px;
`

export const FormOption = style.option`
`

export const FormError = style.span`
  color: ${(props) => props.theme.colors.red};
`
