import 'jest-extended'

declare module NodeJS {
  interface Global {
    WEBPACK_STATS_PATH: string
  }
}
