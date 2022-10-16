import { Story } from '@storybook/react/types-6-0'
import style from 'styled-components'

import BalloonTooltip, { IBalloonTooltip, TBalloonTooltipPosition } from '.'

const Wrapper = style.div`
  text-align: center;
  padding: 15%;
`

const defaultProps: IBalloonTooltip = {
  position: 'bottom',
  description: 'description',
  children: <p>Hoverしてください</p>,
}

const Template: Story<IBalloonTooltip> = (args) => (
  <Wrapper>
    <BalloonTooltip {...args} />
  </Wrapper>
)

export const Normal = Template.bind({})
Normal.args = defaultProps

const opsions: TBalloonTooltipPosition[] = ['top', 'bottom', 'left', 'right']

export default {
  title: 'ReactSamples/Components/BalloonTooltip',
  component: BalloonTooltip,
  argTypes: {
    position: {
      options: opsions,
      control: { type: 'radio' },
    },
  },
}
