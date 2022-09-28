import style from 'styled-components'

type SampleProps = {
  top: number
  left: number
}

export const Sample = style.div<SampleProps>`
  position: absolute;
  height: 200px;
  width: 200px;
  background: ${(props) => props.theme.colors.sub};
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`

export const ButtonUp = style.div`
  position: absolute;
  top: 42%;
  left: 48%;
`

export const ButtonBottom = style.div`
  position: absolute;
  top: 58%;
  left: 48%;
`

export const ButtonLeft = style.div`
  position: absolute;
  top: 50%;
  left: 43.5%;
`

export const ButtonRight = style.div`
  position: absolute;
  top: 50%;
  left: 52.5%;
`
