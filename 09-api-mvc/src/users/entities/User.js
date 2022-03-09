const bcrypt = require('bcrypt');

class User {
  constructor(name, email, personalDocument, birthday, password) {
    this.name = name;
    this.email = email?.toLowerCase().trim();
    this.personalDocument = personalDocument?.trim();
    this.birthday = birthday;
    this.password = password;
  }

  static hashPassword(originalPassword) {
    return bcrypt.hashSync(originalPassword, 6);
  }

  static checkPassword(originalPassword, hashPassword) {
    return bcrypt.compareSync(originalPassword, hashPassword);
  }
}

module.exports = User;
