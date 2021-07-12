//This block installs packages for the web server to work
const express = require('express') //The express package gives us shortcuts to make a web server, that way we dont have to do extra work to make a web server
const path = require('path')  //The path package lets us find file directories much easier, instead of typing C:/Users/Angelo/... to find a folder, we can just use the methods that this gives us to easily find a directory we are looking for
const noblox = require('noblox.js') //ignore this lol

//This block is packages that I have made, I did this to clean up the file you are currently in so it does not clutter it up, we can have all of what you see in that those files just in this file but that would just make the code annoying to read and work with
const rofunctions = require('./rfunctions.js')//ignore this lol
const logger = require('./logger.js')//The '.' basically means the folder that 'logger.js' is in, or its parent directory

const PORT = process.env.PORT || 3000 //Here I am setting a port, think of a port like a specific address in a city, the IP tells you what the city is and the port will tell you the specific address, we do this because what if you want to run multiple web servers on one computer? You cant just get another IP. 'process.env.PORT' is something for when i run the site on a server that isnt my computer, dont worry abouut it. '||' just means or, so in this line it is going to use 'process.env.PORT', if its not availble use 3000 (can be any number from 1-65535)
const app = express() //Here I am setting the app constant to let me use express methods, that way i can just write 'app.(method here)' instead of express().(method here)

app.use(logger)//the use() method is called when you send a request to it, see logger.js to see what this does

app.use(express.json())

app.use('/', require('./routes/api/members.js'))
app.use('/api/members', require('./routes/api/members.js'))

app.listen(PORT, () => console.log(`angelo is retarded (server started on port ${PORT})`))