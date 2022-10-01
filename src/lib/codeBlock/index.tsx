import { Location } from 'react-router-dom'
/* constants */
import { SAMPLE_CODE } from '../../constants/sampleCode'
import { ALL_PAGES, ALL_PAGE_LIST } from '../../constants/pages'

export const getCodeByLocation = (location?: Location) => {
  if (!location) return [{ code: '', fileName: '' }]

  const currentPath = ALL_PAGE_LIST.find((v) => v.url === String(location.pathname))?.url

  switch (currentPath) {
    case ALL_PAGES.USR_STATE.url:
      return SAMPLE_CODE.USE_STATE_CODE
    case ALL_PAGES.USE_EFFECT.url:
      return SAMPLE_CODE.USE_EFFECT_CODE
    case ALL_PAGES.USE_CONTEXT.url:
      return SAMPLE_CODE.USE_CONTEXT_CODE
    case ALL_PAGES.USR_REDUCER.url:
      return SAMPLE_CODE.USE_REDUCER_CODE
    default:
      return [{ code: '', fileName: '' }]
  }
}
