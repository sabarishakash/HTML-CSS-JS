let openbtn=document.querySelector("#input11");
let prime1=document.querySelector(".container");
let closebtn=document.querySelector("#input96");


openbtn.addEventListener('click',()=>{
    prime1.classList.add('container1');
    
  });
  
  closebtn.addEventListener('click',()=>{
    prime1.classList.remove('container1');
  });

 
  // getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

  let member=document.getElementById("input300")
  member.href="https://www.patreon.com/signup?ru=%2Fcreate"

  

  let member1=document.getElementById("input301")
  member1.href="https://news.patreon.com/articles/introducing-a-new-patreon"

  
  let member2=document.getElementById("input302")

  member2.href="https://www.patreon.com/login"
 

  function changeImage(){
    var img=document.getElementById("image");
    img.src="./Mega-64.png";

    var img1=document.getElementById("image1");
    img1.src="./01_video_02.png";

    var img2=document.getElementById("image2");
    img2.src="./01_video_03.png";

    
    var img3=document.getElementById("image3");
    img3.src="./Channel-5.png";

      
    var img4=document.getElementById("image4");
    img4.src="./01_video_05.png";




}

function changeImage1(){
    var image5=document.getElementById("image");
    image5.src="./02_pod_01.png";
    var image6=document.getElementById("image1");
    image6.src="./02_pod_02.png";
    var image7=document.getElementById("image2");
    image7.src="./02_pod_03.png";
    var image8=document.getElementById("image3");
    image8.src="./02_pod_04.png";
    var image9=document.getElementById("image4");
    image9.src="./02_pod_05.png";
}

function changeImage2(){
    var image5=document.getElementById("image");
    image5.src="./03_vis_02.png";
    var image6=document.getElementById("image1");
    image6.src="./03_vis_01.png";
    var image7=document.getElementById("image2");
    image7.src="./03_vis_03.png";
    var image8=document.getElementById("image3");
    image8.src="./03_vis_04.png";
    var image9=document.getElementById("image4");
    image9.src="./03_vis_05.jpg";
}

function changeImage3(){
    var image10=document.getElementById("image");
    image10.src="./04_music_01.png";
    var image11=document.getElementById("image1");
    image11.src="./04_music_02.png";
    var image12=document.getElementById("image2");
    image12.src="./04_music_03.png";
    var image13=document.getElementById("image3");
    image13.src="./04_music_04.png";
    var image14=document.getElementById("image4");
    image14.src="./04_music_05.png";
}
  
function changeImage4(){
    var image15=document.getElementById("image");
    image15.src="./05_other_01.png";
    var image16=document.getElementById("image1");
    image16.src="./05_other_02.png";
    var image17=document.getElementById("image2");
    image17.src="./05_other_03.png";
    var image18=document.getElementById("image3");
    image18.src="./05_other_04.png";
    var image19=document.getElementById("image4");
    image19.src="./05_other_05.png";
}

let image20=document.getElementById("input406")
image20.href="https://news.patreon.com/"


let image21=document.getElementById("input407")
image21.href="https://creatorhub.patreon.com/"


let image22=document.getElementById("input405")
image22.href="https://www.patreon.com/apps"

let image23=document.getElementById("input408")
image23.href="https://support.patreon.com/hc/en-us"

let image24=document.getElementById("input418")
image24.href="https://www.patreon.com/product/getting-started"

let image25=document.getElementById("input419")
image25.href="https://www.patreon.com/product/paid-membership"

let image26=document.getElementById("input417")
image26.href="https://www.patreon.com/product/commerce"