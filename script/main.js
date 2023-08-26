function _id (id){
    let idElem=document.getElementById(id)
    return idElem
}
function _queryAll (queryAll){
    let queryAllElem=document.querySelectorAll(queryAll)
    return queryAllElem
}
let copyBtnEmail=_id("copy-btn-email")
let contactCardText=_id("contact-card-text")
let verticalMdNav=_id("vertical-md-nav")
let verticalNavIconContainer =_id("vertical-nav-icon-container")
let verticalNavListContainer =_id("vertical-nav-list-container")
let navSosialMedias=_queryAll(".sosial-media-item")
let navItems=_queryAll(".nav-item")
let horizontalNavItems=_queryAll(".horizontal-nav-item")
let navLinks=_queryAll(".nav-link")
let goUpBtn=_id("goUp-btn")
navLinks.forEach(function(e){
    console.log(e.href);
})
navSosialMedias.forEach(navSosialMediasHandler);
navItems.forEach(getSection)
horizontalNavItems.forEach(getSection)
verticalNavIconContainer.addEventListener("click",()=>{
    let backDiv=document.createElement("div");
    backDiv.style.position="fixed";
    backDiv.setAttribute("id","backDiv")
    backDiv.style.inset="0";
    verticalMdNav.classList.toggle("open");

if (verticalMdNav.className=="open") {
    verticalNavListContainer.style.translate="0 0"
    verticalNavIconContainer.style.translate="-110px"
    verticalNavIconContainer.style.zIndex="5"
    document.body.appendChild(backDiv)
    document.getElementById("backDiv").addEventListener("click",()=>{
     
        verticalNavListContainer.style.translate="200% 0"
        verticalNavIconContainer.style.translate="0"
        hamburgerIcon.classList.remove("open")
       document.getElementById("backDiv").remove()

    })

}
else {
    verticalNavListContainer.style.translate="200% 0"
    verticalNavIconContainer.style.translate="0"
    document.getElementById("backDiv").remove()

  
}

})


function getSection(event){
    event.addEventListener("click",function(){
        let goElem=event.id+"Title"
    document.getElementById(goElem).scrollIntoView({behavior:"smooth"});
    })
}
function navSosialMediasHandler(event)
{
    event.addEventListener("mouseenter",function(){
    event.firstChild.firstChild.classList.add("fa-bounce")
 
    })
    event.addEventListener("mouseleave",function(i){
        event.firstChild.firstChild.classList.remove("fa-bounce")
        
    })
}
goUpBtn.addEventListener("click",function(){
    document.getElementById("homeTitle").scrollIntoView({behavior:"smooth"});
})
let aboutBtn=_id("go-about-btn")
aboutBtn.addEventListener("click",function(){
    document.getElementById("aboutTitle").scrollIntoView({behavior:"smooth"});
})





const helloText = document.getElementById("hello-text");
const nameText = document.getElementById("name-text");
const text = "سلام";
let index = 1;
let opacity=0;
let translateY=15
wrightText();
function wrightText() {
    helloText.innerText = text.slice(0, index);
    index++;
    nameText.style.opacity=opacity
    nameText.style.transform=`translateY(${translateY}px)`
if(index==6){
    helloText.innerText=text
    index=6
    opacity==1?opacity=1:opacity+=1
    translateY==0?translateY=0:translateY-=15
}
   
  setTimeout(wrightText, 200);
}
copyBtnEmail.addEventListener("click",()=>{
    contactCardText.select();
    document.execCommand("copy");
    alert("ایمیل کپی شد");
})