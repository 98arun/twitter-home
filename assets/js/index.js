console.log("inside");
let lastbtn = document.getElementById("last-btn");
let hiddenbtn = document.getElementById("hidden-card");

lastbtn.addEventListener("click", () => {
  if (hiddenbtn.style.display === "block") {
    hiddenbtn.style.display = "none";
  } else {
    hiddenbtn.style.display = "block";
  }
});
