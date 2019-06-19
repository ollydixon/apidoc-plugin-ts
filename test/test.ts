import { expect } from 'chai'
import 'mocha'
import * as apidoc from 'apidoc'
import * as fs from 'fs-extra'
import * as path from 'path'
const tests = [
  {
    name: 'test1'
  },
  {
    name: 'array'
  },
  {
    only: true,
    name: 'array-generics'
  },
  {
    only: true,
    name: 'array-as-properties'
  }
]
describe('Apidoc TS Plugin', () => {
  tests.forEach(function (test) {
    (test.only ? it.only : it)(test.name, async function () {
      const dest = `out/${test.name}`
      apidoc.createDoc({
        src: `${test.name}`, debug: true, dest })
      const outputJson = await fs.readJson(path.join('out', test.name, 'api_data.json'))
      const expectedJson = await fs.readJson(path.join(test.name, 'fixture.json'))
      expect(outputJson).to.deep.equal(expectedJson)
    })
  })
})
