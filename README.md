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

// Make sure migrateTo is the last called function as this will start the migrations immediately
migratr
  .driver(require('migratr-rethinkdb'))
  .use(['migrations/**/*.js'])
  .migrateTo(1);
```

Or use the command-line utility
```
migratr migrations/**/*.js --migrateTo 1 --driver migratr-rethinkdb
```

This project is heavily inspired by Meteor Migrations (https://github.com/percolatestudio/meteor-migrations) and .

#### Creating a driver
Creating a new driver is very similar to creating migrations. It needs to be an ES2015 module which exports two asynchronous functions, one called `getVersion` and one called `setVersion`. The logic needs to be implemented by yourself, if you wish to create a new table, a new document or a file on the hard disk is totally up to you.

```javascript
export var getVersion = async function(prefix) {
  // Get the current version from the database
};
export var setVersion = async function(version, prefix) {
  // Set the new version in the database
};
```

For information about the `prefix` parameter, take a look at the next section.

#### Using the prefix parameter
By default `migratr` uses the value `migrations` for its prefix parameter. If you only have one project/app in your database, this will be enough. If you have more projects, you don't different migrations interfering with each other. With the `prefix` parameter, the idea is to separate different migrations on the same database.

#### Naming scheme
I admit I've been shamelessly using the same naming scheme as https://github.com/peerigon/updtr.

### License
MIT
