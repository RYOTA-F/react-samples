import styled from 'styled-components'
import { TBalloonTooltipPosition } from '.'

const descriptionTopStyle = `
  top: 0;
  transform: translateX(-50%) translateY(calc(-100% - 22px));
`

const descriptionBottomStyle = `
  bottom: 0;
  transform: translateX(-50%) translateY(22px);
`

const descriptionLeftStyle = `
  top: 0;
  left: -50%;
  transform: translateX(calc(100% + 10px)) translateY(-70%);
  -webkit-transform: translateX(calc(100% + 10px)) translateY(-70%);
`

const descriptionRightStyle = `
  top: 0;
  right: 50%;
  transform: translateX(calc(-100% - 10px)) translateY(-75%);
  -webkit-transform: translateX(calc(-100% - 10px)) translateY(-75%);
`

const triangleTopStyle = `
  top: 0;
  left: 0;
  transform: translateX(-50%) translateY(calc(-100% - 10px)) rotate(180deg);
`

const triangleBottomStyle = `
  bottom: 0;
  left: 0;
  transform: translateX(-50%) translateY(calc(100% - 2px));
`

const triangleLeftStyle = `
  top: 0;
  left: -25%;
  transform: translateX(49px) translateY(-130%) rotate(90deg);
  -webkit-transform: translateX(49px) translateY(-130%) rotate(90deg);
`

const triangleRightStyle = `
  top: 0;
  left: 25%;
  transform: translateX(calc(-100% - 49px)) translateY(-140%) rotate(270deg);
  -webkit-transform: translateX(calc(-100% - 49px)) translateY(-140%) rotate(270deg);
`

export const Wrapper = styled.span`
  position: relative;
  cursor: pointer;
`

export const ChildrenWrapper = styled.div`
  & > p {
    margin: 0;
  }
`

export const Description = styled.span<{ position: TBalloonTooltipPosition }>`
  position: absolute;
  padding: 16px;
  color: #fff;
  background-color: #39454a;
  border-radius: 4px;
  font-size: 12px;
  text-align: center;

  ${({ position }) => `
    ${position === 'top' && descriptionTopStyle}
    ${position === 'bottom' && descriptionBottomStyle}
    ${position === 'left' && descriptionLeftStyle}
    ${position === 'right' && descriptionRightStyle}
  `}
`

export const Triangle = styled.span<{ position: TBalloonTooltipPosition }>`
  background-color: transparent;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 12px solid #39454a;
  position: absolute;

  ${({ position }) => `
    ${position === 'top' && triangleTopStyle}
    ${position === 'bottom' && triangleBottomStyle}
    ${position === 'left' && triangleLeftStyle}
    ${position === 'right' && triangleRightStyle}
  `}
`
