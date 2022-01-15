/* eslint-disable no-console */
import { promises } from 'fs'
import { generateApi } from 'swagger-typescript-api'

const apiName = 'apiName'
const apiDocsUrl = process.env.API_DOCS_URL || 'http://localhost:8080/api-docs'
const destination = `src/api/generated/${apiName}`
export const indexTs = `export * from './${apiName}'
`

export const generate = async () => {
  try {
    await promises.access(destination)
  } catch {
    await promises.mkdir(destination, { recursive: true })
  }
  const { files } = await generateApi({
    generateRouteTypes: true,
    enumNamesAsValues: true,
    url: apiDocsUrl,
    name: `${apiName}.ts`,
    extractRequestParams: true,
    extractRequestBody: true
  })
  files.forEach(async ({ content, name }) => {
    await promises.writeFile(`${destination}/${name}`, content)
  })
  await promises.writeFile(`${destination}/index.ts`, indexTs)
}

generate()
