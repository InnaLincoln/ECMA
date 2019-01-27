let xmlRequest = new XMLHttpRequest();

function requestCallback(callback){
  xmlRequest.onreadystatechange = function(){
    if (xmlRequest.readyState === 4 && xmlRequest.status === 200){
      callback(xmlRequest.responseText);
    }
  };
  xmlRequest.open('GET', `http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}`);
  xmlRequest.send();
}


function requestPromise() {
  return new Promise(
    function (resolve, reject) {
      xmlRequest.open("GET", `http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}`);
      if (xmlRequest.readyState === 4 && xmlRequest.status === 200) {
        resolve(xmlRequest.response);
      }
      reject(new Error("Request failed: " + xmlRequest.statusText));
      xmlRequest.send();
    });
}

