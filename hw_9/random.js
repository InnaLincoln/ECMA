setTimeout( () => {
  let limitNumber = Math.floor(Math.random() * 10) + 1;
  let pageNumber = Math.floor(Math.random() * 10) + 1;

  $.ajax({
    url: `http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}`,
    context: document.body
  }).done(function(data) {
    console.log(data);
  });
}, 2000);



