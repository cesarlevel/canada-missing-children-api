const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();
const PORT = process.env.PORT || 3000;
const formatChars = require('./chars');
const canadaMissingChildrenProvince = [
    'Alberta',
    'British Columbia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Nova Scotia',
    'Ontario',
    'Prince Edward Island',
    'Quebec',
    'Saskatchewan',
    'Nunavut',
    'Northwest Territories',
    'Yukon',
];
const canadaMissingChildrenData = [];

canadaMissingChildrenProvince.forEach(async province => {

    const provinceRawData = await axios.get(`https://www.mcsc.ca/missing-children-cases/?p=${province.replace(/\s/, '')}`);
    const $ = cheerio.load(provinceRawData.data);

    $('.case-item').each(function() {
        const item = {
            name: formatChars($(this).text().match(/Name:\s.*/g).join('').replace('Name: ', '').trim()),
            age: $(this).text().match(/Age:\s.*/g).join('').replace('Age: ', '').trim(),
            gender: $(this).text().match(/Gender:\s.*/g).join('').replace('Gender: ', '').trim(),
            missingSince: $(this).text().match(/Missing Since:\s.*/g).join('').replace('Missing Since: ', '').trim(),
            location: $(this).text().match(/Location:\s.*/g).join('').replace('Location: ', '').trim(),
            imageUrl: $(this).find('img').attr('src'),
            ageGroup: 'Child',
            province
        }; 
        canadaMissingChildrenData.push(item);
    });
})

app.use( express.json() );

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.json('Welcome to Canada missing children API, make a GET request /missing to get a full list');
});

app.get('/missing', (req, res) => {
    let response = canadaMissingChildrenData;
    const filters = {...req.query};

    if (Object.keys(filters).length) {
        Object.keys(filters).forEach(key => {
            if (filters[key].includes(',')) {
                filters[key] = filters[key].split(',');
            }
            if (!filters[key]) {
                delete filters[key];
            }
        });

        response = response.filter(item => {
            let isValid = [];
            const compareString = (strA, strB) => {
                const [strASani, strBSani] = [strA, strB].
                    map(str => str.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""));
                return strASani.includes(strBSani);
            }
            Object.keys(filters).forEach(key => {
                if (Array.isArray(filters[key])) {
                    isValid.push(filters[key]
                        .some(value => compareString(item[key], value)));
                } else {
                    isValid.push(compareString(item[key], filters[key]));
                }
            });
            if (isValid.every(item => item)) return item;
          })
    }
    res.status(200).send(response);
});
