function List(date, task, ) {
    this.date = date;
    this.task = task;
}

function AddToList() {};

AddToList.prototype.add = function (addmore) {
    let ul = document.querySelector("#ul");
    ul.innerHTML += `
    <li>${addmore.date}</li>
    <li>${addmore.task}</li> `
};

document.querySelector("#btn").addEventListener('click', () => {

    const date = document.getElementById("date").value,
        task = document.getElementById("task").value;

    let list = new List(date, task);
    let adding = new AddToList();
    adding.add(list);
});