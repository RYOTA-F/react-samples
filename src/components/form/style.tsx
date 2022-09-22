import style from 'styled-components'

export const FormContainer = style.form`
  margin: 0 auto;
  text-align: center;
`

export const FormLabel = style.label`
  display: block;
  margin: 10px auto;
`

export const FormInput = style.input`
  height: 40px;
  width: 200px;
`

export const FormSelect = style.select`
  margin-left: 10px;
  height: 44px;
`

export const FormOption = style.option`
`

export const FormSubmit = style.input`
  margin-top: 20px;
`

export const FormError = style.span`
  color: ${(props) => props.theme.colors.red};
`
