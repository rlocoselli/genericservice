const express = require('express');
const app = express();

app.get('/typebeers', function(req, res) {
res.json([{
	number: 1,
	name: 'IPA',
},{
	number: 2,
	name: 'Pilsen',
},{
	number: 3,
	name: 'Stout',
}])
});

app.listen(80, function(req, res) {
    console.log("Server is running at port 3000");
});
