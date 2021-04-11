(function () {

    // make api call to get board from dynamodb
  
    function getStatus(callback){
      var userSession = sessionStorage.getItem("pfeed");
      if(userSession === undefined || userSession === null){
      sessionStorage.setItem("pfeed", "true");
      var addTrafficUrl = "https://" + window.location.hostname + "/apps/pin_app/addstoretraffic"
          var addTraffic = new XMLHttpRequest;
    addTraffic.open('POST', addTrafficUrl, true)
    addTraffic.send()
      } 
  
        var elem = document.getElementsByClassName("pinterest-feed-app")
        if(elem.length > 0){
        for(let i = 0; i < elem.length; i++){
    let boardID = elem[i].id
    let shopName = elem[i].getAttribute('data-shop')
      var url = "https://" + window.location.hostname + "/apps/pin_app/board";
      var checkEnableUrl = "https://" + window.location.hostname + "/apps/pin_app/checkenabled"
      var checkEnable = new XMLHttpRequest;
          var xhr = new XMLHttpRequest;
      var params = `boardID=${boardID}`;
    checkEnable.open('POST', checkEnableUrl, true)
    checkEnable.send(params)
    checkEnable.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var res = checkEnable.responseText
            let resObj = JSON.parse(res)
            if(resObj.enabled === true){
                  const div = document.createElement("div");
  div.className = "loader";
                div.innerHTML = `<style>    .loader {
      border: 16px solid #f3f3f3;
      border-top: 16px solid #cccccc;
      border-radius: 50%;
      width: 80px;
      height: 80px;
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }</style>`;
  document.getElementById(boardID).appendChild(div);
      xhr.open('POST', url, true);
      xhr.send(JSON.stringify(params));
      xhr.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
  
              var response = xhr.responseText;
  
      elem[i].outerHTML=response; ///it's simple replacement of whole element with contents of str var
  
              let pinBoardElem = document.getElementById('pinboard-wrapper');
    let socialName = pinBoardElem.getAttribute('data-social')
    let socialHandle = pinBoardElem.getAttribute('data-socialhandle')
                let modalElement = `<div id="pfeed-popUp" >
        <div id="pfeed-modal"  >
          <div id="pfeed-ImgCont">
            <img id="pfeed-modalimg" src="https://i.pinimg.com/564x/42/a7/e0/42a7e0d60941a9ed3a6dc717ec9fa8d5.jpg">
          </div>
          <div id="pfeed-Product">
  <div  id="pfeed-modal-close" class="pfeed-modal_close"></div>
            <div class="pfeed-product-header">
  <a>
              <p id="pfeed-social-title">${socialName}</p>
              <p id="pfeed-social-handle">${socialHandle}</p>
            </a>
            </div>
  <hr id="pfeed-hline" />
  <div id="pfeed-arrows"> 
            <div id="pfeed-left-arrow-cont" class="pfeed-arrow-cont">
          <div id="pfeed-left-arrow"></div>
              </div>
            <div id="pfeed-right-arrow-cont" class="pfeed-arrow-cont">
            <div id="pfeed-right-arrow"> </div>
            </div>
          </div>
            <div id="pfeed-product-list">
  <div id="pfeed-products">
  </div>
  <div id="pfeed-modal-description">the description</div>
              </div>
              
              </div>
            </div>
          </div>`
                let insertel = document.body.insertAdjacentHTML("afterbegin", modalElement)
  function CloseModal(e) {
    if (e.target.id == "pfeed-popUp") {
       document.getElementById('pfeed-popUp').style.display = 'none';
       document.body.style.overflowY = "unset"
    }
  }
            function ModalCloseButton(e) {
       document.getElementById('pfeed-popUp').style.display = 'none';
       document.body.style.overflowY = "unset"
  }
  var BackDrop = document.getElementById("pfeed-popUp")
  var closeElement = document.getElementById("pfeed-modal-close")
  BackDrop.addEventListener("click", CloseModal, false)
  closeElement.addEventListener("click", ModalCloseButton, false)
  function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }
  var isPinSeen = () => {
  if(checkVisible(pinBoardElem)){
    var addViewUrl = "https://" + window.location.hostname + "/apps/pin_app/addview"
    var addView = new XMLHttpRequest;
      var params = `boardID=${boardID}`;
    addView.open('POST', addViewUrl, true)
    addView.send(params)
    
    document.removeEventListener('scroll', isPinSeen);
  }
  }
  document.addEventListener('scroll', isPinSeen);
  // adding onclick event to each pin
            let pinElements = document.getElementsByClassName("masonry-item")
  
    
    let getProducts = ({products, pinID, boardID}) => {
        var loadElem = document.createElement('div');
        loadElem.className = 'loader';
        document.getElementById('pfeed-products').innerHTML = '';
        document.getElementById('pfeed-products').appendChild(loadElem);
        var prodsUrl = 'https://' + window.location.hostname + '/apps/pin_app/boardproducts'
      var prods = new XMLHttpRequest;
      var params = `products=${products}&shop=${shopName}&postID=${pinID}&boardID=${boardID}`;
      prods.open('POST', prodsUrl, true)
      prods.send(params)
      prods.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var res = prods.response
            document.getElementById('pfeed-products').innerHTML = res
   
            let productElements = document.getElementsByClassName('pfeed-product-card')
            for(let j = 0; j < productElements.length;j++){
            productElements[j].addEventListener("click", function() {
                let productID = productElements[j].getAttribute('data-productid')
                      var clickUrl = 'https://' + window.location.hostname + '/apps/pin_app/addproductclick'
      var click = new XMLHttpRequest;
      var clickParams = `productID=${productID}&shop=${shopName}&postID=${pinID}&boardID=${boardID}`;
      click.open('POST', clickUrl, true)
      click.send(clickParams)
        var http = new XMLHttpRequest();
        var url = "https://" + window.location.hostname + '/cart/update.js';
  var params = `attributes[pinterest-feed ${productID}]=${pinID},${boardID}`;
        http.open('POST', url, true);
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          http.send(params);
  
            })
            }
        }
    }
}
let leftArrowElem = document.getElementById("pfeed-left-arrow-cont")
let rightArrowElem = document.getElementById("pfeed-right-arrow-cont")
let currPinID = document.getElementById('pfeed-popUp').getAttribute("data-pinID")

                 leftArrowElem.addEventListener("click", function leftClick() {
  let currPinID = document.getElementById('pfeed-popUp').getAttribute("data-pinID")
  let currPinIndex = document.getElementById('pfeed-popUp').getAttribute("data-index")
  let prevIndex = currPinIndex - 1 
  if(prevIndex < 0) prevIndex = pinElements.length - 1
  let prevImage = pinElements[prevIndex].getAttribute("data-image")
  let prevDesc = pinElements[prevIndex].getAttribute("data-desc")
  let boardID = pinElements[prevIndex].getAttribute('data-boardid')
  let products = pinElements[prevIndex].getAttribute('data-products')
  let pinID = pinElements[prevIndex].getAttribute('data-pinID')
  if(products != null && products != "" && products != undefined){
  getProducts({products, pinID, boardID})
  }
  document.getElementById('pfeed-modalimg').src = prevImage;
         document.getElementById('pfeed-modal-description').innerHTML = prevDesc;
         document.getElementById('pfeed-popUp').setAttribute("data-index", prevIndex)
  
      }, true)
            
      rightArrowElem.addEventListener("click", function rightClick() {
        let currPinID = document.getElementById('pfeed-popUp').getAttribute("data-pinID")
        let currPinIndex = document.getElementById('pfeed-popUp').getAttribute("data-index")
        let nextIndex = Number(currPinIndex) + 1
        if(nextIndex > (pinElements.length - 1)) nextIndex = 0
        let nextImage = pinElements[nextIndex].getAttribute("data-image")
        let nextDesc = pinElements[nextIndex].getAttribute("data-desc")
        let products = pinElements[nextIndex].getAttribute('data-products')
        let pinID = pinElements[nextIndex].getAttribute('data-pinID')
        let boardID = pinElements[nextIndex].getAttribute('data-boardid')
        if(products != null && products != "" && products != undefined){
        getProducts({products, pinID, boardID})
        }
        document.getElementById('pfeed-modalimg').src = nextImage;
               document.getElementById('pfeed-modal-description').innerHTML = nextDesc;
               document.getElementById('pfeed-popUp').setAttribute("data-index", nextIndex)
            }, true)

            for(let i = 0; i < pinElements.length; i++){
            pinElements[i].addEventListener("click", function() {
            document.body.style.overflowY = "hidden"
            let pinLrgImage = pinElements[i].getAttribute('data-image')
            let pinDesc = pinElements[i].getAttribute('data-desc')
            let products = pinElements[i].getAttribute('data-products')
            let boardID = pinElements[i].getAttribute('data-boardid')
            let pinID = pinElements[i].id
            document.getElementById('pfeed-popUp').style.display = 'flex'; 
      document.getElementById('pfeed-modalimg').src = pinLrgImage;
      document.getElementById('pfeed-modal-description').innerHTML = pinDesc || "";
    if(products != null && products != "" && products != undefined){
  getProducts({products, pinID, boardID})
    }
            })
            }
  
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
        } );
      }
    }
  }
  
  var masonryEvents = ['load', 'resize'];
  masonryEvents.forEach( function(event) {
    window.addEventListener(event, resizeAllMasonryItems);
  } );
  
  waitForImages();
        };
     }
    }
  }
    }
    }
  }
  };
    
    getStatus();
  
    
  !function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});
  
  })()
