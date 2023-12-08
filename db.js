const mongoose = require('mongoose');

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Sailor');
    console.log('MongoDB bağlantısı başarıyla kuruldu.');
  } catch (error) {
    console.error('MongoDB bağlantı hatası:', error);
  }
}
  module.exports = connectToDatabase;
