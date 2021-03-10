(function () {
  console.log("this is the script tago");
  var elem = document.getElementById("pinterest-feed-app")
  let boardID = elem.className
  // make api call to get board from dynamodb
      var http = new XMLHttpRequest();
    var url = 'https://elevate-test-store.myshopify.com/apps/pin_app/board';
      var params = `boardID=${boardID}`;
    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
     let result = http.send(params);
     console.log("the result", result)
//  let res = await fetch("https://0db023a4d558.ngrok.io/api/board")
//     console.log("the res", res)
  //make api call to pinterest to get json of all pins

  //load it all into the mosaic boaord

  //When they click on an item do api call to shopify to get the products details

//   var newNode = document.createElement('div');

// // Add ID and content
// newNode.id = 'pinterest_app';
// newNode.innerHTML =
// 	'<h1>Hi, universe!</h1>' +
// 	'<p>The sun is always shining!</p>';

// // Replace the current node with the new node
// elem.replaceWith(newNode);

//   console.log()
//   console.log("elem", elem);

  elem.style.height = "200px";
  elem.style.background = "red";
})();
console.log("hello");
