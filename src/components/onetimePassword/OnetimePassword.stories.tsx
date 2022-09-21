import { Story, ComponentMeta } from '@storybook/react'
/* components */
import OnetimePassword, { OnetimePasswordProp } from './index'
/* libs */
import { createRandomNumber } from '../../lib/onetimePassword'

const rundomNumber = createRandomNumber(100000, 999999)

export default {
  title: 'ReactSamples/Components/OnetimePassword',
  component: OnetimePassword,
} as ComponentMeta<typeof OnetimePassword>

const Template: Story<OnetimePasswordProp> = ({ onetimePassword }) => (
  <OnetimePassword onetimePassword={onetimePassword} />
)

export const Default = Template.bind({})
Default.args = {
  onetimePassword: rundomNumber,
}
