const mongoose = require('mongoose');

const url = "mongodb+srv://anurag:anurag@cluster0.n9lckrf.mongodb.net/plantdoc?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    // console.log(result);
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;