function clearing() {
    document.getElementById("input").value = "";
}

function show(value) {
    document.getElementById("input").value += value;
}

function answer() {
    var p = document.getElementById("input").value;
    var q = eval(p);
    document.getElementById("input").value = q;
    console.log(q);
}