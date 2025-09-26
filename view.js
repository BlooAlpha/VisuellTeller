
function update() {
    document.getElementById("counterwindow").innerHTML = /*HTML*/ `
        <h1>${number}</h1>
        <button onclick="subNum()">-</button><button onclick="addNum()">+</button>
    `
}