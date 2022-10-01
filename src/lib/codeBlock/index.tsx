import { Location } from 'react-router-dom'
/* constants */
import { SAMPLE_SRCS } from '../../constants/sampleSrc'
import { ALL_PAGES, ALL_PAGE_LIST } from '../../constants/pages'

export const getCodeByLocation = (location?: Location) => {
  if (!location) return ''

  const currentPath = ALL_PAGE_LIST.find((v) => v.url === String(location.pathname))?.url

  switch (currentPath) {
    case ALL_PAGES.USR_STATE.url:
      return SAMPLE_SRCS.USE_STATE_CODE
    case ALL_PAGES.USE_EFFECT.url:
      return SAMPLE_SRCS.USE_EFFECT_CODE
    default:
      return ''
  }
}
