import { Location } from 'react-router-dom'
/* constants */
import { SAMPLE_SRC_SET } from '../../constants/sampleSrc'
import { ALL_PAGES, ALL_PAGE_LIST } from '../../constants/pages'

export const getCodeByLocation = (location?: Location) => {
  if (!location) return ''

  const currentPath = ALL_PAGE_LIST.find((v) => v.url === String(location.pathname))?.url

  switch (currentPath) {
    case ALL_PAGES.USR_STATE.url:
      return SAMPLE_SRC_SET.USE_STATE
    case ALL_PAGES.USE_EFFECT.url:
      return SAMPLE_SRC_SET.USE_EFFECT
    default:
      return { code: '', fileName: '' }
  }
}
