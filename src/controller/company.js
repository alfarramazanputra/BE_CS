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

//CONTROLLER BARU
const createCompany = async (req, res) => {
    const {
        company_name,  
        tittle_company, 
        description_company, 
        client, 
        sponsor, 
        rating,
        description_about, 
        visi, 
        misi, 
        tittle_culture,
        description_culture,
        no_wa, 
        no_telephone, 
        email, 
        addres, 
        link_linkedin, 
        link_ig, 
        link_youtube, 
        link_telegram, 
        link_map
    } = req.body;

    // Mendapatkan path gambar dari request
    const image_companyPath = req.files['image_company'][0].path;
    const image_aboutPath = req.files['image_about'][0].path;
    const image_culturePath = req.files['image_culture'][0].path;
    const image_clientPath = req.files['image_client'][0].path;

    try {
        await companyModels.createCompany(
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
        );
        res.status(201).json({
            message: "CREATE DATA SUCCESS",
            data: {
                company_name,
                image_company: image_companyPath,
                tittle_company,
                description_company,
                client,
                sponsor,
                rating,
                image_about: image_aboutPath,
                description_about,
                visi,
                misi,
                image_culture: image_culturePath,
                tittle_culture,
                description_culture,
                image_client: image_clientPath,
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
    const { id } = req.params;
    const { company_name,
        tittle_company,
        description_company,
        client,
        sponsor,
        rating,
        description_about,
        visi,
        misi,
        tittle_culture,
        description_culture,
        no_wa,
        no_telephone,
        email,
        addres,
        link_linkedin,
        link_ig,
        link_youtube,
        link_telegram,
        link_map, } = req.body;
    const { image_company, image_about, image_culture, image_client } = req.files;
    
    const image_companyPath = image_company ? image_company[0].path : null;
    const image_aboutPath = image_about ? image_about[0].path : null;
    const image_culturePath = image_culture ? image_culture[0].path : null;
    const image_clientPath = image_client ? image_client[0].path : null;

    try {
        await companyModels.updateDataCompany(
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
            id);
        res.json({
            message: "UPDATE DATA SUCCESS",
            data: {
                company_name,
                image_company: image_companyPath,
                tittle_company,
                description_company,
                client,
                sponsor,
                rating,
                image_about: image_aboutPath,
                description_about,
                visi,
                misi,
                image_culture: image_culturePath,
                tittle_culture,
                description_culture,
                image_client: image_clientPath,
                no_wa,
                no_telephone,
                email,
                addres,
                link_linkedin,
                link_ig,
                link_youtube,
                link_telegram,
                link_map,
            }
        });
    } catch (error) {
        res.status(500).json({
            message: "UPDATE DATA ERROR",
            serverMessage: error
        });
    }
};


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
    getAlldataCompany, createCompany, updateDataCompany, deleteDataCompany
}