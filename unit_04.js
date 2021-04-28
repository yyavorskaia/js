let result = '';

function makeid(length) {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}

makeid(5);

let arr = result.split('');
let select = document.getElementById("selectNumber");

for (var i = 0; i < arr.length; i++) {
    let opt = arr[i];
    let el = document.createElement("option");
    el.text = opt;
    el.value = opt;
    select.add(el);
}

function foo() {
    let out = document.querySelector('.out');

    out.innerHTML = select.value;
}

select.onchange = foo;
