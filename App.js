let list = [];

const input = document.getElementById("input");
const add = document.getElementById("add-btn");
const show = document.getElementById("show");

add.addEventListener("click", function () {
    let item = input.value.trim();
    if (item === "") 
        return;

    list.push(item);
    display();
    alert("Item Added Into The List");
    input.value = "";
});

function display() {
    show.innerHTML = "";

    list.forEach((todo, index) => {
        const row = document.createElement("div");

        const ele = document.createElement("span");
        ele.textContent = todo;

        const edit = document.createElement("button");
        edit.textContent = "Edit";
        edit.onclick = function () {
            let updated = prompt("Edit item:", todo);
            if (updated && updated.trim() !== "") {
                list[index] = updated.trim();
                display();
            }
        };

        const del = document.createElement("button");
        del.textContent = "Delete";
        del.onclick = function () {
            list.splice(index, 1);
            display();
        };

        row.appendChild(ele);
        row.appendChild(edit);
        row.appendChild(del);

        show.appendChild(row);
    });
}
