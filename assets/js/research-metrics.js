document.querySelectorAll(".research-metrics figure").forEach((figure, index) => {
  const tooltip = figure.querySelector(".metric-tooltip");
  const data = [...figure.querySelectorAll(".metric-datum")];
  tooltip.id = `metric-tooltip-${index}`;
  function hide() {
    data.forEach((d) => {
      d.classList.remove("is-active");
      d.removeAttribute("aria-describedby");
    });
    tooltip.hidden = true;
  }
  function show(d) {
    hide();
    d.classList.add("is-active");
    const year = document.createElement("strong");
    year.textContent = d.dataset.year;
    const value = document.createElement("div");
    value.textContent = `${d.dataset.value} ${d.dataset.kind}`;
    tooltip.replaceChildren(year, value);
    tooltip.hidden = false;
    d.setAttribute("aria-describedby", tooltip.id);
    const bounds = figure.getBoundingClientRect(),
      point = d.querySelector(".metric-bar, .metric-point").getBoundingClientRect();
    const left = point.left + point.width / 2 - bounds.left + 12;
    tooltip.style.left = `${Math.max(4, Math.min(left, bounds.width - tooltip.offsetWidth - 4))}px`;
    tooltip.style.top = `${Math.max(25, point.top - bounds.top - tooltip.offsetHeight - 12)}px`;
  }
  data.forEach((d, i) => {
    d.addEventListener("pointerenter", () => show(d));
    d.addEventListener("focus", () => show(d));
    d.addEventListener("click", () => show(d));
    d.addEventListener("blur", hide);
    d.addEventListener("keydown", (e) => {
      if (e.key === "Escape") hide();
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        show(d);
      }
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        data[(i + (e.key === "ArrowRight" ? 1 : data.length - 1)) % data.length].focus();
      }
    });
  });
  figure.addEventListener("pointerleave", hide);
  document.addEventListener("pointerdown", (e) => {
    if (!figure.contains(e.target)) hide();
  });
});
