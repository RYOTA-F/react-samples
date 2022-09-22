import style from 'styled-components'

export const Container = style.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  height: 60px;
  width: 100%;
  color: #fff;
  background: #4c6cb3;
`

export const Title = style.div`
  height: 100%;
  line-height: 60px;
  font-size: 24px;
  font-weight: bold;
`

export const Empty = style.div`
  width: 60px;
`
