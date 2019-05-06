/**************
 * Imports for Server
 */
const express = require('express');
const bodyParser = require('body-parser');
const getRequests = require("./getRequests")
const logger = require("./logger")

/**************
 * Launching the html page using express
 */
const app = express()



app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs')


app.get('/', function (req, res) {
  logger.log("Someone Connected!")
  res.render('index');
})

app.post('/', function (req, res) {
  logger.log("Someone Connected!")
  res.render('index')
})


/**************
 * starting up sending get requests and routing
 */
getRequests.createGetRequests(logger)
getRequests.createRouting(app, logger)

app.listen(3000, "0.0.0.0", function () {
  console.log('Example app listening on port 3000!')
})