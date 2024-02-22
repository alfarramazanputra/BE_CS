const companyModels = require('../models/company');

const getAlldataCompany = async (req,res) => {
    try {
        const [data] = await companyModels.getAlldataCompany();

        res.json({
            message: "GET ALL DATA SUCCES",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "NOT FOUND GET ALL DATA",
            serverMessage: error,
        })
    }
}

// const createDataCompany = async (req, res) => {
//     const { body } = req;

//     // Memeriksa apakah semua data telah diisi
//     const requiredFields = ['company_name', 'image_company', 'tittle_company', 'description_company', 'client', 'sponsor', 'rating', 'image_about', 'description_about', 'tittle_history', 'description_history', 'image_history', 'tittle_profile', 'description_profile', 'image_profile', 'visi', 'misi', 'image_culture', 'tittle_culture', 'description_culture', 'image_sponsors', 'no_wa', 'no_telephone', 'email', 'addres', 'link_linkedin', 'link_ig', 'link_youtube', 'link_telegram', 'link_map'];

//     for (const field of requiredFields) {
//         if (!body[field]) {
//             return res.status(400).json({
//                 message: `Field ${field} harus diisi.`
//             });
//         }
//     }

//     try {
//         await companyModels.createDataCompany(body);
//         res.status(201).json({
//             message: "CREATE DATA SUCCES",
//             data: body
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: "CREATE DATA ERROR",
//             serverMessage: error
//         });
//     }
// };

// const createDataCompany = async (req, res) => {
//     const { company_name, tittle_company, description_company, client, sponsor, rating, description_about, tittle_history, description_history, tittle_profile, description_profile, visi, misi, tittle_culture, description_culture, no_wa, no_telephone, email, addres, link_linkedin, link_ig, link_youtube, link_telegram, link_map } = req.body;
//     // const { image_company, image_about, image_history, image_profile, image_culture, image_sponsors } = req.files;
//     const imageCompanyPath = req.file.path;
//     const imageAboutPath = req.file.path;
//     const imageHistoryPath = req.file.path;
//     const imageProfilePath = req.file.path;
//     const imageCulturePath = req.file.path;
//     const imageSponsorsPath = req.file.path;

//     try {
//         // Mendapatkan path untuk setiap file yang diunggah
//         // const imagePath = req.file.path;
//         // const imageCompanyPath = image_company.map(image => image.path);
//         // const imageAboutPath = image_about.map(image => image.path);
//         // const imageHistoryPath = image_history.map(image => image.path);
//         // const imageProfilePath = image_profile.map(image => image.path);
//         // const imageCulturePath = image_culture.map(image => image.path);
//         // const imageSponsorsPath = image_sponsors.map(image => image.path);

//         await companyModels.createDataCompany(
//             company_name,
//             imageCompanyPath,
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
//             imageSponsorsPath,
//             no_wa,
//             no_telephone,
//             email,
//             addres,
//             link_linkedin,
//             link_ig,
//             link_youtube,
//             link_telegram,
//             link_map,
//         );

//         res.status(201).json({
//             message: "CREATE DATA SUCCESS",
//             data: {
//                 company_name,
//                 image_company: imageCompanyPath,
//                 tittle_company,
//                 description_company,
//                 client,
//                 sponsor,
//                 rating,
//                 image_about: imageAboutPath,
//                 description_about,
//                 tittle_history,
//                 description_history,
//                 image_history: imageHistoryPath,
//                 tittle_profile,
//                 description_profile,
//                 image_profile: imageProfilePath,
//                 visi,
//                 misi,
//                 image_culture: imageCulturePath,
//                 tittle_culture,
//                 description_culture,
//                 image_sponsors: imageSponsorsPath,
//                 no_wa,
//                 no_telephone,
//                 email,
//                 addres,
//                 link_linkedin,
//                 link_ig,
//                 link_youtube,
//                 link_telegram,
//                 link_map
//             }
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: "CREATE DATA ERROR",
//             serverMessage: error,
//         });
//     }
// }

const createDataCompany = async (req, res) => {
    const { company_name, tittle_company, description_company, client, sponsor, rating, description_about, tittle_history, description_history, tittle_profile, description_profile, visi, misi, tittle_culture, description_culture, no_wa, no_telephone, email, addres, link_linkedin, link_ig, link_youtube, link_telegram, link_map } = req.body;

    const { image_company, images_about, images_history, images_profile, images_culture, images_client } = req.files;
    
    try {
        await createDataCompany(
            company_name,
            image_company[0].path,
            tittle_company,
            description_company,
            client,
            sponsor,
            rating,
            images_about[0].path,
            description_about,
            tittle_history,
            description_history,
            images_history[0].path,
            tittle_profile,
            description_profile,
            images_profile[0].path,
            visi,
            misi,
            images_culture[0].path,
            tittle_culture,
            description_culture,
            images_client[0].path,
            no_wa,
            no_telephone,
            email,
            addres,
            link_linkedin,
            link_ig,
            link_youtube,
            link_telegram,
            link_map
        );

        res.status(201).json({
            message: "CREATE DATA SUCCESS",
            data: {
                company_name,
                image_company: image_company[0].path,
                tittle_company,
                description_company,
                client,
                sponsor,
                rating,
                image_about: images_about.map(image => image.path),
                description_about,
                tittle_history,
                description_history,
                image_history: images_history.map(image => image.path),
                tittle_profile,
                description_profile,
                image_profile: images_profile.map(image => image.path),
                visi,
                misi,
                image_culture: images_culture.map(image => image.path),
                tittle_culture,
                description_culture,
                image_sponsors: images_client.map(image => image.path),
                no_wa,
                no_telephone,
                email,
                addres,
                link_linkedin,
                link_ig,
                link_youtube,
                link_telegram,
                link_map
            }
        });
    } catch (error) {
        res.status(500).json({
            message: "CREATE DATA ERROR",
            serverMessage: error,
        });
    }
}


const updateDataCompany = async (req, res) => {

    const {id} = req.params;
    const {body} = req;
    try {
        await companyModels.updateDataCompany(body, id);
        res.json({
            message: "UPDATE DATA SUCCES",
            data: {
                id: id,
                body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: "UPDATE DATA ERROR",
            serverMessage: error,
        })
    }
    
}

const deleteDataCompany = async (req, res) => {

    const {id} = req.params;
    try {
        await companyModels.deleteDataCompany(id);
        res.json({
            message: "DELETE DATA SUCCES",
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: "DELETE DATA ERROR",
            serverMessage: error,
        })
    }
}

module.exports = {
    getAlldataCompany, createDataCompany, updateDataCompany, deleteDataCompany
}