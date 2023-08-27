const change = document.querySelector("h3");
const btn = document.querySelector("button");
var check = 0;

btn.addEventListener("click", function () {
  if (check == 0) {
    change.innerText = "followers";
    change.style.backgroundColor = "green";
    btn.innerHTML = "unfollow";
    check = 1;
  } else {
    change.innerText = "unfollow";
    change.style.backgroundColor = "red";
    btn.innerHTML = "followers";
    check = 0;
  }
});
