//What this file does is tell you where a request was made from, this file is also known as middleware
const logger = (req, res, next) => {//'req' stands for request, it is used when you want to request information from the client, 'res' stands for response, it is used when you want to send information to the client, and 'next' just means it will pass the information to the next middleware function (if it has no parameters)
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`) //This looks complicated but its really not, we are just telling the server to log this: 'http://localhost:3000/(where you are trying to send a request)' Why dont we just write 'http://localhost:3000/${req.originalUrl}'? What if where you are trying to host from isnt localhost, it is allowed to just be host. What if the webpage is no longer uses the http protocol? This is to make sure the server will run everywhere
    next()
}

module.exports = logger //Here we are allowing our other files to see this file, this is how i can use line #8 on server.js