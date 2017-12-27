window.addEventListener("load", function(){




  let footer = document.getElementById("footer");




  window.addEventListener("scroll", function(e){

    var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight,
                       document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );

                       let grans = limit - window.innerHeight


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
