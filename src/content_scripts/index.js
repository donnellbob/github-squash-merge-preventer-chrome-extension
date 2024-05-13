function checkBranch() {
  chrome.storage.sync.get({ branchesList: [] }, (data) => {
    const targetBranch = document.querySelector(
      "span.head-ref span.css-truncate-target"
    ).innerText;
    if (data.branchesList.includes(targetBranch)) {
      const buttons = document.getElementsByClassName("btn-group-squash");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        buttons[i].textContent = "DO NOT SQUASH DEVELOP MERGES";
      }

      if (buttons.length === 0) {
        setTimeout(checkBranch, 125);
      }
    }
  });
}

window.onload = function () {
  setTimeout(checkBranch, 125);
};
