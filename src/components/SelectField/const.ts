export const SELECT_OPTIONS = ['hoge', 'fuga', 'piyo'] as const

export type TSelectField = typeof SELECT_OPTIONS[number]
