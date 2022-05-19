
// Bài Tập 1:
/*
    mô hình 3 khối:
        - input:
            + lương 1 ngày (number)
            + số ngày làm (number)
        - progress:
            + tạo 3 biến : luong1Ngay, SoNgayLam và tongLuong
            + gán : luong1Ngay = 100000
                    SoNgayLam : người dùng nhập
                    tongLuong = luong1Ngay * SoNgayLam
        - output:
            + tổng lương được nhận (tongLuong)
*/
var luong1Ngay = 100000;
var SoNgayLam = 15;
var tongLuong = luong1Ngay * SoNgayLam;
let tienViet = Intl.NumberFormat('en-Us');
console.log('Tổng Lương: ' + tienViet.format(tongLuong) + ' VND');

// Bài Tập 2:
/*
    mô hình 3 khối:
        - input:
            + 5 số thực
        - progress:
            + tạo 6 biến: number1 , number2 , number3 , number4 , number5 , trungBinhSo
            + nhập: 5 giá trị cho 5 number
            + gán: trungBinhSo = (number1 + number2 + number3 + number4 + number5) / 5
        - output: 
            + trung bình 5 số (trungBinhSo)  
*/
var number1 = 56.5;
var number2 = 6.5;
var number3 = 586.5;
var number4 = 36.5;
var number5 = 116.3;
var trungBinhSo = (number1 + number2 + number3 + number4 + number5) / 5;
console.log('trung bình 5 số là: ' + trungBinhSo.toFixed(3));

// Bài tập 3:
/*
    mô hình 3 khối :
        - input: giá USD và số USD
        - progress: 
            + tạo 3 biến : giaUSD , soUSD , tongTien
            + người dùng nhập số USD
            + gán : giaUSD = 23500
                    tongTien = giaUSD * soUSD
        - output: tổng tiền việt (tongTien)
*/
var giaUSD = 23500;
var soUSD = 100000;
var tongTien = giaUSD * soUSD;
let tienVND = Intl.NumberFormat('en-Us');
console.log('Tổng tiền: ' + tienVND.format(tongTien) + ' VND');

// Bài tập 4:
/*
    - input: chiều dài và chiều rộng của hình chữ nhật
    - progress: 
        + tạo 4 biến : chieuDai , chieuRong , chuVi , dienTich
        + gán : dienTich = chieuDai * chieuRong
                chuVi = (chieuDai + chieuRong ) * 2
    - output :  chu vi (chuVi)
                diện tích (dienTich)
*/

var chieuDai = 8;
var chieuRong = 9;
var dienTich = 0;
var chuVi = 0;
dienTich = Number(chieuDai) * Number(chieuRong);
chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
console.log ('diện tích là: ' + dienTich);
console.log ('chu vi là: ' + chuVi);

// Bài tập 5:
/*
    - input: số có 2 chữ số
    - progress:
        + tạo 4 biến: soN , hangChuc, hangDonVi , tongCacSo
        + gán: hangChuc = Math.floor(soN / 10)
               hangDonVi = soN % 10
               tongCacSo = hangChuc + hangDonVi
*/

var soN = 68;
var hangChuc = 0;
var hangDonVi = 0;
var tongCacSo = 0;
hangChuc = Math.floor(soN / 10);
hangDonVi = soN % 10;
tongCacSo = hangChuc + hangDonVi;
console.log ('tổng các số là: ' + tongCacSo);
