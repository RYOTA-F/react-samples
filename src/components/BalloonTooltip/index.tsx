import { useState } from 'react'
import type { FC, ReactNode } from 'react'
/** styles **/
import { Wrapper, ChildrenWrapper, Description, Triangle } from './style'

export type TBalloonTooltipPosition = 'top' | 'bottom' | 'left' | 'right'

export interface IBalloonTooltip {
  position: TBalloonTooltipPosition
  description: ReactNode
  children: ReactNode
  ariaLabel?: string
  className?: string
}

const BalloonTooltip: FC<IBalloonTooltip> = ({
  position,
  description,
  children,
  ariaLabel,
  className,
}) => {
  const [isHover, toggleIsHover] = useState(false)

  return (
    <Wrapper
      onMouseEnter={() => toggleIsHover(true)}
      onMouseLeave={() => toggleIsHover(false)}
      aria-label={ariaLabel}
      className={className}
    >
      <ChildrenWrapper>{children}</ChildrenWrapper>
      {isHover && (
        <>
          <Triangle position={position} />
          <Description position={position}>{description}</Description>
        </>
      )}
    </Wrapper>
  )
}

export default BalloonTooltip
