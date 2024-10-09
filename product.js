function cart(){
    var a, b;
    a = document.getElementById("first").value;
    b = a * 60;

    b = document.getElementById("second").value=b;
}

let ans = document.getElementById("first");
ans.addEventListener('keyup', cart);