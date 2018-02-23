'use strict'

/**
 * node-slug
 *
 * @license MIT
 * @copyright Slynova - Romain Lanz <romain.lanz@slynova.ch>
 */

const test = require('japa')
const slug = require('../src/index')

test.group('Slugify', () => {
  test('should return an empty string when giving nothing', (assert) => {
    assert.equal(slug(), '')
  })

  test('should convert number to string', (assert) => {
    assert.equal(slug(1), '1')
  })

  test('should transform ascii symbols', (assert) => {
    assert.equal(slug('ظ'), 'th')
  })

  test('should trim whitespace', (assert) => {
    assert.equal(slug(' hey '), 'hey')
  })

  test('should transform a title to his slug equivalent', (assert) => {
    assert.equal(slug('Hey!, I\'am a title!'), 'hey-iam-a-title')
  })

  test('should convert a value to a slug', function (assert) {
    assert.equal(slug('learn adonis in 30minutes'), 'learn-adonis-in-30-minutes')
  })

  test('should convert a weired value to a slug', function (assert) {
    assert.equal(slug('weird[case'), 'weird-case')
  })

  test('should convert a dot seperate value to a slug', function (assert) {
      assert.equal(slug('dot.case'), 'dot-case')
  })

  test('should convert accent text to a slug', function (assert) {
    assert.equal(slug('tôi tên là đức tạ'), 'toi-ten-la-duc-ta')
  })

  test('should remove undefined unicode', (assert) => {
    assert.equal(slug('unicode ♥ is ☢'), 'unicode-love-is')
  })

  test('should let us extends the char map', (assert) => {
    slug.extends({ '☢': 'radioactive' })

    assert.equal(slug('unicode ♥ is ☢'), 'unicode-love-is-radioactive')
  })
})