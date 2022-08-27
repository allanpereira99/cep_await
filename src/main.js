// SPDX-License-Identifier: MIT
// Copyright (c) 2022 Allan Pereira <https://github.com/allanpereira99>

const axios = require('axios');
const { JSDOM } =  require("jsdom");
const regex = require('./utils/regex');

async function get(address) {
    if (address.match(regex.validator)) {
        const url = 'http://cep.la/';
        const data = [];
        const response = await axios.get(`${url}${address}`);
        const dom = new JSDOM(response.data);
        const nodeList = dom.window.document.querySelectorAll('td');
        const result = [...nodeList].forEach((e) => e.textContent.match(regex.cep) ? data.push(e.textContent) : '');

        return data;
    } else { return 'endereço invalido' }

}
module.exports = get;