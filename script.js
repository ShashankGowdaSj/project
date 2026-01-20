// Animate skill bars when scrolled into view
const skillsSection = document.querySelector(".skills");
const progressSpans = document.querySelectorAll(".progress span");

window.addEventListener("scroll", () => {
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;

  if (sectionPos < screenPos) {
    progressSpans.forEach(span => {
      span.style.width = span.getAttribute("style").match(/\d+%/)[0];
    });
  }
});
