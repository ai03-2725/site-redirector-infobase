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

    // Generate the redir as-is
    fs.appendFileSync(REDIRECTS_FILE_DIR, `${redirectFromEntry} ${redirectBatch.to} ${redirectBatch.code || "308"}\n`)

    // If redirect path doesn't end with a trailing slash, generate the trailing slash variant
    if (redirectFromEntry.slice(-1) !== "/") {
      fs.appendFileSync(REDIRECTS_FILE_DIR, `${redirectFromEntry}/ ${redirectBatch.to} ${redirectBatch.code || "308"}\n`)
    } 

    // If it does, generate the non-trailing-slash variant as long as the path isn't the root
    else if (redirectFromEntry.slice(-1) === "/" && redirectFromEntry !== "/") {
      fs.appendFileSync(REDIRECTS_FILE_DIR, `${redirectFromEntry.slice(0, -1)} ${redirectBatch.to} ${redirectBatch.code || "308"}\n`)
    }
  }
}

console.log("_redirects generated")