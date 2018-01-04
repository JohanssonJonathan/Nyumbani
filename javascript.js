window.addEventListener("load", function(){

  let headerBilder = ["_MG_9436.jpg","_Safari_113.jpg","_Safari_548.jpg","_Safari_591.jpg","elefant2.png"]

  let header = document.getElementsByTagName("header")[0];

  let logga = document.getElementById("logga")

  let i =0;
let interval =  setInterval(function(){




      header.style.background = (`url(Bilder/Nyumbaniskate/${headerBilder[i]})`);

      header.style.backgroundRepeat = "no-repeat";
      header.style.backgroundPosition = "center 0";
      header.style.backgroundSize = "100%";


      if(headerBilder.length - 1 === i ){
        i=0
      }else{
        i++
      }



  },5000)




  let footer = document.getElementById("footer");
  let instagram = document.getElementById("instagram")
  let facebook = document.getElementById("facebook")

  let about = document.getElementById("about");
  let contact = document.getElementById("contact");
  let photos = document.getElementById("photos");

  about.className = "current"
  let content1 = document.getElementById("content1")
  let content2 = document.getElementById("content2")
  let content3 = document.getElementById("content3")

  content2.className ="contentNone";
  content3.className ="contentNone"

  window.addEventListener("click",function(e){
    if(e.target === about){
      e.preventDefault()

      about.className ="current";
      contact.className ="";
      photos.className ="";

        content1.className = "contentBlock";
        content2.className ="contentNone";
        content3.className = "contentNone"


    }
    if(e.target === photos){

      e.preventDefault()

      about.className ="";
      contact.className ="";
      photos.className ="current";

      content2.className = "contentBlock";
      content1.className ="contentNone";
      content3.className = "contentNone"
    }

    if(e.target === contact){

      e.preventDefault()

      about.className ="";
      contact.className ="current";
      photos.className ="";

      content3.className = "contentBlock";
      content2.className ="contentNone";
      content1.className = "contentNone"

    }

  })


  window.addEventListener("scroll", function(e){

    var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight,
                       document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );

                       let grans = limit - window.innerHeight


    var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;

    let scrollMax = Math.trunc(scrollPos)
    let gransen = grans -1
    console.log(grans - 1)
    if(scrollMax == grans || scrollMax === grans -1){
      footer.style.height = "70px"
      instagram.style.height ="50px"
      facebook.style.height = "50px"


    }else if( scrollMax < grans){
      footer.style.height = "0px"
      instagram.style.height ="0px"
      facebook.style.height = "0px"
    }
  })


})
