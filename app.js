const express = require('express');
const cors = require('cors');
const keys = require('./config/keys');
const bordyParser = require('body-parser');
const exphbs = require('express-handlebars');
const UniLogin = require('@universal-login/provider');
const Web3 = require('web3');
const rpcURL = keys.infuraApiKeyMainnet;
const web3 = new Web3(rpcURL);
// const etheres = require('ethers');


const app = express();
app.use(cors());
// Website you wish to allow to connect

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

// Body Parser Middleware
app.use(bordyParser.json());
app.use(bordyParser.urlencoded({extended:false}));

// Set Static Folder
app.use(express.static(`${__dirname}/public`));


// web3.setProvider(
//   UniLoginProvider.default.createPicker(web3.currentProvider)
// );
let ul = UniLogin.createPicker(rpcURL);
let provider = new ethers.providers.Web3Provider(ul);


//console.log(web3.currentProvider);

//web3.setProvider = UniLoginProvider.createPicker(web3.currentProvider);


// Index Route
app.get('/', (req,res) => {
  res.render('index', {

  });
});
app.get('/index.html', (req,res) => {
  res.render('index', {
  });
});
app.get('/index', (req,res) => {
  res.render('index', {
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
