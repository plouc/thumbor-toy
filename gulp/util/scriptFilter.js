/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
var path = require("path");

// Filters out non .coffee and .js files. Prevents
// accidental inclusion of possible hidden files
module.exports = function(name) {
    return /(\.(js|coffee)$)/i.test(path.extname(name));
};