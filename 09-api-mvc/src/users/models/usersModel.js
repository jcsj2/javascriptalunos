class UsersModel {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }

  async create(user) {
    const {
      name, email, personalDocument, birthday, password,
    } = user;

    const sql = `
    INSERT INTO users (name, email, personalDocument, birthday, password) 
    VALUES (?,?,?,?,?)
    `;

    const [result] = await this.dbConnection.execute(
      sql,
      [name, email, personalDocument, birthday, password],
    );
    return result.insertId;
  }

  async countByEmailOrPersonalDocument(email, personalDocument) {
    const sql = `
      SELECT count(id) as count FROM users WHERE email = ? OR personalDocument = ?
      `;
    const [result] = await this.dbConnection.execute(
      sql,
      [email, personalDocument],
    );
    return result[0].count;
  }

  async findByEmail(email) {
    const sql = `
      SELECT id, name, personalDocument, password FROM users WHERE email = ?
      `;
    const [result] = await this.dbConnection.execute(
      sql,
      [email],
    );
    return result[0];
  }
}

module.exports = UsersModel;
