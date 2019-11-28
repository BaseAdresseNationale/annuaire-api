const fs = require('fs').promises
const path = require('path')

const assert = require('assert')
const { toJson } = require('../build/main')

describe('toJson', function () {
  let file

  before((done) => {
    const filePath = path.join(__dirname, 'files', 'organismes-msa.xml')

    fs.readFile(filePath).then(content => {
      file = {
        path: filePath,
        data: content
      }
    }).then(done)
  })

  it('should work', function (done) {
    toJson(file).then(result => {
      assert.strictEqual(result.json.geometry.coordinates[0], 5.2306651)
      assert.strictEqual(result.json.geometry.coordinates[1], 46.2069614)
    }).then(done)
  })
})
