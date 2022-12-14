import { FC } from 'react'
import style from 'styled-components'
import 'react-pro-sidebar/dist/css/styles.css'

export const Link = style.a``

export const Border = style.hr`
  color: #fff;
  opacity: 0.5;
`

type ReactProSidebarCSSProps = {
  isOpen: boolean
}

const ReactProSidebarCSS: FC<ReactProSidebarCSSProps> = ({ isOpen }) => {
  const css = `
    .pro-sidebar {
      position: absolute;
      top: 60px;
      height: calc(100vh - 120px);
      opacity: 0;
      transform: translateX(-100vw);

      ${
        isOpen
          ? `
            transform: translateX(0);
            transition: 0.5s;
            opacity: 1;
          `
          : `
            transform: translateX(-100vw);
            transition: 1s;
            opacity: 0;
          `
      }
    }
  `

  return <style>{css}</style>
}

export default ReactProSidebarCSS
