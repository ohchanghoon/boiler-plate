'use strict';
const app = require('../index');
const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
