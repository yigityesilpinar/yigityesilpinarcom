/* eslint-disable no-console */
import { spawn } from 'child_process'
import fs from 'fs'
import path from 'path'
import { OUTPUT_DIR, PROJECT_ROOT_DIR } from '../config/paths'

const cliArgs = process.argv.slice(2)
const packageJSONOnly = cliArgs.some((arg) =>
  arg.toLowerCase().includes('packagejsononly')
)

let tag = '0.0.1'
const versionFilePath = path.join(OUTPUT_DIR, 'version.txt')
const packagejsonPath = path.join(PROJECT_ROOT_DIR, 'package.json')
// find the last tag
const gitDescribeCommand = spawn(
  'sh',
  ['-c', 'git tag --sort=committerdate | tail -1'],
  {}
)

const patchVersion = (version: string) => {
  const [major, minor, patch] = version.split('.')
  return `${major}.${minor}.${parseInt(patch, 10) + 1}`
}

// error means there are no tags yet
gitDescribeCommand.on('exit', (code) => {
  const read = gitDescribeCommand.stdout.read()
  if (read) {
    const latestTag = read.toString().replace(/\s/g, '')
    console.log(`Found '${latestTag}' as the latest tag`)
    tag = patchVersion(latestTag)
  } else {
    console.log('no tags yet')
    tag = patchVersion(tag)
  }
  if (packageJSONOnly) {
    // read, replace and write back to package.json
    const file = fs.readFileSync(packagejsonPath).toString()
    fs.writeFileSync(
      packagejsonPath,
      file.replace(/"version": ".*"/, `"version": "${tag}"`)
    )
  } else {
    fs.writeFileSync(versionFilePath, tag)
  }
  console.log(`New version '${tag}' is written to ${versionFilePath}`)
})
