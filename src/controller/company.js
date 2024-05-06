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
        no_wa, 
        no_telephone, 
        email, 
        addres, 
        linkedin, 
        instagram, 
        youtube, 
        telegram, 
        map
    } = req.body;

    // Mendapatkan path gambar dari request
    const image_companyPath = req.files['image_company'][0].path;
    const image_aboutPath = req.files['image_about'][0].path;
    const image_clientPath = req.files['image_client'][0].path;

    // Memeriksa apakah semua data yang diperlukan telah tersedia
    if (!company_name || !tittle_company || !description_company || !client || !sponsor || !rating ||
        !description_about || !visi || !misi || !no_wa || 
        !no_telephone || !email || !addres || !linkedin || !instagram || !youtube || 
        !telegram || !map || !req.files['image_company'] || !req.files['image_about'] || !req.files['image_client']) {
        return res.status(400).json({
            message: "All data must be filled in."
        });
    }

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
                image_client: image_clientPath,
                no_wa,
                no_telephone,
                email,
                addres,
                linkedin,
                instagram,
                youtube,
                telegram,
                map
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
        no_wa,
        no_telephone,
        email,
        addres,
        linkedin,
        instagram,
        youtube,
        telegram,
        map, } = req.body;
    const { image_company, image_about, image_client } = req.files;
    
    let image_companyPath = null;
    let image_aboutPath = null;
    let image_clientPath = null;

    if (image_company) image_companyPath = image_company[0].path;
    if (image_about) image_aboutPath = image_about[0].path;
    if (image_client) image_clientPath = image_client[0].path;

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
                image_client: image_clientPath,
                no_wa,
                no_telephone,
                email,
                addres,
                linkedin,
                instagram,
                youtube,
                telegram,
                map,
            }
        });
    } catch (error) {
        res.status(500).json({
            message: "UPDATE DATA ERROR",
            serverMessage: error
        });
    }
};


const updateCompany = async (req, res) => {
    const {id} = req.params;
    const { company_name, tittle_company, description_company } = req.body;
    const { image_company } = req.files;

    let image_companyPath = null;
    if (image_company) image_companyPath = image_company[0].path;

    try {
        await companyModels.updateCompany(company_name, image_companyPath, tittle_company, description_company, id);
        res.json({
            message: "UPDATE DATA SUCCESS",
            data: {
                image_client: image_companyPath,
                company_name,
                tittle_company,
                description_company
            }
        });
    } catch (error) {
        res.status(500).json({
            message: "UPDATE DATA ERROR",
            serverMessage: error
        });
    }
};

const updateClient = async (req, res) => {
    const {id} = req.params;
    const { client, sponsor, rating } = req.body;
    const { image_client } = req.files;

    let image_clientPath = null;
    if (image_client) image_clientPath = image_client[0].path;

    try {
        await companyModels.updateClient(client, sponsor, rating, image_clientPath, id);
        res.json({
            message: "UPDATE DATA SUCCESS",
            data: {
                image_client: image_clientPath,
                client, sponsor, rating }
        });
    } catch (error) {
        res.status(500).json({
            message: "UPDATE DATA ERROR",
            serverMessage: error
        });
    }
};

const updateAbout = async (req, res) => {
    const {id} = req.params;
    const { description_about, visi, misi } = req.body;
    const { image_about } = req.files;

    let image_aboutPath = null;
    if (image_about) image_aboutPath = image_about[0].path;

    try {
        await companyModels.updateAbout(image_aboutPath, description_about, visi, misi, id);
        res.json({
            message: "UPDATE DATA SUCCESS",
            data: {
                image_about: image_aboutPath,
                description_about,
                visi,
                misi }
        });
    } catch (error) {
        res.status(500).json({
            message: "UPDATE DATA ERROR",
            serverMessage: error
        });
    }
};

const updatepersonal = async (req, res) => {
    const {id} = req.params;
    const { no_wa,
        no_telephone,
        email,
        addres,
        linkedin,
        instagram,
        youtube,
        telegram,
        map } = req.body;
    
    try {
        await companyModels.updatepersonal( no_wa,
            no_telephone,
            email,
            addres,
            linkedin,
            instagram,
            youtube,
            telegram,
            map,
            id );
        res.json({
            message: "UPDATE DATA SUCCESS",
            data: {
                no_wa,
                no_telephone,
                email,
                addres,
                linkedin,
                instagram,
                youtube,
                telegram,
                map 
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
    getAlldataCompany, createCompany, updateDataCompany, deleteDataCompany, updateAbout, updateClient, updateCompany, updatepersonal
}