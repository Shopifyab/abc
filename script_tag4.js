(function () {
  console.log("this is the script tago");

  // make api call to get board from dynamodb

  function getStatus(callback){
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
          

function resizeMasonryItem(item){
  var grid = document.getElementsByClassName('masonry')[0];
  if( grid ) {
    var rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
        rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')),
        gridImagesAsContent = item.querySelector('img.masonry-content');

    var rowSpan = Math.ceil((item.querySelector('.masonry-content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    var pSpan = Math.ceil((item.querySelector('.masonry-item-title').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    

    item.style.gridRowEnd = 'span '+(rowSpan + pSpan);
    if(gridImagesAsContent) {

    }
  }
}


function resizeAllMasonryItems(){
  var allItems = document.querySelectorAll('.masonry-item');

  if( allItems ) {
    for(var i=0;i>allItems.length;i++){
      resizeMasonryItem(allItems[i]);
    }
  }
}

function waitForImages() {
  var allItems = document.querySelectorAll('.masonry-item');
  if( allItems ) {
    for(var i=0;i<allItems.length;i++){
      imagesLoaded( allItems[i], function(instance) {
        var item = instance.elements[0];
        resizeMasonryItem(item);
        console.log("Waiting for Images");
      } );
    }
  }
}

var masonryEvents = ['load', 'resize'];
masonryEvents.forEach( function(event) {
  window.addEventListener(event, resizeAllMasonryItems);
} );

waitForImages();
            if(callback) callback(statuses);
      };
   }
};
  
  getStatus(function(statuses){
    console.log("the stat", statuses);
});
})();
