require('dotenv').config()
const PORT = process.env.PORT || 4005;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const blogRoutes = require('./routes/blogs');
const companyRoutes = require('./routes/company');
const innovationRoutes = require('./routes/innovations');
const portfolioRoutes = require('./routes/portfolio');
const serviceRoutes = require('./routes/services');
const solutionRoutes = require('./routes/solutions');
const teamRoutes = require('./routes/teams');
const blogcategoryRoutes = require('./routes/blogcategory');
const testimoniRoutes = require('./routes/testimoni');
const authRoutes = require('./routes/authroute');
// const middlewareLogRequest = require('./middleware/logs')

// app.use(middlewareLogRequest)
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/users', userRoutes)
app.use('/blog', blogRoutes)
app.use('/company', companyRoutes)
app.use('/innovation', innovationRoutes)
app.use('/portfolio', portfolioRoutes)
app.use('/service', serviceRoutes)
app.use('/solution', solutionRoutes)
app.use('/team', teamRoutes)
app.use('/blogcategory', blogcategoryRoutes)
app.use('/testimoni', testimoniRoutes)
app.use('/api/auth', authRoutes)


app.listen(PORT, () => {
    console.log(`server berjalan di port ${PORT}`)
})