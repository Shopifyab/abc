(function () {

    // make api call to get board from dynamodb
  function getStatus(){

   if(window.location.href.indexOf('pinfeedid=') > 0){
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
      } 

  }

    getStatus()

        })()
