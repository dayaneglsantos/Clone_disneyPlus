document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");
  const questions = document.querySelectorAll("[data-faq-quastion]");

  // vai iterar sobre os botões com atributo data-tab-button e irá observar o clique neles
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (button) {
      const targetTab = button.target.dataset.tabButton; // aqui irá pegar o botão que foi clicado
      const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
      hiddenTab();
      tab.classList.add("shows-list-active");
      removeBtnActive();
      button.target.classList.add("shows-tabs-button-active");
    });
  }

  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", openOrCloseAnswer);
  }
});

function openOrCloseAnswer(element) {
  const openItem = "faq-questions-item-open";
  const parentElement = element.target.parentNode;
  parentElement.classList.toggle(openItem);
}

function removeBtnActive() {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("shows-tabs-button-active");
  }
}

function hiddenTab() {
  const tabsContainer = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove("shows-list-active");
  }
}
