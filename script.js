
"use strict";

// MENU DE NAVIGATION
const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Fermer le menu" : "Ouvrir le menu"
    );
    menuButton.textContent = isOpen ? "✕" : "☰";
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.textContent = "☰";
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Ouvrir le menu");
    });
  });
}

// PREMIER QUIZ VÉRANKA
const quizOptions = document.querySelectorAll(".quiz-option");
const quizFeedback = document.getElementById("quizFeedback");
const quizScore = document.getElementById("quizScore");

let quizAnswered = false;
let score = 0;

quizOptions.forEach((option) => {
  option.addEventListener("click", () => {
    // Une seule réponse est autorisée pour cette question.
    if (quizAnswered) return;

    quizAnswered = true;

    const isCorrect = option.dataset.answer === "true";

    if (isCorrect) {
      score = 1;
      option.classList.add("correct");
      quizFeedback.textContent = "Bonne réponse ! Sor signifie lumière.";
    } else {
      option.classList.add("incorrect");
      quizFeedback.textContent =
        "Pas tout à fait ! La bonne réponse est : la lumière.";
    }

    // Montrer la bonne réponse et désactiver les boutons.
    quizOptions.forEach((button) => {
      button.disabled = true;

      if (button.dataset.answer === "true") {
        button.classList.add("correct");
      }
    });

    quizScore.textContent = `Score : ${score} / 1`;
  });
});

// ANNÉE AUTOMATIQUE DANS LE PIED DE PAGE
const copyright = document.querySelector(".copyright");

if (copyright) {
  copyright.textContent =
    `© ${new Date().getFullYear()} VÉRANKA — Projet éducatif indépendant`;
}
