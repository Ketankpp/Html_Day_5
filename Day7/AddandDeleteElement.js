let addButton = document.querySelector("#btnid");
let parentTag = document.querySelector("#parent");

addButton.addEventListener("click", function () {
  let msgTag = document.querySelector("#msgId");
  let msg = msgTag.value;
  let existingValue = parentTag.innerHTML;
  let newValue = `<div class="card mb-2">
                      <div class="card-body d-flex justify-content-between align-items-center">
                        <div class="message">${msg}</div>
                        <button type="button" class="btn btn-danger delete-btn">Delete</button>
                      </div>
                  </div>`;
  parentTag.innerHTML = newValue + existingValue;
  msgTag.value = "";
});

parentTag.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    event.target.closest(".card").remove();
  }
});
