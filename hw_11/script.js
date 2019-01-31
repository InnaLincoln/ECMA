document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('list');
  document.getElementById('input').addEventListener('keyup', function (event) {
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
    this.id = 0;
    this.mask = 'task_';
  }

  /**
   * @param {HTMLElement} list
   */
  newItem(list) {
    if (this._value.length < 3) {
      throw new Error('Too few chapters');
    }
    this.ul = list;
    this.li = document.createElement('li');
    this.li.setAttribute('data-item', this.mask + this.id);
    this.li.appendChild(document.createTextNode(`${this._value}`));
    this.ul.appendChild(this.li);
    for (Attr in this.ul.children) {
      const newId = this.li.getAttribute('data-item');
      if (newId > this.id) {
        this.id = newId;
      }
      this.id++;
    }
    localStorage.setItem(this.mask + this.id, this._value);
    // this.showTask();
  }
//  showTask(){
//    const storage = localStorage.length;
//    if (storage > 0){
//      for (let i = 0; i < storage; i++){
//        let key = localStorage.key(i);
//        if (key.indexOf(this.mask) === 0){
//          this.li = document.createElement("li");
//          this.li.setAttribute('data-item', key);
//          this.li.appendChild(document.createTextNode(localStorage.getItem(key)));
//          this.ul.appendChild(this.li);
//          localStorage.setItem(this.mask + this.id, this._value);
//        }
//      }
//    }
//  }
}

class Task extends TaskList {
  newItem(list) {
    super.newItem(list);
    this.editButton = document.createElement('span');
    this.editButton.className = 'edit';
    this.editButton.innerHTML = ' &#9998';
    this.deleteButton = document.createElement('span');
    this.deleteButton.className = 'delete';
    this.deleteButton.innerHTML = ' &#10005';
    this.checkedItem();
    this.removeItem();
  }

  checkedItem() {
    this.li.addEventListener('click', function () {
      this.classList.toggle('checked');
    });
    this.li.appendChild(this.editButton);
    this.li.appendChild(this.deleteButton);
  }

  removeItem() {
    this.deleteButton.addEventListener('click', function () {
      this.parentElement.classList.add('remove-item');
    });
  }
}
