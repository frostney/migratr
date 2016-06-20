# migratr
Dead-simple database-agnostic migrations

Write your migrations as
```javascript
// migrations/version1.js

export var version = 1;
export var up = async function() {
  // Code to upgrade to version 1
};
```

Run the migrations either programatically with
```javascript
import migratr from 'migratr';

migratr
  .driver(require('migratr-rethinkdb'))
  .use(['migrations/**/*.js']).migrateTo(1);
```

Or use the command-line utility
```
migratr migrations/**/*.js --migrateTo 1 --driver migratr-rethinkdb
```

This project is heavily inspired by Meteor Migrations (https://github.com/percolatestudio/meteor-migrations).

### License
MIT
