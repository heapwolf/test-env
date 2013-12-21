![build-status](https://www.codeship.io/projects/50ca8900-4c7b-0131-1043-328a0651e296/status)

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
If the variable exists, the second argument will be written to `stdout`. If the test is false, 
and a third variable is supplied it will be printed.

```bash
$test-env VARIABLE_NAME Yes
```

```bash
$test-env VARIABLE_NAME Yep Nope
```

If the variable does not exist, the second argument will be written to `stdout`. If the test 
is false, and a third variable is supplied it will be printed.

```bash
$test-env !USER "Yeah ok, sure"
```

```bash
$test-env !USER 1 2
```

## COMPARING
The comparison operators are supported

 - `==` (or `eq`) Equal
 - `!=` (or `not`) Not Equal
 - `gt` Greater Than
 - `lt` Less Than
 - `gte` Greater Than or Equal To
 - `lte` Less Than or Equal To

```bash
$test-env SHLVL == 2 Yep Nope
Yep
```

```bash
$test-env SHLVL gte 1 OK "NOT OK"
OK
```
