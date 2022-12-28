import { FC, useState, ChangeEvent } from 'react'

const SelectField: FC = () => {
  const SELECT_OPTIONS = ['hoge', 'fuga', 'piyo'] as const
  type TSelectField = typeof SELECT_OPTIONS[number]

  const [selectValue, setSelectValue] = useState<TSelectField>('hoge')

  const isTSelectField = (value: string): value is TSelectField =>
    Object.values(SELECT_OPTIONS)
      .map<string>((value) => value)
      .includes(value)

  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    if (isTSelectField(event.target.value)) setSelectValue(event.target.value)
  }

  return (
    <>
      <select value={selectValue} onChange={onChangeSelect}>
        {SELECT_OPTIONS.map((v) => (
          <option key={v} value={v}>
            {v}
          </option>
        ))}
      </select>

      <hr />
      <div>{selectValue}</div>
    </>
  )
}

export default SelectField
