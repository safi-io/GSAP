gsap.from("h1", {
  opacity: 0,
  duration: 1,
  delay: 1,
  stagger: 0.2, // Time each element takes
  y: 40,
  repeat: -1, // Infinite Loop if (-)
  yoyo: true,
});
