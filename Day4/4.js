function add() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var sum = num1 + num2;
    alert("Input1 ="+num1+" Input2 ="+num2+"Result ="+sum)
    document.getElementById("result").value = sum;
}