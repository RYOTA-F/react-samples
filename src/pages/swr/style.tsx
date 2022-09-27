import style from 'styled-components'

export const FetchSample = style.div`
  margin-bottom: 40px;
  font-size: 16px;
`

export const DataItem = style.div`
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;

  &:not(:first-child) {
    margin-top: 10px;
  }
`

export const UserData = style.div`
  text-align: left;
`

export const Contents = style.span`
  font-weight: bold;
`

export const MainData = style.div`
  margin-top: 4px;
  text-align: left;
`
