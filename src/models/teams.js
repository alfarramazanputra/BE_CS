const dbPool = require('../config/database');

const getAlldatateams = () => {
    const sqlQuery = 'SELECT * FROM tb_teams';

    return dbPool.execute(sqlQuery);
}

// const createDatateams = (body) => {
//     const sqlQuery = `INSERT INTO tb_teams (name, position, image) VALUES('${body.name}', '${body.position}', '${body.image}')`;

//     return dbPool.execute(sqlQuery);
// }

const createDatateams = async (name, position, imagePath) => {
    try {
        const sqlQuery = `INSERT INTO tb_teams (name, position, image) VALUES (?, ?, ?)`;
        const[rows, fields] = await dbPool.execute(sqlQuery, [name, position, imagePath]);
        return rows;
    } catch (error) {
        throw error;
    }
}

// const updateDatateams = (body, id) => {
//     const sqlQuery = `UPDATE tb_teams SET name='${body.name}', position='${body.position}', image='${body.image}' WHERE id=${id}`;

//     return dbPool.execute(sqlQuery);
// }

const updateDatateams = async(name, position, imagePath, id) => {
    try {
        const sqlQuery = `UPDATE tb_teams name=?, position=?, image=? WHERE id=?`;
        await dbPool.execute(sqlQuery, [name, position, imagePath, id]);
    } catch (error) {
        throw error;
    }
}

const deleteDatateams = (id) => {
    const sqlQuery = `DELETE FROM tb_teams WHERE id=${id}`;

    return dbPool.execute(sqlQuery);
}

module.exports = {
    getAlldatateams, createDatateams, updateDatateams, deleteDatateams
}