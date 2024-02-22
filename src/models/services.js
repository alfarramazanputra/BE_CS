const dbPool = require('../config/database');

const getAlldataservices = () => {
    const sqlQuery = 'SELECT * FROM tb_services';

    return dbPool.execute(sqlQuery);
}

const getDataServicesbyId = (id) => {
    const sqlQuery = 'SELECT * FROM tb_services WHERE id=?';

    return dbPool.execute(sqlQuery, [id]);
}

// const createDataservices = (body) => {
//     const sqlQuery = `INSERT INTO tb_services (tittle, description, image) VALUES('${body.tittle}', '${body.description}','${body.image}')`;

//     return dbPool.execute(sqlQuery);
// }

const createDataservices = async (tittle, description, imagePath) => {
    try {
        const sqlQuery = `INSERT INTO tb_services (tittle, description, image) VALUES (?, ?, ?)`;
        const [rows, fields] = await dbPool.execute(sqlQuery, [tittle, description, imagePath]);
        return rows;
    } catch (error) {
        throw error;
    }
};

// const updateDataservices = (body, id) => {
//     const sqlQuery = `UPDATE tb_services SET tittle='${body.tittle}', description='${body.description}', image='${body.image}' WHERE id=${id}`;

//     return dbPool.execute(sqlQuery);
// }

const updateDataservices = async (tittle, description, imagePath, id) => {
    try {
        const sqlQuery = `UPDATE tb_services SET tittle=?, description=?, image=? WHERE id=?`;
        await dbPool.execute(sqlQuery, [tittle, description, imagePath, id]);
    } catch (error) {
        throw error;
    }
}


const deleteDataservices = (id) => {
    const sqlQuery = `DELETE FROM tb_services WHERE id=${id}`;

    return dbPool.execute(sqlQuery);
}

module.exports = {
    getAlldataservices, getDataServicesbyId, createDataservices, updateDataservices, deleteDataservices
}