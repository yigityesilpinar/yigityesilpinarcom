/* eslint-disable no-console */
import { spawn } from 'child_process'
import fs from 'fs'
import path from 'path'
import { OUTPUT_DIR } from '../config/paths'

let tag = '0.0.1'
const versionFilePath = path.join(OUTPUT_DIR, 'version.txt')
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
  }
  fs.writeFileSync(versionFilePath, tag)
  console.log(`New version '${tag}' is written to ${versionFilePath}`)
})
