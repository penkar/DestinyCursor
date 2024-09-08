(function () {
  const cursor = document.getElementById("cursor");
  const mouseMove = ({ clientX, clientY }) => {
    cursor.style.left = `${clientX - 28}px`;
    cursor.style.top = `${clientY - 28}px`;
  };
  window.addEventListener("mousemove", mouseMove);

  document.querySelectorAll("a[data-type]").forEach((el) => {
    el.addEventListener(
      "mouseenter",
      () => (cursor.className = el.getAttribute("data-type"))
    );
    el.addEventListener("mouseleave", () => (cursor.className = ""));
  });
})();
