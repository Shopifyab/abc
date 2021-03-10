(function () {
  console.log("this is the script tago");
  var elem = document.getElementById("pinterest-feed-app")
  let boardID = elem.className
  // make api call to get board from dynamodb
    var url = 'https://elevate-test-store.myshopify.com/apps/pin_app/board';

  function getStatus(url,callback){
    var xhr = new XMLHttpRequest;
    var url = 'https://elevate-test-store.myshopify.com/apps/pin_app/board';
    var params = `boardID=${boardID}`;
    xhr.open('POST', url, true);
    xhr.send(params);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var regexStatus = /(\w+ state:.*?)</g
            var response = xhr.responseText;
            var statuses = response.match(regexStatus);
            console.log('Inside function getStatus'+statuses);
            if(callback) callback(statuses);
      };
   }
};
  
  getStatus(url,function(statuses){
    console.log("the stat", statuses);
});
  
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
