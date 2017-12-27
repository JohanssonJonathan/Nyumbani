window.addEventListener("load", function(){




  let footer = document.getElementById("footer");




  window.addEventListener("scroll", function(e){

    var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight,
                       document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );

                       let grans = limit - window.innerHeight


    var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;

    let scrollMax = Math.trunc(scrollPos)
    let gransen = grans -1
    console.log(grans - 1)
    if(scrollMax == grans || scrollMax === grans -1){
      footer.style.height = "100px"
    }else if( scrollMax < grans){
      footer.style.height = "0px"
    }
  })


})
