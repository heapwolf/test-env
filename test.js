var ASSERT = require('assert').ok
var testenv = require('./index')

var SHLVL = process.env['SHLVL']
var USER = process.env['USER']

ASSERT(testenv(['SHLVL', 'gt', SHLVL, 'YES', 'NO']) == 'NO')
ASSERT(testenv(['SHLVL', 'gte', SHLVL, 'YES', 'NO']) == 'YES')
ASSERT(testenv(['SHLVL', '==', SHLVL, 'YES', 'NO']) == 'YES')
ASSERT(testenv(['USER', '==', USER, 'YES']) == 'YES')
ASSERT(testenv(['USER', '==', 'FOOBARS', 'YES', 'NOPE']) == 'NOPE')
ASSERT(testenv(['USER', '==', 'FOOBARS', 'YES']) == '')
ASSERT(testenv(['!X24234526421', '-ok']) == '-ok')
ASSERT(testenv(['X24234526421', '-ok']) == '')
ASSERT(testenv(['!USER', '-ok']) == '')
ASSERT(testenv(['USER', '-ok']) == '-ok')
