const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});

document.querySelectorAll("nav a").forEach(a => {
    a.addEventListener("click", () => {
        nav.classList.remove("show");
    });
});
document.querySelector(".portal-box .btn").addEventListener("click", function(){
    alert("Demo Portal: Login system not connected (frontend demo only).");
});
document.querySelector(".affiliate-information .membership-btn").addEventListener("click", function(){
    alert("Demo Portal: Login system not connected (frontend demo only).");
});