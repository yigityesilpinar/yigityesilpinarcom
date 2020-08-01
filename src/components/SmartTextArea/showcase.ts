export const showCaseMaxLength = {
  validPart: 'Some text which is too long starting ',
  errorPart: 'here input displays an inline feedback',
  get text() {
    return this.validPart + this.errorPart
  },
}
