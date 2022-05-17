const mongoose = require('mongoose');

mongoose.connection.on('connected', () => {
  console.log('Connection mongodb Established');
});

mongoose.connection.on('reconnected', () => {
  console.log('Connection Reestablished');
});

mongoose.connection.on('disconnected', () => {
  console.log('Connection Reestablished');
});

mongoose.connection.on('close', () => {
  console.log('Connection Closed');
});

mongoose.connection.on('error', (error) => {
  console.log('DB ERROR', error.message);
});

mongoose.connect('mongodb://127.0.0.1:27017/ipssi');
