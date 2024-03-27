const dbPool = require('../config/database');

const getAlldataculture = () => {
    const sqlQuery = 'SELECT * FROM tb_culture';

    return dbPool.execute(sqlQuery);
}

const createDataculture = async (imagePath, tittle_culture, description_culture) => {
    try {
        const sqlQuery = `INSERT INTO tb_culture (image, tittle_culture, description_culture) VALUES (?, ?, ?)`;
        const [rows, fields] = await dbPool.execute(sqlQuery, [imagePath, tittle_culture, description_culture]);
        return rows;
    } catch (error) {
        throw error;
    }
};

const updateDataculture = async (imagePath, tittle_culture, description_culture, id) => {
    try {
        const sqlQuery = `UPDATE tb_culture SET image=?, tittle_culture=?, description_culture=? WHERE id=?`;
        const [rows, fields] = await dbPool.execute(sqlQuery, [imagePath, tittle_culture, description_culture, id]);
        return rows;
    } catch (error) {
        throw error;
    }
};

const deleteDataculture = (id) => {
    const sqlQuery = `DELETE FROM tb_culture WHERE id=${id}`;

    return dbPool.execute(sqlQuery);
}

module.exports = { getAlldataculture, createDataculture, updateDataculture, deleteDataculture }