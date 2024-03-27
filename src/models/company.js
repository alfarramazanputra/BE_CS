const dbPool = require('../config/database');
    
const getAlldataCompany = () => {
    const sqlQuery = 'SELECT * FROM tb_company';

    return dbPool.execute(sqlQuery);
}

//MODEL BARU
const createCompany = async (
    company_name, 
    image_companyPath, 
    tittle_company, 
    description_company, 
    client, 
    sponsor, 
    rating,
    image_aboutPath,
    description_about, 
    visi, 
    misi, 
    image_clientPath,
    no_wa, 
    no_telephone, 
    email, 
    addres, 
    linkedin, 
    instagram, 
    youtube, 
    telegram, 
    map
) => {
    try {
        const sqlQuery = `INSERT INTO tb_company (
            company_name,
            image_company,
            tittle_company,
            description_company,
            client,
            sponsor,
            rating,
            image_about,
            description_about,
            visi,
            misi,
            image_client,
            no_wa,
            no_telephone,
            email,
            addres,
            linkedin,
            instagram,
            youtube,
            telegram,
            map) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        
        // Ganti undefined dengan null jika ada
        const parameters = [
            company_name,
            image_companyPath,
            tittle_company,
            description_company,
            client,
            sponsor,
            rating,
            image_aboutPath,
            description_about,
            visi,
            misi,
            image_clientPath,
            no_wa,
            no_telephone,
            email,
            addres,
            linkedin,
            instagram,
            youtube,
            telegram,
            map
        ];
        const [rows, fields] = await dbPool.execute(sqlQuery, parameters);
        return rows;
    } catch (error) {
        throw error;
    }
}


const updateDataCompany = async (company_name,
            image_companyPath,
            tittle_company,
            description_company,
            client,
            sponsor,
            rating,
            image_aboutPath,
            description_about,
            visi,
            misi,
            image_clientPath,
            no_wa,
            no_telephone,
            email,
            addres,
            linkedin,
            instagram,
            youtube,
            telegram,
            map,
            id) => {
    try {
        const sqlQuery = `
            UPDATE tb_company 
            SET 
                company_name = ?,
                image_company = ?,
                tittle_company = ?,
                description_company = ?,
                client = ?,
                sponsor = ?,
                rating = ?,
                image_about = ?,
                description_about = ?,
                visi = ?,
                misi = ?,
                image_client = ?,
                no_wa = ?,
                no_telephone = ?,
                email = ?,
                addres = ?,
                linkedin = ?,
                instagram = ?,
                youtube = ?,
                telegram = ?,
                map = ?
            WHERE id = ?
        `;
        
        const parameters = [
            company_name,
            image_companyPath,
            tittle_company,
            description_company,
            client,
            sponsor,
            rating,
            image_aboutPath,
            description_about,
            visi,
            misi,
            image_clientPath,
            no_wa,
            no_telephone,
            email,
            addres,
            linkedin,
            instagram,
            youtube,
            telegram,
            map,
            id
        ];

        const [rows, fields] = await dbPool.execute(sqlQuery, parameters);
        return rows;
    } catch (error) {
        throw error;
    }
};

const updateCompany = async (company_name, image_companyPath, tittle_company, description_company, id) => {
    try {
        const sqlQuery = `
            UPDATE tb_company 
            SET 
                company_name = ?,
                image_company = ?,
                tittle_company = ?,
                description_company = ?
            WHERE id = ?
        `;

        const parameters = [
            company_name, image_companyPath, tittle_company, description_company, id
        ];

        const [rows, fields] = await dbPool.execute(sqlQuery, parameters);
        return rows;
    } catch (error) {
        throw error;
    }
};

const updateClient = async (client, sponsor, rating, image_clientPath, id) => {
    try {
        const sqlQuery = `
            UPDATE tb_company 
            SET 
                client = ?,
                sponsor = ?,
                rating = ?,
                image_client = ?
            WHERE id = ?
        `;

        const parameters = [
            client, sponsor, rating, image_clientPath, id
        ];

        const [rows, fields] = await dbPool.execute(sqlQuery, parameters);
        return rows;
    } catch (error) {
        throw error;
    }
};

const updateAbout = async (image_aboutPath, description_about, visi, misi, id) => {
    try {
        const sqlQuery = `
            UPDATE tb_company 
            SET 
                image_about = ?,
                description_about = ?,
                visi = ?,
                misi = ?
            WHERE id = ?
        `;

        const parameters = [
            image_aboutPath,
            description_about,
            visi,
            misi,
            id
        ];

        const [rows, fields] = await dbPool.execute(sqlQuery, parameters);
        return rows;
    } catch (error) {
        throw error;
    }
};

const updatepersonal = async ( 
    no_wa,
    no_telephone,
    email,
    addres,
    linkedin,
    instagram,
    youtube,
    telegram,
    map,
    id
) => {
    try {
        const sqlQuery = `
            UPDATE tb_company
            SET 
                no_wa = ?,
                no_telephone = ?,
                email = ?,
                addres = ?,
                linkedin = ?,
                instagram = ?,
                youtube = ?,
                telegram = ?,
                map = ?
            WHERE id = ?
        `;

        const parameters = [
            no_wa,
            no_telephone,
            email,
            addres,
            linkedin,
            instagram,
            youtube,
            telegram,
            map,
            id
        ];

        const [rows, fields] = await dbPool.execute(sqlQuery, parameters);
        return rows;
    } catch (error) {
        throw error;
    }
};

const deleteDataCompany = (id) => {
    const sqlQuery = `DELETE FROM tb_company WHERE id=${id}`;

    return dbPool.execute(sqlQuery);
}

module.exports = {
    getAlldataCompany, createCompany, updateDataCompany, deleteDataCompany, updateAbout, updateClient, updateCompany, updatepersonal
}