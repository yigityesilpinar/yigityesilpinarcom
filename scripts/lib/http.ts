import http from 'http'

interface GetOptions {
  url: string
}
export const get = (options: GetOptions) => {
  const { url } = options
  return new Promise((resolve, reject) => {
    http
      .get(url, (resp) => {
        let data = ''

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
          data += chunk
        })

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          try {
            resolve(data)
          } catch (err) {
            reject(err)
          }
        })
      })
      .on('error', reject)
  })
}
