import style from 'styled-components'

export const Button = style.button`
  margin-top: 14px;
  padding: 7px 40px;
  border: none;
  border-radius: 10px;
  box-shadow: 1px 5px 10px ${(props) => props.theme.colors.gray};
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.white};
  font-weight: 800;
  font-size: 1.2rem;
`
