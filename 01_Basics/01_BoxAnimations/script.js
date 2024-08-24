gsap.to("#box1", {
  // From Initial to Final Position
  x: 1000,
  duration: 2,
  delay: 1,
  rotation: 360,
  backgroundColor: "purple",
  scale: 1.5,
});

gsap.from("#box2", {
  // From Final to Initial Position
  x: 1000,
  duration: 2,
  delay: 1,
  rotation: 360,
  backgroundColor: "yellow",
  scale: 0.5,
});
