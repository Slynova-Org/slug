'use strict'

/**
 * node-slug
 *
 * @license MIT
 * @copyright Slynova - Romain Lanz <romain.lanz@slynova.ch>
 */

var kebabCase = require('lodash.kebabcase')
var transform = require('charmap').transform

/**
 * Slugify any given characters.
 *
 * @method slug
 *
 * @param {string|number}  text  Text to Slugify
 *
 * @return {string}
 */
function slug (text) {
  if (text === void 0) return ''

  return kebabCase(transform(text.toString()))
}

module.exports = slug