require('dotenv').config()
const PORT = process.env.PORT || 4005;
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const blogRoutes = require('./routes/blogs');
const companyRoutes = require('./routes/company');
const cultureRoutes = require('./routes/culture');
const innovationRoutes = require('./routes/innovations');
const portfolioRoutes = require('./routes/portfolio');
const serviceRoutes = require('./routes/services');
const solutionRoutes = require('./routes/solutions');
const teamRoutes = require('./routes/teams');
const testimoniRoutes = require('./routes/testimoni');
const authRoutes = require('./routes/authroute');
const registerRoutes = require('./routes/register');

const verifyToken = require('./middleware/authMiddleware');

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(verifyToken)
app.use('/users', userRoutes)
app.use('/blog', blogRoutes)
app.use('/company', companyRoutes)
app.use('/culture', cultureRoutes)
app.use('/innovation', innovationRoutes)
app.use('/portfolio', portfolioRoutes)
app.use('/service', serviceRoutes)
app.use('/solution', solutionRoutes)
app.use('/team', teamRoutes)
app.use('/testimoni', testimoniRoutes)
app.use('/auth', authRoutes)
app.use('/auth', registerRoutes)

app.get('/ping', (req, res) => {
    res.send('pong');
  });


app.use('/asset', express.static('public/uploads'));


app.listen(PORT, () => {
    console.log(`server berjalan di port ${PORT}`)
})