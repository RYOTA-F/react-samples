import { FC, useState } from 'react'
/**  components **/
import BalloonTooltip, { TBalloonTooltipPosition } from '../../components/BalloonTooltip'
/** styles **/
import { Wrapper, InputWrapper, PartitionLine } from './style'

const BalloonTooltipTest: FC = () => {
  const [position, setPosition] = useState<TBalloonTooltipPosition>('top')

  const positionValues: TBalloonTooltipPosition[] = ['top', 'bottom', 'left', 'right']

  return (
    <>
      <Wrapper>
        <BalloonTooltip position={position} description="description">
          Hoverしてください
        </BalloonTooltip>
      </Wrapper>
      <PartitionLine />
      {positionValues.map((v, i) => (
        <InputWrapper key={i}>
          <input type="radio" value={v} checked={v === position} onChange={() => setPosition(v)} />
          <label>{v}</label>
        </InputWrapper>
      ))}
    </>
  )
}

export default BalloonTooltipTest
