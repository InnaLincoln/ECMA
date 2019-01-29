document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("list");
  document.getElementById('input').addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      new Task(this.value).newItem(list);
      this.value = '';
    }
  });
});

class TaskList {
  constructor(value = '') {
    this._value = value;
  }

  /**
   * @param {HTMLElement} list
   */
  newItem(list) {
    if (this._value.length < 3) {
      throw new Error('Too few chapters');
    }

    this.ul = list;
    this.li = document.createElement("li");
    this.li.appendChild(document.createTextNode("" + this._value));
    this.ul.appendChild(this.li);
  }
}

class Task extends TaskList {
  newItem(list) {
    super.newItem(list);
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



