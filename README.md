# SYNOPSIS
Bash programming does not read clearly inside a `package.json` script field. 
This program helps test environment variables and create conditional output.

# EXAMPLE
`package.json` scripts likely want some context about their environment. In 
this example we want to add the `--debug` flag to the `browserify` program
before we run it, but only if the `NODE_ENV` environment variable has not
been set.

```json
"scripts": {
  "build-js": "browserify $(test-env !NODE_ENV '--debug') browser/*.js > static/bundle.js"
}
```

# USAGE
## TESTING
Truthy Variables. If the test is truthy, `Yes` will be written to `stdout`. If 
the test is falsy, nothing will be output. If the test is false, and a third 
variable is supplied it will be printed.

```bash
$test-env VARIABLE_NAME "Yes"
$test-env VARIABLE_NAME "Yes" "No"
```

Falsy Variables. If the test is falsy, `Yes` will be written to `stdout`. If
the test is falsy, nothing will be output. If the test is false, and a third
variable is supplied it will be printed.

```bash
$test-env !USER "Yes"
$test-env !USER "Yes" "No"
```

## COMPARING
The comparison operators for equality are supported

 - `==` (or `eq`) Equal
 - `!=` (or `not`) Not Equal
 - `gt` Greater Than
 - `lt` Less Than
 - `gte` Greater Than or Equal To
 - `lte` Less Than or Equal To

### More examples
```bash
$test-env USER "Yes"
Yes
```

```bash
$test-env SHLVL == 2 Yep Nope
Yep
```

```bash
$test-env SHLVL >= 1 Tak Niet
Tak
```
