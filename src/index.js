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

//hien thi post
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

//sau khi vào trang search
app.get('/search',(req,res) =>{
  res.render('search')
})

//sau khi submit ở form 
app.post('/search',(req,res) =>{
  console.log(req.body.q) //hiển thị data có key(name) là q 
  res.render('home');
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})