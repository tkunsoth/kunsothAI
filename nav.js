const nav = document.querySelector("nav");
if (nav) {
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll) nav.classList.add("hidden");
    else nav.classList.remove("hidden");
    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  });
}
