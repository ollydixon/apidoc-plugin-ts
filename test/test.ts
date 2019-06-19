import { expect } from 'chai'
import 'mocha'
import * as apidoc from 'apidoc'
import * as fs from 'fs-extra'
import * as path from 'path'
const tests = [
  {
    name: 'test1'
  }
]
describe('Apidoc TS Plugin', () => {
  tests.forEach(function (test) {
    it(test.name, async function () {
      const dest = `test/out/${test.name}`
      apidoc.createDoc({
        src: `test/${test.name}`, debug: true, dest })
      const outputJson = await fs.readJson(path.join('test/out', test.name, 'api_data.json'))
      const expectedJson = await fs.readJson(path.join('test', test.name, 'fixture.json'))
      expect(outputJson).to.deep.equal(expectedJson)
    })
  })
})
