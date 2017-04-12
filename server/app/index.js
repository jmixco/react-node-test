'use strict';
const express = require('express');
const router = require('./controller');
const db = require('./db');
const auth = require('./auth');


module.exports = {
    db,
    router,
    auth
};