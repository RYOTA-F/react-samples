import { Dispatch, FC, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
/* constants */
import { EMAIL_DOMAIN_LIST } from '../../constants/domain'
/* styles */
import {
  FormContainer,
  FormLabel,
  FormInput,
  FormSelect,
  FormOption,
  FormSubmit,
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
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email + data.domain,
      },
    })
  }

  return (
    <FormContainer onSubmit={handleSubmit(onClickSubmit)}>
      <FormLabel>
        First Name: {''}
        <FormInput {...register('firstName', { required: true })} />
      </FormLabel>
      {errors.firstName && <FormError>入力されていません</FormError>}

      <FormLabel>
        Last Name: {''}
        <FormInput {...register('lastName', { required: true })} />
      </FormLabel>
      {errors.lastName && <FormError>入力されていません</FormError>}

      <FormLabel>
        Email: {''}
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

      <FormSubmit type="submit" />
    </FormContainer>
  )
}

export default Form
