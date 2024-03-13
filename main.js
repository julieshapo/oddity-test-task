import "./style.css";

const btn = document.querySelector(".happy-btn");

const logoToggle = () => {
  const google = document.querySelector(".google-logo");
  const oddity = document.querySelector(".oddity-logo");

  oddity.classList.toggle("visually-hidden");
  google.classList.toggle("visually-hidden");
};

btn.addEventListener("click", logoToggle);
