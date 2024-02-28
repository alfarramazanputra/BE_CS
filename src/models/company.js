const dbPool = require('../config/database');
    
const getAlldataCompany = () => {
    const sqlQuery = 'SELECT * FROM tb_company';

    return dbPool.execute(sqlQuery);
}

// const createDataCompany = (body) => {
//     const sqlQuery = `INSERT INTO tb_company (company_name, image_company, tittle_company, description_company, client, sponsor, rating, image_about, description_about, tittle_history, description_history, image_history, tittle_profile, description_profile, image_profile, visi, misi, image_culture, tittle_culture, description_culture, image_client, no_wa, no_telephone, email, addres, link_linkedin, link_ig, link_youtube, link_telegram, link_map) VALUES('${body.company_name}', '${body.image_company}', '${body.tittle_company}', '${body.description_company}', '${body.client}', '${body.sponsor}', '${body.rating}', '${body.image_about}', '${body.description_about}', '${body.tittle_history}', '${body.description_history}', '${body.image_history}', '${body.tittle_profile}', '${body.description_profile}', '${body.image_profile}', '${body.visi}', '${body.misi}', '${body.image_culture}', '${body.tittle_culture}', '${body.description_culture}', '${body.image_client}', '${body.no_wa}', '${body.no_telephone}', '${body.email}', '${body.addres}', '${body.link_linkedin}', '${body.link_ig}', '${body.link_youtube}', '${body.link_telegram}', '${body.link_map}')`;

//     return dbPool.execute(sqlQuery);
// }

// const createDataCompany = async (company_name, image_companyPath, tittle_company, description_company, client, sponsor, rating, imageAboutPath, description_about, tittle_history, description_history, imageHistoryPath, tittle_profile, description_profile, imageProfilePath, visi, misi, imageCulturePath, tittle_culture, description_culture, image_clientPath, no_wa, no_telephone, email, addres, link_linkedin, link_ig, link_youtube, link_telegram, link_map) => {
//     try {
//         const sqlQuery = `INSERT INTO tb_company (company_name, image_company, tittle_company, description_company, client, sponsor, rating, image_about, description_about, tittle_history, description_history, image_history, tittle_profile, description_profile, image_profile, visi, misi, image_culture, tittle_culture, description_culture, image_client, no_wa, no_telephone, email, addres, link_linkedin, link_ig, link_youtube, link_telegram, link_map) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

//         // const values = [
//         //     company_name,
//         //     image_companyPath,
//         //     tittle_company,
//         //     description_company,
//         //     client,
//         //     sponsor,
//         //     rating,
//         //     imageAboutPath,
//         //     description_about,
//         //     tittle_history,
//         //     description_history,
//         //     imageHistoryPath,
//         //     tittle_profile,
//         //     description_profile,
//         //     imageProfilePath,
//         //     visi,
//         //     misi,
//         //     imageCulturePath,
//         //     tittle_culture,
//         //     description_culture,
//         //     image_clientPath,
//         //     no_wa,
//         //     no_telephone,
//         //     email,
//         //     addres,
//         //     link_linkedin,
//         //     link_ig,
//         //     link_youtube,
//         //     link_telegram,
//         //     link_map
//         // ];

//         const [rows, fields] = await dbPool.execute(sqlQuery, [company_name,
//             image_companyPath,
//             tittle_company,
//             description_company,
//             client,
//             sponsor,
//             rating,
//             imageAboutPath,
//             description_about,
//             tittle_history,
//             description_history,
//             imageHistoryPath,
//             tittle_profile,
//             description_profile,
//             imageProfilePath,
//             visi,
//             misi,
//             imageCulturePath,
//             tittle_culture,
//             description_culture,
//             image_clientPath,
//             no_wa,
//             no_telephone,
//             email,
//             addres,
//             link_linkedin,
//             link_ig,
//             link_youtube,
//             link_telegram,
//             link_map]);
//         return rows;
//     } catch (error) {
//         throw error;
//     }
// }

const createDataCompany = async (
    company_name, 
    imagePath, 
    tittle_company, 
    description_company, 
    client, 
    sponsor, 
    rating, 
    // image_aboutPath, 
    description_about, 
    visi, 
    misi, 
    // image_culturePath, 
    // image_culture_2Path, 
    // image_culture_3Path, 
    tittle_culture, 
    description_culture, 
    // image_clientPath, 
    // image_client_2Path, 
    // image_client_3Path, 
    // image_client_4Path, 
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

        // company_name, image_company, tittle_company, description_company, client, sponsor, rating, image_about, description_about, visi, misi, image_culture, image_culture_2, image_culture_3, tittle_culture, description_culture, image_client, image_client_2, image_client_3, image_client_4, no_wa, no_telephone, email, addres, link_linkedin, link_ig, link_youtube, link_telegram, link_map

    try {
        const sqlQuery = `INSERT INTO tb_company (company_name, image, tittle_company, description_company, client, sponsor, rating, description_about, visi, misi, tittle_culture, description_culture, no_wa, no_telephone, email, addres, link_linkedin, link_ig, link_youtube, link_telegram, link_map) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        const [rows, fields] = await dbPool.execute(sqlQuery, [
            company_name,
            imagePath,
            tittle_company,
            description_company,
            client,
            sponsor,
            rating,
            // image_aboutPath,
            description_about,
            visi,
            misi,
            // image_culturePath,
            // image_culture_2Path,
            // image_culture_3Path,
            tittle_culture,
            description_culture,
            // image_clientPath,
            // image_client_2Path,
            // image_client_3Path,
            // image_client_4Path,
            no_wa,
            no_telephone,
            email,
            addres,
            link_linkedin,
            link_ig,
            link_youtube,
            link_telegram,
            link_map
        ]);
        return rows;
    } catch (error) {
        throw error;
    }
}

const updateDataCompany = (body, id) => {
    const sqlQuery = `
        UPDATE tb_company 
        SET 
            company_name = '${body.company_name}',
            image_company = '${body.image_company}',
            tittle_company = '${body.tittle_company}',
            description_company = '${body.description_company}',
            client = '${body.client}',
            sponsor = '${body.sponsor}',
            rating = '${body.rating}',
            image_about = '${body.image_about}',
            description_about = '${body.description_about}',
            visi = '${body.visi}',
            misi = '${body.misi}',
            image_culture = '${body.image_culture}',
            tittle_culture = '${body.tittle_culture}',
            description_culture = '${body.description_culture}',
            image_client = '${body.image_client}',
            no_wa = '${body.no_wa}',
            no_telephone = '${body.no_telephone}',
            email = '${body.email}',
            addres = '${body.addres}',
            link_linkedin = '${body.link_linkedin}',
            link_ig = '${body.link_ig}',
            link_youtube = '${body.link_youtube}',
            link_telegram = '${body.link_telegram}',
            link_map = '${body.link_map}'
        WHERE id = ${id}
    `;

    return dbPool.execute(sqlQuery);
};

const deleteDataCompany = (id) => {
    const sqlQuery = `DELETE FROM tb_Company WHERE id=${id}`;

    return dbPool.execute(sqlQuery);
}

module.exports = {
    getAlldataCompany, createDataCompany, updateDataCompany, deleteDataCompany
}