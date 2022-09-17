// str -> 'Hello', strCase -> 'upper' | 'lower'
function toCase( str, strCase ) {
    if( strCase === 'upper' ) {
        return str.toUpperCase();
    }

    if( strCase === 'lower' ) {
        return str.toLowerCase();
    }

    return str; // no conversion - just send the string back as it was
}

const greetings = {
    '/english': 'Hello',
    '/french': 'Bonjour',
    '/hindi': 'Namaste',
    '/ukrainian': 'Previt'
};

module.exports = {
    // toCase: toCase,
    toCase,
    // greetings: greetings
    greetings
};