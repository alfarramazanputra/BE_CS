const dbPool = require('../config/database');

const getAlldatasolutions = () => {
    const sqlQuery = 'SELECT * FROM tb_solution';

    return dbPool.execute(sqlQuery);
}

const createDatasolutions = (body) => {
    const sqlQuery = `INSERT INTO tb_solution (title, description) VALUES('${body.title}', '${body.description}')`;

    return dbPool.execute(sqlQuery);
}

const updateDatasolutions = (body, id) => {
    const sqlQuery = `UPDATE tb_solution SET title='${body.title}', description='${body.description}' WHERE id=${id}`;

    return dbPool.execute(sqlQuery);
}

const deleteDatasolutions = (id) => {
    const sqlQuery = `DELETE FROM tb_solution WHERE id=${id}`;

    return dbPool.execute(sqlQuery);
}

module.exports = {
    getAlldatasolutions, createDatasolutions, updateDatasolutions, deleteDatasolutions
}