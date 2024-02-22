const dbPool = require('../config/database');

const getAllUsers = () => {
    const sqlQuery = 'SELECT * FROM tb_user';
    
    return dbPool.execute( sqlQuery );
}

const getUsersbyUsername = (username) => {
    const sqlQuery = 'SELECT * FROM tb_user WHERE username=?';

    return dbPool.execute(sqlQuery, [username]);
}

// const createNewUsers = (body) => {
//     const sqlQuery = `INSERT INTO tb_user (username, password, fullname) VALUES('${body.username}', '${body.password}', '${body.fullname}')`;

//     return dbPool.execute( sqlQuery );
// }

const createNewUsers = async(username, password, fullname, place_date_birth, position, imagePath, addres) => {
    try {
        const sqlQuery = `INSERT INTO tb_user (username, password, fullname, place_date_birth, position, image, addres) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const[rows, fields] = await dbPool.execute(sqlQuery, [username, password, fullname, place_date_birth, position, imagePath, addres]);
        return rows;
    } catch (error) {
        throw error;
    }
}

// const updateUsers = (body, id) => {
//     const sqlQuery = `UPDATE tb_user SET username='${body.username}', password='${body.password}', fullname='${body.fullname}' WHERE id=${id}`;

//     return dbPool.execute( sqlQuery );
// }

const updateUsers = async (username, password, fullname, place_date_birth, position, imagePath, addres, id) => {
    try {
        const sqlQuery = `UPDATE tb_user SET username=?, password=?, fullname=?, place_date_birth=?, position=?, image=?, addres=? WHERE id=?`;
        await dbPool.execute(sqlQuery, [username, password, fullname, place_date_birth, position, imagePath, addres, id]);
    } catch (error) {
        throw error;
    }
}

const deleteUsers = (id) => {
    const sqlQuery = `DELETE FROM tb_user WHERE id=${id}`;

    return dbPool.execute( sqlQuery );
}


module.exports = { getAllUsers, getUsersbyUsername, createNewUsers, updateUsers, deleteUsers }