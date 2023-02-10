const mongoose = require('mongoose')
const Player = require('./player')
const db = require('../../config/db')

const startPlayers = [
    { name: 'Timmy Hyland', injured: false, age: 11, number: 2},
    { name: 'Willy Maynor', injured: false, age: 13, number: 8},
    { name: 'Bobby Harris', injured: false, age: 12, number: 30},
    { name: 'Jack Sanders', injured: false, age: 12, number: 14},
    { name: 'Sammy Harris', injured: false, age: 14, number: 23},
]

// first we connect to the db
// then remove all pets
// then add the start pets
// and always close the connection, whether its a success or failure

mongoose.connect(db, {
    useNewUrlParser: true
})
    .then(() => {
        Player.deleteMany()
            .then(deletedPlayers => {
                console.log('the deleted players:', deletedPlayers)
                // now we add our pets to the db
                Player.create(startPlayers)
                    .then(newPlayer => {
                        console.log('the new player', newPlayer)
                        mongoose.connection.close()
                    })
                    .catch(error => {
                        console.log(error)
                        mongoose.connection.close()
                    })
            })
            .catch(error => {
                console.log(error)
                mongoose.connection.close()
            })
    })
    .catch(error => {
        console.log(error)
        mongoose.connection.close()
    })