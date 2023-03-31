const express = require('express');
const morgan = require ('morgan');
const mongoose = require('mongoose');

// This connects us to our mongodb database

const dbURI = 'mongodb+srv://netninja:1234@nodetuts.6n6xdg3.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewURLParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log('connected to the db')
    })
    .catch((error) => {
        console.log(error)
    })

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

app.use(express.static('public'))

app.use(morgan('tiny'));

app.get('/', (req, res) => {
	const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor'},
  ];
	res.render('index', {title: 'Home', blogs: blogs });
});

app.get('/about', (req, res) => {
	res.render('about', {title: 'About'});
});

app.get('/blogs/create', (req, res) => {
	res.render('create', {title: 'Create a New Blog'})
});

app.use((req, res) => {
	res.status(404).render('404', {title: '404'});
});