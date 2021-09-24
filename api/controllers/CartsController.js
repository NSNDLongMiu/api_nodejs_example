'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

const table = 'cart'

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM cart'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
        // console.log("log name : ",req.body.name)
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM cart WHERE user_id = ?'
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

    cartuserid: (req, res) => {
        let data = req.body;
        let sql = `SELECT * FROM cart INNER JOIN products ON cart.item_id = products.item_id WHERE user_id = ${data.user_id}`
        db.query(sql, (err, response) => {
            if (err) throw err
            if(response == ''){
                res.send({success: 2 })
            } else if( response[0].user_id == data.user_id){
                res.send({response, success: 1 })
            }
            else {
                res.send({success: 0 })
            }
        })
    },

    cartupdate: (req, res) => {
        let data = req.body;
        let sql = `UPDATE cart SET user_id = ${data.user_id} WHERE cart_id = ${data.cart_id}`
        db.query(sql, (err, response) => {
            if (err) throw err
            res.send({success: 1})
        })
    },
    cartdelete: (req, res) => {
        let data = req.body;
        let sql = `DELETE FROM cart WHERE item_id = ${data.item_id}`
        db.query(sql, (err, response) => {
            if (err) throw err
            res.send({success: 1})
        })
    },
}