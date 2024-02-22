const dbPool = require('../config/database');

const getAlldatatestimoni = () => {
    const sqlQuery = 'SELECT * FROM tb_testimoni';

    return dbPool.execute(sqlQuery);
}

// const createDatatestimoni = (body) => {
//     const sqlQuery = `INSERT INTO tb_testimoni (name, position, image, description) VALUES('${body.name}', '${body.position}', '${body.image}', '${body.description}')`;

//     return dbPool.execute(sqlQuery);
// }

const createDatatestimoni = async (name, position, imagePath, description) => {
    try {
        const sqlQuery = `INSERT INTO tb_testimoni (name, position, image, description) VALUES (?, ?, ?, ?)`;
        const [rows, fields] = await dbPool.execute(sqlQuery, [name, position, imagePath, description]);
        return rows;
    } catch (error) {
        throw error;
    }
}

// const updateDatatestimoni = (body, id) => {
//     const sqlQuery = `UPDATE tb_testimoni SET name='${body.name}', position='${body.position}', image='${body.image}', description='${body.description}' WHERE id=${id}`;

//     return dbPool.execute(sqlQuery);
// }

const updateDatatestimoni = async(name, position, imagePath, description, id) => {
    try {
        const sqlQuery = `UPDATE tb_testimoni SET name=?, position=?, image=?, description=? WHERE id=?`;
        await dbPool.execute(sqlQuery, [name, position, imagePath, description, id]);
    } catch (error) {
        throw error;
    }
}

const deleteDatatestimoni = (id) => {
    const sqlQuery = `DELETE FROM tb_testimoni WHERE id=${id}`;

    return dbPool.execute(sqlQuery);
}

module.exports = {
    getAlldatatestimoni, createDatatestimoni, updateDatatestimoni, deleteDatatestimoni
}