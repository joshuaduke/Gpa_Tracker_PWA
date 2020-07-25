const express     = require('express'),
      bodyParser  = require('body-parser'),
      app         = express(),
      exphbs      = require('express-handlebars');

const PORT = process.env.PORT || 3000;

app.engine('.hbs', exphbs({extname: ".hbs"}));
app.set('view engine', '.hbs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res)=>{
  res.render("index", {layout:false});
})

app.listen(PORT, ()=>{
  console.log("The server is listening");
});
