/**
 * UserController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

var utility = require('../services/utility'),
		cubed = require('../services/cube');


module.exports = {

	foo: function (req, res, next) {

		res.send(utility.sliceIt());

	},

	yaya: function (req, res, next) {

		res.send(cubed());
	}

  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */
  

};
