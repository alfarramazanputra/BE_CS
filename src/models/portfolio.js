const dbPool = require('../config/database');

const getAlldataPortfolio = () => {
    const sqlQuery = 'SELECT * FROM tb_portfolio';

    return dbPool.execute(sqlQuery);
}

// const createDataPortfolio = (body) => {
//     const sqlQuery = `INSERT INTO tb_portfolio (image, title, software_name, description, amount) VALUES('${body.image}', '${body.title}', '${body.software_name}', '${body.description}', '${body.amount}')`;

//     return dbPool.execute(sqlQuery);
// }

const createDataPortfolio = async (imagePath, title, software_name, description, amount) => {
    try {
        const sqlQuery = `INSERT INTO tb_portfolio (image, title, software_name, description, amount) VALUES (?, ?, ?, ?, ?)`;
        const [rows, fields] = await dbPool.execute(sqlQuery, [imagePath, title, software_name, description, amount]);
        return rows;
    } catch (error) {
        throw error;
    }
}

// const updateDataPortfolio = (body, id) => {
//     const sqlQuery = `UPDATE tb_portfolio SET image='${body.image}', title='${body.title}', software_name='${body.software_name}', description='${body.description}', amount='${body.amount}' WHERE id=${id}`;

//     return dbPool.execute(sqlQuery);
// }

const updateDataPortfolio = async ( imagePath, title, software_name, description, amount, id ) => {
    try {
        const sqlQuery = `UPDATE tb_portfolio SET image=?, title=?, software_name=?, description=?, amount=? WHERE id=?`;
        await dbPool.execute(sqlQuery, [ imagePath, title, software_name, description, amount, id ]);
    } catch (error) {
        throw error;
    }
}

const deleteDataPortfolio = (id) => {
    const sqlQuery = `DELETE FROM tb_portfolio WHERE id=${id}`;

    return dbPool.execute(sqlQuery);
}

module.exports = {
    getAlldataPortfolio, createDataPortfolio, updateDataPortfolio, deleteDataPortfolio
}