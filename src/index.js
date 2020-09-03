const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const path = require('path')

//http logger
//app.use(morgan('combined'))

//static photo
app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({
  extended:true
}))
app.use(express.json())


//template engine
app.engine('hbs', handlebars({
  extname :'.hbs'
}))

app.set('view engine', 'hbs')


app.set('views',path.join(__dirname,'resources/views'))

app.get('/', (req, res) => {
  res.render('home');
})

app.post('/',(req,res) =>{
  console.log(req.body.q)
  res.render('news')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})