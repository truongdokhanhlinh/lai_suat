function Lai_suat() {
    var money, month;
    money = +document.getElementById('money').value;
    month = +document.getElementById('month').value;
    sum = money + ((money * 0.065) / 12) * month;
    inter = ((money * 0.065) / 12) * month;
    document.getElementById('resultsum').innerHTML = sum;
    document.getElementById('resultinter').innerHTML = inter
}
