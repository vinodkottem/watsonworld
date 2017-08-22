var watson = require('watson-developer-cloud');
var fs = require('fs');
var config = require('./config.json');

var visual_recognition = watson.visual_recognition({
  api_key: config.VISUAL_RECOG_KEY,
  version: 'v3',
  version_date: '2016-05-20'
});

var params = {
  images_file: fs.createReadStream('./resources/car.jpeg')
};

visual_recognition.classify(params, function(err, res) {
  if (err)
    console.log(err);
  else
    console.log(JSON.stringify(res, null, 2));
});

var paramsface = {
		  images_file: fs.createReadStream('./resources/fbtest.jpg')
		};

		visual_recognition.detectFaces(paramsface,
		  function(err, response) {
		    if (err)
		      console.log(err);
		    else
		      console.log(JSON.stringify(response, null, 2));
		  });