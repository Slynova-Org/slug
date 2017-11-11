'use strict'

/**
 * node-slug
 *
 * @license MIT
 * @copyright Slynova - Romain Lanz <romain.lanz@slynova.ch>
 */

const kebabCase = require('lodash.kebabcase')
const { transform } = require('charmap')

/**
 * Slugify any given characters.
 *
 * @method slug
 *
 * @param {string|number}  text  Text to Slugify
 *
 * @return {string}
 */
function slug (text = null) {
  if (text === null) {
    return ''
  }

  return kebabCase(transform(text.toString()))
}

module.exports = slug