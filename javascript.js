window.addEventListener("load", function(){





/* Hämtar div för att kunna lägga in stor bild */
  let storBild = {

    image: document.getElementsByClassName("productBild"),
    bild : document.getElementById("innehall"),
    content : document.getElementsByClassName("storaBilder")[0]

  }



  /***********Går igenom bilderna på Products *****
  När man har klickat på en bild så ska de bli större bild.
  ****/

  for(let i=0; i< storBild.image.length;i++){

    let img = document.createElement("img");

      storBild.image[i].addEventListener("click", function(e){


          let splittad = e.srcElement.src.split("/")
          img.setAttribute("src","Bilder/Products/" + splittad[splittad.length -1]);
          console.log(splittad)
          console.log("Detta är e.srcElement.src " + e.srcElement.src)
          storBild.bild.appendChild(img)
          storBild.content.style.display = "flex";

          console.log("Image bilden " + img)


      })

      storBild.content.addEventListener("click",function(){

            storBild.content.style.display = "none"
            storBild.bild.innerHTML = "";

      })
  }


  /* Byte Av BILD på headern var femte sekund. */

  let headerBilder = ["people4.jpg","gnu4.jpg","lejon4.jpg","apa4.jpg","elefant4.jpg"]

  let header = document.getElementsByTagName("header")[0];

  let logga = document.getElementById("logga")


  let i =0; /* Håller koll på vilken bild vi är på */

let interval =  setInterval(function(){

      header.style.background = (`url(Bilder/Nyumbaniskate/${headerBilder[i]})`);

      header.style.backgroundRepeat = "no-repeat";
      header.style.backgroundPosition = "center 0";
      header.style.backgroundSize = "100%";


      /* Tar bort loggan när vi är på people bilden. För att kunna se ansiktena */
      (headerBilder[i] === "people4.jpg") ? logga.style.opacity = "0" : logga.style.opacity = "1";


      /* Fixar till Gnu bilden */
(headerBilder[i] === "gnu4.jpg" && window.innerWidth > 650) ? header.style.backgroundPosition = "center -100px" : header.style.backgroundPosition = "center 0";


      /* För att bilderna ska gå runt och börja om igen. Ökar i eller sätter den till 0 för att börja om*/
      (headerBilder.length - 1 === i ) ? i=0 : i++

  },5000)






  let about = document.getElementById("about");
  let contact = document.getElementById("contact");
  let photos = document.getElementById("photos");


  let content1 = document.getElementById("content1")
  let content2 = document.getElementById("content2")
  let content3 = document.getElementById("content3")

  about.className = "current" /* Vi börjar på about */


  content2.className ="contentNone";
  content3.className ="contentNone"


/* För att man ska kunna klicka på About, Products och contact. */

  window.addEventListener("click",function(e){

    if(e.target === about){
      e.preventDefault()

      about.className ="current";
      contact.className ="";
      photos.className ="";

      content1.style.display ="flex"

      content2.style.display ="none"
      content3.style.display ="none";
        content1.className = "contentBlock";
        content2.className ="contentNone";
        content3.className = "contentNone"


    }

    if(e.target === photos){

      e.preventDefault()

      about.className ="";
      contact.className ="";
      photos.className ="current";
      content2.style.display ="flex"
      content3.style.display ="none";
      content1.style.display = "none"


      content2.className = "contentBlock";
      content1.className ="contentNone";
      content3.className = "contentNone"

    }

    if(e.target === contact){

      e.preventDefault()

      about.className ="";
      contact.className ="current";
      photos.className ="";
      content3.style.display ="flex";
      content2.style.display ="none"
      content1.style.display = "none"


      content3.className = "contentBlock";
      content2.className ="contentNone";
      content1.className = "contentNone"

    }

  })


  let footer = document.getElementById("footer");
  let instagram = document.getElementById("instagram")
  let facebook = document.getElementById("facebook")

  window.addEventListener("scroll", function(e){

    var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight,
                       document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );

                       let grans = limit - window.innerHeight


    var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;

    let scrollMax = Math.trunc(scrollPos)
    let gransen = grans -1
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
