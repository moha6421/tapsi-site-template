const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click", (e) => {
  console.log("clicked");
  navbar.classList.toggle("nav__expanded");
});

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".feature");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const targetTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);

    //Remove Previous Actived Classes
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((feature) => feature.classList.remove("active"));

    //Add New ACTIVE CLASSES
    tab.classList.add("active");
    targetTabContent.classList.add("active");
  });
});
