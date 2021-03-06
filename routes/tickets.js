var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  // code goes here
  knex('table_name')
    .select('*')
    .orderBy('id')
    .then(data => {
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(data))
    })
    .catch((err) => next(err))
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  // code goes here
})

router.post('/', (req, res, next) => {
  const { item } = req.body
  // code goes here
})

router.patch('/:id', (req, res, next) => {
  const id = req.params.id
  const { item } = req.body
  // code goes here
})

router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  // code goes here
})


module.exports = router;
