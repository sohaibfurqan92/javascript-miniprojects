// get reference tp dom elements

const toggleBtn = document.querySelector(".sidebar-toggle");
const sideBar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", function () {
  if (sideBar.classList.contains("show-sidebar")) {
    sideBar.classList.remove("show-sidebar");
  }
});

toggleBtn.addEventListener("click", function () {
  sideBar.classList.toggle("show-sidebar");
});
