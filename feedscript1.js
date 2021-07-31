  
(function () {

    // make api call to get board from dynamodb
  function getStatus(callback){
   if(window.location.href.indexOf('pfeedid=') > 0){
      console.log("has the pfeedid")
      } else {
      console.log("no pid")
      }
  }
    getStatus()
        })
