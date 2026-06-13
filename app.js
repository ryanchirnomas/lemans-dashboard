const feed = document.getElementById("feed");
const search = document.getElementById("search");

function createCard(item) {

    const div = document.createElement("div");
    div.className = "item";

    let links = "";

    if (item.x) {
        links += `
            <a class="button" href="${item.x}" target="_blank">
                🐦 X
            </a>
        `;
    }

    if (item.instagram) {
        links += `
            <a class="button" href="${item.instagram}" target="_blank">
                📷 Instagram
            </a>
        `;
    }

    div.innerHTML = `
        <div class="title">${item.name}</div>

        <div class="meta">
            ${item.team}
        </div>

        <div class="class-tag">
            ${item.class}
        </div>

        <div class="links">
            ${links}
        </div>
    `;

    return div;

}

function render(list) {

    feed.innerHTML = "";

    list.forEach(item => {

        feed.appendChild(createCard(item));

    });

}

render(accounts);

search.addEventListener("input", function () {

    const text = this.value.toLowerCase();

    const filtered = accounts.filter(item => {

        return (
            item.name.toLowerCase().includes(text) ||
            item.team.toLowerCase().includes(text) ||
            item.class.toLowerCase().includes(text)
        );

    });

    render(filtered);

});
