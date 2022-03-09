class CategoriesModel {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }

  async findById(id) {
    const sql = `
          SELECT * FROM categories WHERE id = ?
          `;
    const [result] = await this.dbConnection.execute(
      sql,
      [id],
    );
    return result[0];
  }
}

module.exports = CategoriesModel;
