function checkBranch() {
  chrome.storage.sync.get({ branchesList: ["develop"] }, (data) => {
    const targetBranch = document.querySelector(
      "span.head-ref span.css-truncate-target"
    )?.innerText;
    if (data.branchesList.includes(targetBranch)) {
      // New merge flow
      for (const btn of document.querySelectorAll("button")) {
        if (btn.innerText.includes("Squash and merge")) {
          btn.disabled = true;
          btn.textContent = "DO NOT SQUASH DEVELOP MERGES";
        }
      }

      // Legacy merge flow
      const buttons = document.getElementsByClassName("btn-group-squash");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        buttons[i].textContent = "DO NOT SQUASH DEVELOP MERGES";
      }
    }
    setTimeout(checkBranch, 1250);
  });
}

window.onload = function () {
  setTimeout(checkBranch, 125);
};
