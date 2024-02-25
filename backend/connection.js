const mongoose = require('mongoose');

const url = "mongodb+srv://tipubaba998:anurag@cluster0.xtrley7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    // console.log(result);
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;