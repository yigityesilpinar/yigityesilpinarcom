import { get } from './lib/http'
import { request } from 'http'
// TODO: move to a function
// paramaters
const DEFAULT_RQPS = 1000 // TODO: 1
const rqps = DEFAULT_RQPS

const interval = 1000 / rqps
const LOGGER_ON = true

let missingCount = 0
let successCount = 0
let errorCount = 0
let totalCount = 0
let firstError = 0
let totalRequestTime = 0
let longestRequestTime = 0

// eslint-disable-next-line no-console
console.log(`Test started with ${rqps} requests per second`)

const intervalRef = setInterval(() => {
  const start = new Date().getTime()
  return get({
    url: 'http://127.0.0.1:8080',
  })
    .then(() => {
      // eslint-disable-next-line no-console
      // console.log("success")
      successCount++
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err)
      errorCount++
      if (!firstError) {
        firstError = totalCount + 1
      }
    })
    .finally(() => {
      const end = new Date().getTime()
      const requestsTime = end - start
      if (requestsTime > longestRequestTime) {
        longestRequestTime = requestsTime
      }
      if (requestsTime > 0) {
        totalRequestTime = totalRequestTime + requestsTime
      } else {
        missingCount++
      }
      totalCount++
      // console.log({ requestsTime, avarage: totalRequestTime / totalCount })
    })
}, interval)

const gracefulShutdown = () => {
  clearInterval(intervalRef)
  process.exit(0)
}

if (LOGGER_ON) {
  setInterval(() => {
    // eslint-disable-next-line no-console
    console.log({
      rqps,
      errorCount,
      successCount,
      missingCount,
      totalCount,
      firstError,
      totalRequestTime,
      avarageRequestTime: `${parseFloat(
        (totalRequestTime / totalCount).toFixed(2)
      )} ms`,
      longestRequestTime: `${parseFloat(longestRequestTime.toFixed(2))} ms`, //TODO: utils
    })
  }, 1000)
}

process.on('SIGINT', gracefulShutdown)
process.on('SIGTERM', gracefulShutdown)
process.on('SIGUSR2', gracefulShutdown) // Sent by nodemon
