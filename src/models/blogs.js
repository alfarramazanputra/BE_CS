const dbPool = require('../config/database')

const getAlldataBlog = () => {
    const sqlQuery = 'SELECT * FROM tb_blog';

    return dbPool.execute( sqlQuery );
}

// const createDataBlog = (body) => {
//     const sqlQuery = `INSERT INTO tb_blog (image, tittle, description) VALUES('${body.image}', '${body.tittle}', '${body.description}', '${body.id_category}')`;

//     return dbPool.execute( sqlQuery );
// }

const createDataBlog = async ( imagePath, tittle, description ) => {
    try {
        const sqlQuery = `INSERT INTO tb_blog (image, tittle, description) VALUES (?, ?, ?)`;
        const [rows, fields] = await dbPool.execute(sqlQuery, [imagePath, tittle, description]);
        return rows;
    } catch (error) {
        throw error;
    }
}

// const updateBlog = (body, id) => {
//     const sqlQuery = `UPDATE tb_blog SET image='${body.image}', tittle='${body.tittle}', description='${body.description}'='${body.id_category}' WHERE id=${id}`;

//     return dbPool.execute( sqlQuery );
// }

const updateBlog = async ( imagePath, tittle, description, id ) => {
    try {
        const sqlQuery = `UPDATE tb_blog SET image=?, tittle=?, description=? WHERE id=?`;
        await dbPool.execute(sqlQuery, [imagePath, tittle, description, id]);
    } catch (error) {
        throw error;
    }
};


const deleteDataBlog = (id) => {
    const sqlQuery = `DELETE FROM tb_blog WHERE id=${id}`;

    return dbPool.execute(sqlQuery);
}

module.exports = { getAlldataBlog, createDataBlog, updateBlog, deleteDataBlog }