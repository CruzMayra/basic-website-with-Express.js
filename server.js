var express = require('express');
const app = express()
// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

app.set('view engine', 'pug');

// app.get('/', (req, res) => {
//     res.render('index')
// })

// app.get('/charles', (req, res) => {
//         res.render('index')
//     })
//     app.get('/marilyn', (req, res) => {
//         res.render('index')
//     })
//     app.get('/jean', (req, res) => {
//         res.render('index')
//     })

app.get('/charles', (req, res) => {
    res.render('index', {
        firstname: 'Charles',
        lastname: 'Chaplin',
        tag: 'The Little Tramp',
        content: 'Sir Charles Spencer Chaplin, KBE (16 April 1889 – 25 December 1977) was an English comic actor, filmmaker, and composer who rose to fame in the era of silent film. Chaplin became a worldwide icon through his screen persona "the Tramp" and is considered one of the most important figures in the history of the film industry.[1] His career spanned more than 75 years, from childhood in the Victorian era until a year before his death in 1977, and encompassed both adulation and controversy.',
        movies: ['ho','la']
    })
})
app.get('/marilyn', (req, res) => {
    res.render('index', {
        firstname: 'Marilyn',
        lastname: 'Monroe',
        tag: 'Being normal is boring',
        content: '...',
        // movies: [...]
    })
})

app.get('/', (req,res) =>{
        res.redirect('/charles')
    })

app.listen(5656, () => {
    console.log('http://localhost:5656')
})
