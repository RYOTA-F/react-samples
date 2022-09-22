import style from 'styled-components'

export const Container = style.div`
  height: 80px;
  width: 80%;
  margin: 0 auto 60px;
  font-size: 36px;
  line-height: 80px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.black};
  border-bottom: 4px solid ${(props) => props.theme.colors.main};
`
