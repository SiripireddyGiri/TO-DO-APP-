let list = [];

const btn = document.getElementById("btn");
const input = document.getElementById("input");
const ol = document.getElementById("ol");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    let value = input.value.trim();
    if (value === "") return;

    list.push(value);
    display();
    input.value = "";
});

function display() {
    ol.innerHTML = "";

    list.forEach((item, index) => {
        let li = document.createElement("li");

        li.className = "taskItem";
        li.innerHTML = `
            <span>${item}</span>
            <div class="taskButtons">
                <button onclick="editItem(${index})">Edit</button>
                <button onclick="deleteItem(${index})">Delete</button>
            </div>
        `;

        ol.appendChild(li);
    });
}

function deleteItem(index) {
    list.splice(index, 1);
    display();
}

function editItem(index) {
    let newValue = prompt("Edit your task:", list[index]);
    if (newValue !== null && newValue.trim() !== "") {
        list[index] = newValue.trim();
        display();
    }
}
