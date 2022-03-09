class MoviesModel {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }

  async create(movie) {
    const {
      title, price, categoryId, quantity, userId,
    } = movie;
    const sql = `
        INSERT INTO movies (title, price, categoryId, quantity, userId) 
        VALUES (?,?,?,?,?) 
        `;
    const [result] = await this.dbConnection.execute(
      sql,
      [title, price, categoryId, quantity, userId],
    );
    return result.insertId;
  }

  async search(query) {
    let sql = `
      SELECT m.*, c.name as categoryName FROM movies m 
      INNER JOIN categories c ON c.id = m.categoryId 
      WHERE 1 = 1 
      `;

    const params = [];

    if (query.categoryId) {
      sql += `
        AND m.categoryId = ? 
        `;
      params.push(query.categoryId);
    }

    if (query.titleContains) {
      sql += `
      AND LOWER(m.title) like ? 
          `;
      params.push(`%${query.titleContains.toLowerCase()}%`);
    }

    const [result] = await this.dbConnection.execute(sql, params);
    return result;
  }
}

module.exports = MoviesModel;
