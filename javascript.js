function darkLight() {
  const body = document.body;
  const facePic = document.querySelector(".facePic");
  const linkPill = document.querySelector(".linkPill");
  body.classList.toggle("lightMode");
  facePic.classList.toggle("lightMode");
  linkPill.classList.toggle("lightMode");
}
