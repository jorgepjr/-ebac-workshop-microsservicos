require('dotenv').config()
const mongoose = require('mongoose');
const {ServiceBroker} = require('moleculer');

(async () => {
  await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASS}@ebac.ujhs8.mongodb.net/avaliacao?retryWrites=true&w=majority`)

  const broker = new ServiceBroker({
      transporter:'TCP'
  });

  broker.loadServices('./src/services');

  broker.start().then(() =>{
      broker.repl();
  });

})()