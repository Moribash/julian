//This is our route handler, it is basically the same as middleware but specifically for commands to the server basically
const express = require('express')
const path = require('path')
const uuid = require('uuid')
const router = express.Router()
const members = require('../../Members.js')

router.get('/', (req, res) => {
   res.sendFile(path.resolve('../docs/index.html'))
})

router.get('/api/members', (req, res) => res.json(members))//When I go to the link localhost:3000/api/members, it is going to to respond with the array of data I have hard coded in emmersonOnly/Members.js

//Searching members
router.get('/api/members/:id', (req, res) => {
    let found = members.some(member => member.id === parseInt(req.params.id))//Here I am checking if an ID exists for whnatever ID you are looking for, in emmersonOnly/Members.js you can see it only goes up to 3

    if(found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)))//When it finds the proper ID it will filter out all the other objects so you see just the object you were searching for
    } else {
        res.status(400).json({msg: `Member ${req.params.id} not found`})//Otherwise it spits out an http error 400 (bad request)
    }
})

//Adding members
router.post('/', (req, res) => {//Notice how it is now 'router.post' instead of 'router.get', I think this name is retarded, it should be router.send because it is the client sending information to the server
    const newMember = {
        id: uuid.v4(),
        email: req.body.email,           // In this block I am creating a new object full of the information that I want, I want to generate an ID for this information, and I want the information that the client has inputted. The 'body' comes from when we send the BODY information from postman
        username: req.body.username,
        password: req.body.password,
    }

    if(!newMember.email || !newMember.username || !newMember.password){//Here we are checking if the user didnt input any of the required fields, if they didnt then it throws an HTTP error 400
        return res.status(400).json({msg: "Input all fields of information"})//Why do I return this value? What if a response was already sent? When I return this value that means I am going to pass the HTTP error code and message into the middleware.
    }

    members.push(newMember)//Here we are just adding the new information into the array I created in emmersonOnly/Members.js
    
    res.send(members)//We then send the new array back to the client
})

//Updating members
router.put('/api/members/:id', (req, res) => {//Put updates a member here, what if member niggaman123 wants to change his email? We dont have to manually delete that information using get and post, we can just use put to change specified information
    let found = members.some(member => member.id === parseInt(req.params.id))


    //This block is extremely similar to lines 15-23, its because its essentially the same thing, but instead of responding with the specific member the client searched for, we are instead going to change the email of what the client searched for
    if(found) {
        let updateMember = req.body
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)) {
                member.email = updateMember.email ? updateMember.email : member.email             // this notation is new to me angelo, but basically its a compact if else statement, the thing before the question mark is the condition, and the ':' is the else
                member.username = req.body.username ? updateMember.username : member.username
                member.password = req.body.password ? updateMember.password : member.password
            }

            res.json({ msg: 'Member updated ;)', member})
        })
    } else {
        res.status(400).json({msg: `Member ${req.params.id} not found`})
    }
})

//Deleting members, i dont understand what this does at all? if i tell the server to delete a specific member why does it still show up when i get the members?
router.delete('/api/members/:id', (req, res) => {
    let found = members.some(member => member.id === parseInt(req.params.id))

    if(found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({msg: `Member ${req.params.id} not found`})
    }
})

module.exports = router