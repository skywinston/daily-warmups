var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/pixar-movies');
var movies = db.get('movies');

router.route('/')
.get(function(req, res, next){
  console.log("Req received");
  movies.find({}).then(function(movies){
    res.render('index', {movies : movies});
  })
})

.post(function(req, res, next){
  movies.insert(req.body).then(function(movie){
    res.redirect('/');
  });
});

router.get('/new', function(req, res, next){
  res.render('new', {movie: ''});
})

router.get('/:id/edit', function(req, res, next){
  movies.findOne({_id: req.params.id}).then(function(movie){
    res.render('edit', {movie: movie});
  })
})

router.get('/:id/delete', function(req, res, next){
  movies.remove({_id: req.params.id}).then(function(movie){
    res.redirect('/');
  });
});

router.post('/:id/update', function(req, res, next){
  movies.updateById(req.params.id, req.body).then(function(movie){
    res.redirect('/');
  });
});


module.exports = router;
