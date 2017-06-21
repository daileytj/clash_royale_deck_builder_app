exports.DATABASE_URL = process.env.DATABASE_URL ||
    global.DATABASE_URL ||
    'mongodb://test:test@ds127801.mlab.com:27801/clash_royale_decks';
exports.PORT = process.env.PORT || 8080;
