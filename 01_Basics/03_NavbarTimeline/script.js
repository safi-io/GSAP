let tl = gsap.timeline(); // Syncing all Animation

tl.from("h1", {
  opacity: 0,
  y: 20,
  duration: 0.5,
  delay: 0.5,
});

tl.from("li", {
  opacity: 0,
  y: 20,
  duration: 0.7,
  stagger: 0.1,
});

tl.from("h2", {
  opacity: 0,
  y: 10,
  duration: 0.5,
});
