# migratr
Dead-simple database-agnostic migrations

Write your migrations as an ES2015 module which exports the current version and functions to upgrade or downgrade the database.
```javascript
// migrations/version1.js

export var version = 1;
export var up = async function() {
  // Code to upgrade to version 1
};
export var down = async function() {
  // Code to downgrade to version 1 (optional)
};
```

Run the migrations either programatically with
```javascript
import migratr from 'migratr';

migratr
  .driver(require('migratr-rethinkdb'))
  .use(['migrations/**/*.js'])
  .migrateTo(1);
```

Or use the command-line utility
```
migratr migrations/**/*.js --migrateTo 1 --driver migratr-rethinkdb
```

This project is heavily inspired by Meteor Migrations (https://github.com/percolatestudio/meteor-migrations).

#### Creating a driver
Creating a new driver is very similar to creating migrations. It needs to be an ES2015 module which exports two asynchronous functions, one called `getVersion` and one called `setVersion`. The logic needs to be implemented by yourself, if you wish to create a new table, a new document or a file on the hard disk is totally up to you.

```javascript
export var getVersion = async function() {
  // Get the current version from the database
};
export var setVersion = async function(version) {
  // Set the new version in the database
};
```

### License
MIT
