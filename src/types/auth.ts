export const PUBLIC = 'public'
export const GUEST = 'guest'
export const PRIVATE = 'private'

export const PAGE_TYPE = {
  PUBLIC,
  GUEST,
  PRIVATE,
} as const

export type PageType = typeof PAGE_TYPE[keyof typeof PAGE_TYPE]

export const AllPageType = Object.values(PAGE_TYPE)
