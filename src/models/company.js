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
    image_culturePath,
    tittle_culture, 
    description_culture,
    image_clientPath,
    no_wa, 
    no_telephone, 
    email, 
    addres, 
    link_linkedin, 
    link_ig, 
    link_youtube, 
    link_telegram, 
    link_map
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
            image_culture,
            tittle_culture,
            description_culture,
            image_client,
            no_wa,
            no_telephone,
            email,
            addres,
            link_linkedin,
            link_ig,
            link_youtube,
            link_telegram,
            link_map) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        
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
            image_culturePath,
            tittle_culture,
            description_culture,
            image_clientPath,
            no_wa,
            no_telephone,
            email,
            addres,
            link_linkedin,
            link_ig,
            link_youtube,
            link_telegram,
            link_map
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
            image_culturePath,
            tittle_culture,
            description_culture,
            image_clientPath,
            no_wa,
            no_telephone,
            email,
            addres,
            link_linkedin,
            link_ig,
            link_youtube,
            link_telegram,
            link_map,
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
                image_culture = ?,
                tittle_culture = ?,
                description_culture = ?,
                image_client = ?,
                no_wa = ?,
                no_telephone = ?,
                email = ?,
                addres = ?,
                link_linkedin = ?,
                link_ig = ?,
                link_youtube = ?,
                link_telegram = ?,
                link_map = ?
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
            image_culturePath,
            tittle_culture,
            description_culture,
            image_clientPath,
            no_wa,
            no_telephone,
            email,
            addres,
            link_linkedin,
            link_ig,
            link_youtube,
            link_telegram,
            link_map,
            id
        ];

        const [rows, fields] = await dbPool.execute(sqlQuery, parameters);
        return rows;
    } catch (error) {
        throw error;
    }
};


const deleteDataCompany = (id) => {
    const sqlQuery = `DELETE FROM tb_Company WHERE id=${id}`;

    return dbPool.execute(sqlQuery);
}

module.exports = {
    getAlldataCompany, createCompany, updateDataCompany, deleteDataCompany
}