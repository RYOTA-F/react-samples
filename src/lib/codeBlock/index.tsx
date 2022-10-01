import { Location } from 'react-router-dom'
/* constants */
import { SAMPLE_CODE } from '../../constants/sampleCode'
import { ALL_PAGES, ALL_PAGE_LIST } from '../../constants/pages'

export const getCodeByLocation = (location?: Location) => {
  if (!location) return [{ code: '', fileName: '' }]

  const currentPath = ALL_PAGE_LIST.find((v) => v.url === String(location.pathname))?.url

  switch (currentPath) {
    case ALL_PAGES.USE_STATE.url:
      return SAMPLE_CODE.USE_STATE_CODE
    case ALL_PAGES.USE_EFFECT.url:
      return SAMPLE_CODE.USE_EFFECT_CODE
    case ALL_PAGES.USE_CONTEXT.url:
      return SAMPLE_CODE.USE_CONTEXT_CODE
    case ALL_PAGES.USE_REDUCER.url:
      return SAMPLE_CODE.USE_REDUCER_CODE
    case ALL_PAGES.USE_REF.url:
      return SAMPLE_CODE.USE_REF_CODE
    case ALL_PAGES.USE_LOCAL_STORAGE.url:
      return SAMPLE_CODE.USE_LOCAL_STORAGE_CODE
    case ALL_PAGES.SWR.url:
      return SAMPLE_CODE.SWR_CODE
    default:
      return [{ code: '', fileName: '' }]
  }
}
