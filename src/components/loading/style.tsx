import style from 'styled-components'

export const Container = style.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(242, 242, 242, 0.7);
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 100;
`

export const MarginContainer = style.div`
  & > div {
    margin: 25% auto;
  }
`
