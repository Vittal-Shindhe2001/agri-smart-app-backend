
const express=require('express')
const cors=require("cors")

const app = express();
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const port = 3069;

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
