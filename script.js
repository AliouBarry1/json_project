
let profile = document.querySelector("#profile");



for(let i = 0; i < 12; i++){
  
  
   

    let newDiv = document.createElement("div");
    let text = document.createElement("p");
    let  newImage = document.createElement("img");
   
    

    newDiv.appendChild(text);
    newDiv.appendChild(newImage);
    profile.appendChild(newDiv); 


    
    

    text.innerHTML = "Name: " + randUser.results[i].name.first + " " + randUser.results[i].name.last + "<br>" + "Email: " + randUser.results[i].email + "<br>" + "Phone: " + randUser.results[i].phone;
    
    newImage.src = randUser.results[i].picture.large;
    newImage.style.borderRadius ="50%";   
    newImage.style.width = "100px";
    newDiv.style.width = "500px";
    newDiv.style.marginBottom = " 50px";
   // newImage.style.borderBottomWidth = "20px";


    

}