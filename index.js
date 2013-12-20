#!/usr/bin/env node

module.exports = function(args) {

  var env = process.env

  if (args[0] == 'node') {
    args.splice(0, 2)
  }

  if (args.length >= 4) {

    var variable = args[0]
    var operator = args[1].toLowerCase()
    var value = args[2]
    var truthy = args[3] || ''
    var falsy = args[4] || ''
    var result

    switch (operator) {
      case '==': case 'eq': result = env[variable] === value ;break
      case '!=': case 'not': result = env[variable] !== value ;break
      case 'gt':  result = parseInt(env[variable], 10) > value ;break
      case 'lt':  result = parseInt(env[variable], 10) < value ;break
      case 'lte': result = parseInt(env[variable], 10) <= value ;break
      case 'gte': result = parseInt(env[variable], 10) >= value ;break
    }

    return result ? truthy : falsy
  }
  else {

    var variable = args[1]
    var truthy = args[2] || ''
    var falsy = args[3] || ''

    if (variable[0] == '!') {
      variable.splice(0, 1)
      return process.env[variable] ? falsy : truthy
    }  
    return process.env[variable] ? truthy : falsy
  }
}

if (!module.parent) {
  process.stdout.write(module.exports(process.argv))
}
