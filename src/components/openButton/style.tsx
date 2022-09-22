import style from 'styled-components'

export const Conteinr = style.div`
  position: relative;
  width: 60px;
  height: 60px;
  background: ${(props) => props.theme.colors.main};
  border-radius: 5px;
  cursor: pointer;
`

export const Span1 = style.span<{ isOpen: boolean }>`
  display: inline-block;
  transition: all .4s;
  position: absolute;
  left: 14px;
  height: 3px;
  border-radius: 2px;
  background: ${(props) => props.theme.colors.white};
  width: 45%;

  ${(props) =>
    props.isOpen
      ? `
        top: 22px;
        left: 18px;
        transform: translateY(6px) rotate(-45deg);
        width: 40%;
      `
      : `
        top: 18px;
      `}
`

export const Span2 = style.span<{ isOpen: boolean }>`
  display: inline-block;
  transition: all .4s;
  position: absolute;
  left: 14px;
  height: 3px;
  border-radius: 2px;
  background: ${(props) => props.theme.colors.white};
  width: 45%;

  ${(props) => (props.isOpen ? `opacity: 0;` : `top: 28px;`)}
`

export const Span3 = style.span<{ isOpen: boolean }>`
  display: inline-block;
  transition: all .4s;
  position: absolute;
  left: 14px;
  height: 3px;
  border-radius: 2px;
  background: ${(props) => props.theme.colors.white};
  width: 45%;

  ${(props) =>
    props.isOpen
      ? `
        top: 34px;
        left: 18px;
        transform: translateY(-6px) rotate(45deg);
        width: 40%;
      `
      : `
        top: 38px;
      `}
`
