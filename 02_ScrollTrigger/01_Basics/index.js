gsap.from("#page1 #box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
});

// Normal Scroll Trigger

// gsap.from("#page2 #box", {
//   scale: 0,
//   duration: 2,
//   rotate: 360,
//   scrollTrigger: "#page2 #box",
// });

// Properties for Scroll Trigger

gsap.from("#page2 #box", {
  scale: 0,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start: "top 60%",
  },
});
