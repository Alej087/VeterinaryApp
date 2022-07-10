const listPets = document.getElementById("listPets");
const kind = document.getElementById("kind");
const name = document.getElementById("name");
const owner = document.getElementById("owner");
const form = document.getElementById("form");
const btnSave = document.getElementById("save");
const indice = document.getElementById("indice");

let pets = [
    {
        kind: "Cat",
        name: "Mittens",
        owner: "Alejo",
    },
];

function showPets() {
    const htmlPets = pets
        .map(
            (pet, index) => `<tr>
    <th scope="row">${index}</th>
    <td>${pet.kind}</td>
    <td>${pet.name}</td>
    <td>${pet.owner}</td>
    <td>
        <div
            class="btn-group"
            role="group"
            aria-label="Basic example"
        >
            <button type="button" class="btn btn-info update" data-indice=${index}>
                Update
            </button>
            <button type="button" class="btn btn-danger">
                Delete
            </button>
        </div>
    </td>
</tr>`
        )
        .join("");
    listPets.innerHTML = htmlPets;
    Array.from(document.getElementsByClassName("update")).forEach(
        (btnUpdate) => (btnUpdate.onclick = update())
    );
}

function submitData(e) {
    e.preventDefault();
    const data = {
        kind: kind.value,
        name: name.value,
        owner: owner.value,
    };
    pets.push(data);
    showPets();
}

function update(e) {
    console.log("editar");
}

showPets();

form.onsubmit = submitData;
btnSave.onclick = submitData;
