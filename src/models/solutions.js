const dbPool = require('../config/database');

const getAlldatasolutions = () => {
    const sqlQuery = 'SELECT * FROM tb_solution';

    return dbPool.execute(sqlQuery);
}

const createDatasolutions = async (title, description, imagePath) => {
    try {
        const sqlQuery = `INSERT INTO tb_solution (title, description, image) VALUES (?, ?, ?)`;
        const[rows, fields] = await dbPool.execute(sqlQuery, [title, description, imagePath]);
        return rows;
    } catch (error) {
        throw error;
    }
}

const updateDatasolutions = async (title, description, imagePath, id) => {
    try {
        const sqlQuery = `UPDATE tb_solution SET title=?, description=?, image=? WHERE id=?`;
        await dbPool.execute(sqlQuery, [title, description, imagePath, id]);
    } catch (error) {
        throw error;
    }
}

const deleteDatasolutions = (id) => {
    const sqlQuery = `DELETE FROM tb_solution WHERE id=${id}`;

    return dbPool.execute(sqlQuery);
}

module.exports = {
    getAlldatasolutions, createDatasolutions, updateDatasolutions, deleteDatasolutions
}