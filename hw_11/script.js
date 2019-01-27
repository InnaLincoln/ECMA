(() => {
  document.getElementById('input').addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      new Task().newItem();
    }
  });
})();

class Task {
  constructor() {
    this.item = document.getElementById("input").value;
    this.ul = document.getElementById("list");
    this.li = document.createElement("li");
    this.deleteButton = document.createElement('span');
    this.deleteButton.className = "delete";
    this.deleteButton.innerHTML = " &#9746;";
    this.removeItem();
    this.checkedItem();
  }

  newItem() {
    if (this.item.length > 2) {
      this.li.appendChild(document.createTextNode("" + this.item));
      this.ul.appendChild(this.li);
      document.getElementById("input").value = "";
    }
  }

  checkedItem() {
    this.li.addEventListener('click', function () {
      this.classList.toggle('checked');
    });
    this.li.appendChild(this.deleteButton);
  }

  removeItem() {
    this.deleteButton.addEventListener('click', function () {
      this.parentElement.classList.add('remove-item');
    });
  }
}



