export const HOOKS_PAGES = {
  USE_STATE: { url: '/use_state', title: 'useState' },
  USE_EFFECT: { url: '/use_effect', title: 'useEffect' },
  USE_CONTEXT: { url: '/use_context', title: 'useContext' },
  USE_REDUCER: { url: '/use_reducer', title: 'useReducer' },
  USE_REF: { url: '/use_ref', title: 'useRef' },
} as const

export const CUSTOM_HOOK_PAGES = {
  USE_LOCAL_STORAGE: { url: '/use_local_storage', title: 'useLocalStorage' },
} as const

export const GLOBAL_STATE_PAGES = {
  REDUX: { url: '/redux', title: 'redux' },
  REDUX_TOOLKIT: { url: '/redux_toolkit', title: 'redux-toolkit' },
} as const

export const LIBRARY_PAGES = {
  SWR: { url: '/swr', title: 'swr' },
  AUTO_SUGGEST: { url: '/auto_suggest', title: 'react-autosuggest' },
  LOADING: { url: '/loading', title: 'react-loading' },
  MODAL: { url: '/modal', title: 'react-modal' },
  FORM: { url: '/form', title: 'react-hook-form' },
  SYNTAX_HIGHLIGHTER: { url: '/syntax-hignlighter', title: 'react-syntax-hignlighter' },
} as const

export const CUSTOM_COMPONENT_PAGES = {
  ONETIME_PASSWORD: { url: '/onetime_password', title: 'onetimePassword' },
  BALLOON_TOOLTIP: { url: '/balloon_tooltip', title: 'balloonTooltip' },
  SELECT_FIELD: { url: '/select_field', title: 'selectField' },
}

export const AUTH_PAGES = {
  SIGN_IN: { url: '/sign_in', title: 'Sign In' },
  SIGN_OUT: { url: '/sign_out', title: 'Sign Out' },
  MY_PAGE: { url: '/my_page', title: 'My Page' },
} as const

export const HOOKS_PAGE_LIST = Object.entries(HOOKS_PAGES).map((page) => page[1])
export const CUSTOM_HOOK_PAGE_LIST = Object.entries(CUSTOM_HOOK_PAGES).map((page) => page[1])
export const GLOBAL_STATE_PAGE_LIST = Object.entries(GLOBAL_STATE_PAGES).map((page) => page[1])
export const LIBRARY_PAGE_LIST = Object.entries(LIBRARY_PAGES).map((page) => page[1])
export const CUSTOM_COMPONENT_PAGE_LIST = Object.entries(CUSTOM_COMPONENT_PAGES).map(
  (page) => page[1]
)
export const AUTH_PAGE_LIST = Object.entries(AUTH_PAGES).map((page) => page[1])

export const ALL_PAGES = {
  ...HOOKS_PAGES,
  ...CUSTOM_HOOK_PAGES,
  ...GLOBAL_STATE_PAGES,
  ...LIBRARY_PAGES,
  ...CUSTOM_COMPONENT_PAGES,
  ...AUTH_PAGES,
}

export const ALL_PAGE_LIST = Object.entries(ALL_PAGES).map((page) => page[1])
