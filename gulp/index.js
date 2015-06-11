/*
 * This file is part of thumbor-toy project.
 *
 * (c) Raphaël Benitte <thumbor-toy@rbenitte.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
var fs          = require('fs');
var onlyScripts = require('./util/scriptFilter');
var tasks       = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);



console.log([
    "——————————————————————————————————————————",
    " ▄▄▄ ▄ ▄ ▄ ▄ ▄▄▄ ▄▄  ▄▄▄ ▄▄   ▄▄▄ ▄▄▄ ▄ ▄ ",
    "  █  █▀█ █▄█ █▀█ ███ █▄█ █▀█   █  █▄█  █  ",
    "——————————————————————————————————————————"
].join('\n'));

tasks.forEach(function(task) {
    require('./tasks/' + task);
});