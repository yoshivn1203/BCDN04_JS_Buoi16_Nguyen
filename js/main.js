timMin = () => {
  let sum = 0,
    n = 0;
  while (sum < 1e4) {
    n++;
    sum += n;
  }
  document.getElementById('ketQua1').innerHTML = n;
};

tinhTong = () => {
  let x = document.getElementById('inputX').value,
    n = document.getElementById('inputN').value;
  for (let sum = 0, i = 1; i <= n; i++) {
    sum += Math.pow(x, i);
  }
  document.getElementById('ketQua2').innerHTML = sum;
};

tinhGiaiThua = () => {
  let n = document.getElementById('inputN2').value;
  for (let result = 1, i = 1; i <= n; i++) {
    result *= i;
  }
  document.getElementById('ketQua3').innerHTML = result;
};

taoTheDiv = () => {
  let div = '',
    sumDiv = '';
  for (let i = 1; i <= 10; i++) {
    div =
      i % 2 == 0
        ? "<div class='bg-danger text-white p-2'>Div chẵn</div>"
        : "<div class='bg-primary text-white  p-2'>Div lẻ </div>";
    sumDiv += div;
  }
  document.getElementById('ketQua4').innerHTML = sumDiv;
};
