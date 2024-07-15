import fs from 'node:fs'
import { redirects } from './src/data/redirects.js'

// Generate public/_redirects file from src/data/redirects.ts data

const REDIRECTS_FILE_DIR = './public/_redirects'

console.log("Generating _redirects file")

// Empty existing file
const fd = fs.openSync(REDIRECTS_FILE_DIR, 'w')
fs.closeSync(fd)

// Process redirs
for (const redirectBatch of redirects) {
  for (const redirectFromEntry of redirectBatch.from) {
    fs.appendFileSync(REDIRECTS_FILE_DIR, `${redirectFromEntry} ${redirectBatch.to} ${redirectBatch.code || "308"}\n`)
  }
}

console.log("_redirects generated")