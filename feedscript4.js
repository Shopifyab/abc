(function () {

    // make api call to get board from dynamodb
  console.log("1")
  function getStatus(callback){
      console.log("2", window)

   if(window.location.href.indexOf('pfeedid=') > 0){
      console.log("has the pfeedid")
     function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
     var pinFeedID = getParameterByName("pinfeedid")
        var prodsUrl = 'https://' + window.location.hostname + '/apps/pin_app/addfeedview'
      var prods = new XMLHttpRequest;
      var params = `pfid=${pinFeedID}`;
      prods.open('POST', prodsUrl, true)
      prods.send(params)
      } else {
      console.log("no pid")
      }
          console.log("3")

  }
            console.log("4")

    getStatus()
              console.log("5")

        })()
