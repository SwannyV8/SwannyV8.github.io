async function loadHTML(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}
loadHTML("footer-mod", "/modules/footer.html");
loadHTML("nugget-mod", "/modules/nugget.html");
loadHTML("navbar-mod", "/modules/navbar.html");
loadHTML("metatg-mod", "/modules/metatg.html");