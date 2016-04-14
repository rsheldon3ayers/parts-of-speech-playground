'use strict';

const app = require('express')();
const PORT = process.env.PORT || 3000;
const WordPos = require('wordpos');
const R = require('ramda');
const math = require('mathjs');
const wordpos = new WordPos();
const parser = math.parser();

app.get('*', (req, res) => {

  res.sendFile(__dirname + '/public/index.html')
});

app.listen(PORT, () => {
    console.log(`Express server listening on port: ${PORT}`);
});
