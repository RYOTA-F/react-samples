import { Dispatch, FC, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
/* components */
import Button from '../../components/button'
/* constants */
import { EMAIL_DOMAIN_LIST } from '../../constants/domain'
/* styles */
import {
  FormContainer,
  FormLabel,
  FormLabelText,
  FormInput,
  FormEmpty,
  FormSelect,
  FormOption,
  FormError,
} from './style'
/* types */
import { Data } from '../../pages/reactHookForm'

type FormProps = {
  setData: Dispatch<SetStateAction<Data>>
}

type FormType = {
  firstName: string
  lastName: string
  email: string
  domain: string
}

const Form: FC<FormProps> = ({ setData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>()

  const onClickSubmit = (data: FormType) => {
    setData({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email + '@' + data.domain,
    })
  }

  return (
    <FormContainer onSubmit={handleSubmit(onClickSubmit)}>
      <FormLabel>
        <FormLabelText>Name: </FormLabelText>
        <FormInput {...register('firstName', { required: true })} />
        <FormEmpty />
      </FormLabel>
      {errors.firstName && <FormError>入力されていません</FormError>}

      <FormLabel>
        <FormLabelText>Last Name: </FormLabelText>
        <FormInput {...register('lastName', { required: true })} />
        <FormEmpty />
      </FormLabel>
      {errors.lastName && <FormError>入力されていません</FormError>}

      <FormLabel>
        <FormLabelText>Email: </FormLabelText>
        <FormInput {...register('email', { required: true })} />
        <FormSelect {...register('domain')}>
          {EMAIL_DOMAIN_LIST.map((v, i) => (
            <FormOption key={i} value={v}>
              {v}
            </FormOption>
          ))}
        </FormSelect>
      </FormLabel>
      {errors.email && <FormError>入力されていません</FormError>}

      <Button childlen="Submit" buttonType="submit" colorType="sub" />
    </FormContainer>
  )
}

export default Form
