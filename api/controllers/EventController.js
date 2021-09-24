'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

const table = 'event'

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM event'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
        // console.log("log name : ",req.body.name)
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM users WHERE id = ?'
        db.query(sql, [req.params.usersId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let usersId = req.params.usersId;
        let sql = 'UPDATE users SET ? WHERE id = ?'
        db.query(sql, [data, usersId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO users SET ?'
        db.query(sql, [data], (err, response) => {
            if (err){
                res.json({message: 'Err'})
            }
            res.json({message: 'Insert success!'})
        })
        console.log("dâta : ",data)
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM users WHERE id = ?'
        db.query(sql, [req.params.usersId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    },

    login: (req, res) => {
        let data = req.body;
        let sql = `SELECT * FROM users WHERE email = '${data.email}'`
        db.query(sql, (err, response) => {
            if (err) throw err           
            if( response[0].email == data.email && response[0].password == data.password ){
                res.send({data: response[0], success: "1" })
            }
            else {
                console.log('fail')
            }
        })
    }
}