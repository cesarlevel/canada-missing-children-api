const chars = {
    'Ã€': 'À',
    'Ã': 'Ý',
    'Ã‚': 'Â',
    'Ãƒ': 'Ã',
    'Ã„': 'Ä',
    'Ã…': 'Å',
    'Ã†': 'Æ',
    'Ã‡': 'Ç',
    'Ãˆ': 'È',
    'Ã‰': 'É',
    'ÃŠ': 'Ê',
    'Ã‹': 'Ë',
    'ÃŒ': 'Ì',
    'ÃŽ': 'Î',
    'Ã‘': 'Ñ',
    'Ã’': 'Ò',
    'Ã“': 'Ó',
    'Ã”': 'Ô',
    'Ã•': 'Õ',
    'Ã–': 'Ö',
    'Ã—': '×',
    'Ã˜': 'Ø',
    'Ã™': 'Ù',
    'Ãš': 'Ú',
    'Ã›': 'Û',
    'Ãœ': 'Ü',
    'Ãž': 'Þ',
    'ÃŸ': 'ß',
    'Ã ': 'à',
    'Ã¡': 'á',
    'Ã¢': 'â',
    'Ã£': 'ã',
    'Ã¤': 'ä',
    'Ã¥': 'å',
    'Ã¦': 'æ',
    'Ã§': 'ç',
    'Ã¨': 'è',
    'Ã©': 'é',
    'Ãª': 'ê',
    'Ã«': 'ë',
    'Ã¬': 'ì',
    'Ã­': 'í',
    'Ã®': 'î',
    'Ã¯': 'ï',
    'Ã°': 'ð',
    'Ã±': 'ñ',
    'Ã²': 'ò',
    'Ã³': 'ó',
    'Ã´': 'ô',
    'Ãµ': 'õ',
    'Ã¶': 'ö',
    'Ã·': '÷',
    'Ã¸': 'ø',
    'Ã¹': 'ù',
    'Ãº': 'ú',
    'Ã»': 'û',
    'Ã¼': 'ü',
    'Ã½': 'ý',
    'Ã¾': 'þ',
    'Ã¿': 'ÿ',
    'â€™': '’'
}

function formatChars(str) {
    let val = str;
    Object.keys(chars).forEach(item => {
        const rg = new RegExp(`${item}`, 'g');
        if (str.match(rg)) {
            val = str.replace(rg, chars[item]);
        }
    });
    return val;
}


module.exports = formatChars;