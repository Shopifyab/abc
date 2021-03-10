(function () {
  console.log("this is the script tago");

  // make api call to get board from dynamodb

  function getStatus(url,callback){
      var elem = document.getElementById("pinterest-feed-app")
  let boardID = elem.className
    var url = 'https://elevate-test-store.myshopify.com/apps/pin_app/board';
    
        var xhr = new XMLHttpRequest;
    var params = `boardID=${boardID}`;
    xhr.open('POST', url, true);
    xhr.send(params);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var regexStatus = /(\w+ state:.*?)</g
            var response = xhr.responseText;
            var statuses = response.match(regexStatus);
            console.log('Inside function getStatus'+statuses, response);

    elem.outerHTML=response; ///it's simple replacement of whole element with contents of str var
            if(callback) callback(statuses);
      };
   }
};
  
  getStatus(url,function(statuses){
    console.log("the stat", statuses);
});
})();
