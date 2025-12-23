let list = [];

const input = document.getElementById("input");
const addBtn = document.getElementById("add-btn");
const show = document.getElementById("show");

addBtn.addEventListener("click", () => {
    const item = input.value.trim();
    if (item === "") return;
    list.push({
        text: item,
        completed: false
    });
    input.value = "";
    display();
});

function display() {
    show.innerHTML = "";

    const sortedList = [...list].sort(
        (a, b) => a.completed - b.completed
    );

    sortedList.forEach(todo => {

        const row = document.createElement("div");
        row.className = "todo-row";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;

        checkbox.addEventListener("change", () => {
            todo.completed = checkbox.checked;
            display();
        });

        const text = document.createElement("span");
        text.textContent = todo.text;

        if (todo.completed) {
            text.classList.add("completed");
        }

        const edit = document.createElement("button");
        edit.textContent = "Edit";
        edit.onclick = () => {
            const updated = prompt("Edit item:", todo.text);
            if (updated && updated.trim() !== "") {
                todo.text = updated.trim();
                display();
            }
        };
        const del = document.createElement("button");
        del.textContent = "Delete";
        del.onclick = () => {
            list = list.filter(item => item !== todo);
            display();
        };

        row.appendChild(checkbox);
        row.appendChild(text);
        row.appendChild(edit);
        row.appendChild(del);

        show.appendChild(row);
    });
}
