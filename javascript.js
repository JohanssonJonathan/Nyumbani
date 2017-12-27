window.addEventListener("load", function(){


  var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight,
                     document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );

  let footer = document.getElementById("footer");



                    let grans = limit - window.innerHeight

                    console.log(grans)
  window.addEventListener("scroll", function(e){

    var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;

    console.log(window.innerHeight)
    console.log(scrollPos)

    if(scrollPos === grans){
      footer.style.height = "100px"
    }else if( scrollPos < grans){

      footer.style.height = "0px"
    }
  })


})
