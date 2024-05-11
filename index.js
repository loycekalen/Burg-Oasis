function subscribeButton(event) {
  event.preventDefault();
  let paragraph = document.querySelector("h6");
  paragraph.innerHTML = "Thank You for Subscribing!🤞";
}

let subscribe = document.querySelector("#sign-up");
subscribe.addEventListener("click", subscribeButton);
