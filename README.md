# Kawa Commons

## Errors

### Create Error

An error designed to encapsulate an error which occured inside a factory.

```javascript
const kawaCommons = require("kawa-commons");

/* sync example. */
kawaCommons.errors.create.new("what is created", error);

/* async example. */
kawaCommons.errors.create.reject("what is created", error);
```
