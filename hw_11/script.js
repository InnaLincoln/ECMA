(() => {
  document.getElementById('input').addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      new Task().newItem();
    }
  });
})();

class TaskList {
  constructor() {
    this.item = document.getElementById("input").value;
    this.ul = document.getElementById("list");
    this.li = document.createElement("li");
  }

  newItem() {
    if (this.item.length > 2) {
      this.li.appendChild(document.createTextNode("" + this.item));
      this.ul.appendChild(this.li);
      document.getElementById("input").value = "";
    }
  }
}

class Task extends TaskList {
  constructor() {
    super();
    this.deleteButton = document.createElement('span');
    this.deleteButton.className = "delete";
    this.deleteButton.innerHTML = " &#10005";
    this.editButton = document.createElement('span');
    this.editButton.className = "edit";
    this.editButton.innerHTML = " &#9998";
    //   this.allTasks = document.querySelector('.all_tasks');
    this.removeItem();
    this.checkedItem();
//    this.countTasks();
  }


  checkedItem() {
    this.li.addEventListener('click', function () {
      this.classList.toggle('checked');
    });
    this.li.appendChild(this.deleteButton);
    this.li.appendChild(this.editButton);
  }

  removeItem() {
    this.deleteButton.addEventListener('click', function () {
      this.parentElement.classList.add('remove-item');
    });
  }

//  editItem(){
//
//  }
//  countTasks(){
//    let items = document.querySelectorAll(".delete");
//      this.allTasks.innerHTML = "" + items.length;
//
//
//  }
}



