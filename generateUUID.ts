/* eslint-disable prefer-template */
import crypto from 'crypto'

const rnds8 = new Uint8Array(16)

const generateRandom = () => {
  const isBrowser = typeof window !== 'undefined'
  if (isBrowser) {
    return window.crypto.getRandomValues(rnds8)
  }
  return crypto.randomFillSync(rnds8)
}

const byteToHex: string[] = []

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1))
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
const stringifyUUID = (arr: Uint8Array) =>
  (
    byteToHex[arr[0]] +
    byteToHex[arr[1]] +
    byteToHex[arr[2]] +
    byteToHex[arr[3]] +
    '-' +
    byteToHex[arr[4]] +
    byteToHex[arr[5]] +
    '-' +
    byteToHex[arr[6]] +
    byteToHex[arr[7]] +
    '-' +
    byteToHex[arr[8]] +
    byteToHex[arr[9]] +
    '-' +
    byteToHex[arr[10]] +
    byteToHex[arr[11]] +
    byteToHex[arr[12]] +
    byteToHex[arr[13]] +
    byteToHex[arr[14]] +
    byteToHex[arr[15]]
  ).toLowerCase()

const generateUUID = () => {
  const rnds = generateRandom()
  // eslint-disable-next-line no-bitwise
  rnds[6] = (rnds[6] & 0x0f) | 0x40
  // eslint-disable-next-line no-bitwise
  rnds[8] = (rnds[8] & 0x3f) | 0x80
  return stringifyUUID(rnds)
}

export default generateUUID
