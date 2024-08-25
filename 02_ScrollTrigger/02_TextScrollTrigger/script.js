gsap.from("#page2 h1", {
  opacity: 0,
  x: 500,
  duration: 2,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top 30%",
    scrub: 2,
  },
});
