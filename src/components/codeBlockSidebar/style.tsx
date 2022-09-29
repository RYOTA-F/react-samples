import style from 'styled-components'

export const OpenButton = style.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 60px;
  width: 80px;
  border: none;
  font-size: 20px;
  font-weight: bold;
  lihe-height: 60px;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.main};

  &:hover {
    cursor: pointer;
  }
`
