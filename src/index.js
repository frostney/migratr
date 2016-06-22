import fs from 'fs';
import micromatch from 'micromatch';
import messages from './messages.json';

class Migratr {
  constructor() {
    this.driver = null;
    this.files = null;
    this.namespace = null;
  }

  namespace(name) {
    this.namespace = name;
  }

  driver(mod) {
    if (typeof mod === 'string') {
      throw new Error(messages.incorrectDriver);
    }

    this.driver = mod;
  }

  use(globs) {
    const allFiles = fs.readdirSync(__dirname);

    const matches = mictromatch(globs, allFiles);

    matches.forEach(match => {

    });
  }

  migrateTo(version) {
    if (!this.files) {
      throw new Error(messages.missingFiles);
    }

    if (!this.driver) {
      throw new Error(messagers.missingDriver);
    }

    // TODO: Multiple versions!
    const validFiles = Object.keys(this.files).filter(file =>
      this.files[file].version <= version
    ).sort((a, b) => {
      if (a.version > b.version) {
        return 1;
      }

      if (a.version < b.version) {
        return -1;
      }

      return 0;
    });

    return this.driver.getVersion(namespace).then(version => {
      return validFiles.map(file => {
        if (files[files].version)
      });
    });
  }
}

export default new Migratr();
