const express = require('express');
const app = express();

app.get('/', (req,res) => {
  res.json({
    msg:'Hello backendb  test from githubactions '
  })
})
app.listen(3001, () => console.log(`Example app listening at http://localhost:${3001}`))
