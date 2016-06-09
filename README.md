# migratr
Dead-simple database-agnostic migrations

Write your migrations as
```javascript
// migrations/version1.js

export var version = 1;
export var up = function() {
  // Code to upgrade to version 1
};
```

Run the migrations either programatically with
```javascript
import migratr from 'migratr';

migratr.use(['migrations/**/*.js']).migrateTo(1);
```

Or use the command-line utility
```
migratr migrations/**/*.js --migrateTo 1
```
