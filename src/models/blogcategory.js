const dbPool = require('../config/database');

const getAlldatablogcategory = () => {
    const sqlQuery = 'SELECT * FROM tb_blog_category';

    return dbPool.execute(sqlQuery);
}

const createDatablogcategory = (body) => {
    const sqlQuery = `INSERT INTO tb_blog_category (category_name) VALUES('${body.category_name}')`;

    return dbPool.execute(sqlQuery);
}

const updateDatablogcategory = (body, id) => {
    const sqlQuery = `UPDATE tb_blog_category SET category_name='${body.category_name}' WHERE id=${id}`;

    return dbPool.execute(sqlQuery);
}

const deleteDatablogcategory = (id) => {
    const sqlQuery = `DELETE FROM tb_blog_Category WHERE id=${id}`;

    return dbPool.execute(sqlQuery);
}

module.exports = {
    getAlldatablogcategory, createDatablogcategory, updateDatablogcategory, deleteDatablogcategory
}