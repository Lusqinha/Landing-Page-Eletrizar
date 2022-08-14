window.sr = ScrollReveal({ reset: true });

const toReveal = [
  "#desc",
  "#garantia",
  "#orcamento",
  "#local",
  "#contato",
  ".assis",
  ".assis1",
];
for (const item of toReveal) {
  if (item == ".assis") {
    sr.reveal(item, { duration: 1000, origin: "top", distance: "25px" });
  }
  if (item == ".assis1") {
    sr.reveal(item, { duration: 2000, origin: "top", distance: "50px" });
  } else sr.reveal(item, { duration: 1500, origin: "top", distance: "100px" });
}
