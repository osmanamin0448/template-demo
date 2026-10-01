export function createHomePage(){
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container")


  const messageContainer  = document.createElement("div");
  messageContainer.classList.add("message-container");

  const logoInfo = document.createElement("h1");
  logoInfo.textContent = "Welcome To Second Wife's Restaurant";

  const info = document.createElement("strong");
  info.textContent = "We serve delicious, friendly prepared meals made with quality ingredient and a touch of home. Whether you're dining with family, friends, or simply treating yourself, there's always something delicious waiting for you";


  
  const backGroundImageDiv = document.createElement("div")
  backGroundImageDiv.classList.add("background-image-container");

  const accolade = document.createElement("h1");
  accolade.textContent = "Taste That Makes You Feel At Home";
  accolade.classList.add("message")

  

  
  messageContainer.append(logoInfo, info);
  backGroundImageDiv.append(accolade);
  homeContainer.append(messageContainer,backGroundImageDiv)
  content.appendChild(homeContainer)
}

