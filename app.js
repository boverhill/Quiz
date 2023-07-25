const express = require('express');
const mongoose = require("mongoose");

const app = express();
const port = 7000;

const connectionString = "mongodb+srv://myuser:mypwd@cluster0.3xdtn2w.mongodb.net/Exam";

mongoose.connect(connectionString, {
  useNewUrlParser: true,
});

const quizSchema = new mongoose.Schema({
  name: String,
  sid: String,
});

const Quiz = mongoose.model("Quiz", quizSchema);

app.get('/', async (req, res) => {
  try {
    const data = new Quiz({
      name: 'Braydon Overhill',
      sid: '300233865',
    });
    await Quiz.deleteMany({});
    await data.save();

    res.send('Successful addition to Mongodb atlas');
  } catch (err) {
    console.error('Error occurred:', err);
    res.status(500).send('An error occurred.');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
