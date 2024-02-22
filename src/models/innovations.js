const dbPool = require('../config/database');

const getAlldataInnovations = () => {
    const sqlQuery = 'SELECT * FROM tb_innovation';

    return dbPool.execute(sqlQuery);
}

// const createDataInnovations = (body) => {
//     const sqlQuery = `INSERT INTO tb_innovation (tittle, description, image) VALUES('${body.tittle}', '${body.description}', '${body.image}')`;

//     return dbPool.execute(sqlQuery);
// }

const createDataInnovations = async (tittle, description, imagePath) => {
    try {
        const sqlQuery = `INSERT INTO tb_innovation (tittle, description, image) VALUES (?, ?, ?)`;
        const [rows, fields] = await dbPool.execute(sqlQuery, [tittle, description, imagePath]);
        return rows;
    } catch (error) {
        throw error;
    }
};

// const updateDataInnovations = (body, id) => {
//     const sqlQuery = `UPDATE tb_innovation SET tittle='${body.tittle}', description='${body.description}', image='${body.image}' WHERE id=${id}`;

//     return dbPool.execute(sqlQuery);
// }

const updateDataInnovations = async(tittle, description, imagePath, id) => {
    try {
        const sqlQuery = `UPDATE tb_innovation SET tittle=?, description=?, image=? WHERE id=?`;
        await dbPool.execute(sqlQuery, [tittle, description, imagePath, id]);
    } catch (error) {
        throw error;
    }
}

const deleteDataInnovatios = (id) => {
    const sqlQuery = `DELETE FROM tb_innovation WHERE id=${id}`

    return dbPool.execute(sqlQuery);
}

module.exports = {
    getAlldataInnovations, createDataInnovations, updateDataInnovations, deleteDataInnovatios
}