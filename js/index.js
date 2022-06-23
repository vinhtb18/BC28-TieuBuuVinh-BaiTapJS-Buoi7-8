window.onload = function () {
    var arrNumber = [];

    document.querySelector('#btnThemVaoMang').onclick = function () {
        var number = Number(document.querySelector('#soNguyen').value);

        if (kiemTraSoNguyen(number) === 1) {
            arrNumber.push(number);
            console.log(arrNumber);

            // Hiển thị ra mảng:
            document.querySelector('#hienMang').innerHTML = '[' + arrNumber + ']';

        } else {
            alert('Vui lòng nhập vào số nguyên');
        }

    }

    // Câu 1: Tính tổng các số dương trong mảng
    document.querySelector('#btnTongCacSoDuong').onclick = function () {
        var tong = 0;
        for (var index = 0; index < arrNumber.length; index++) {
            if (kiemTraSoDuong(arrNumber[index]) === 1) {
                tong += arrNumber[index];
            }
        }
        document.querySelector('#ketQuaCau1').innerHTML = tong;
    }

    // Câu 2: Đếm số dương
    document.querySelector('#btnDemSoDuong').onclick = function () {
        var demSoDuong = 0;
        for (var index = 0; index < arrNumber.length; index++) {
            if (kiemTraSoDuong(arrNumber[index]) === 1) {
                demSoDuong++;
            }
        }
        document.querySelector('#ketQuaCau2').innerHTML = demSoDuong;
    }

    // Câu 3: Tìm số nhỏ nhất trong mảng
    document.querySelector('#btnTimSoNhoNhat').onclick = function () {
        var soNhoNhat = timSoNhoNhat(arrNumber);
        document.querySelector('#ketQuaCau3').innerHTML = soNhoNhat;

    }

    // Câu 4: Tìm số dương nhỏ nhất trong mảng
    document.querySelector('#btnTimSoDuongNhoNhat').onclick = function () {
        var arrSoDuong = locSoDuong(arrNumber);

        if (arrSoDuong.length === 0) {
            document.querySelector('#ketQuaCau4').innerHTML = 'Không có số dương trong mảng';
        } else {
            var soDuongNhoNhat = timSoNhoNhat(arrSoDuong);
            document.querySelector('#ketQuaCau4').innerHTML = soDuongNhoNhat;
        }
    }

    // Câu 5: Tìm số chẵn cuối cùng
    document.querySelector('#btnTimSoChanCuoiCung').onclick = function () {
        var arrSoChan = locSoChan(arrNumber);

        if (arrSoChan.length === 0) {
            document.querySelector('#ketQuaCau5').innerHTML = -1;
        } else {
            var viTriSoChanCuoiCung = arrSoChan.length - 1;
            var soChanCuoiCung = arrSoChan[viTriSoChanCuoiCung];
            document.querySelector('#ketQuaCau5').innerHTML = soChanCuoiCung;
        }
    }

    // Câu 6: Đổi chỗ 2 vị trí trong mảng
    document.querySelector('#btnDoiCho').onclick = function () {
        // input: 2 số tương ứng với 2 vị trí
        var indexA = Number(document.querySelector('#doiChoA').value - 1);
        var indexB = Number(document.querySelector('#doiChoB').value - 1);

        // Output: arrNumber sau khi đã đổi chỗ

        if (indexA >= 0 && indexA < arrNumber.length && indexB >= 0 && indexB < arrNumber.length) {
            // process:

            var soC = arrNumber[indexA];
            arrNumber[indexA] = arrNumber[indexB];
            arrNumber[indexB] = soC;

            // Hiển thị lại mảng:
            document.querySelector('#hienMang').innerHTML = '[' + arrNumber + ']';

        } else {
            alert('Mảng không có vị trí bạn đã nhập, vui lòng nhập lại vị trí');
        }
    }

    // Câu 7: Sắp xếp theo thứ tự tăng dần:
    document.querySelector('#btnSapXepTangDan').onclick = function () {
        document.querySelector('#hienMang').innerHTML = '[' + sapXepTangDan(arrNumber) + ']';
    }

    // Câu 8: Tìm số nguyên tố đầu tiên trong mảng, nếu mảng không có số nguyên tố thì trả về -1
    document.querySelector('#btnTimSoNguyenToDauTien').onclick = function () {
        var soNguyenToDauTien = -1;
        for (var index = 0; index < arrNumber.length; index++) {
            if (kiemTraSoNguyenTo(arrNumber[index]) === 1) {
                soNguyenToDauTien = arrNumber[index];
                break;
            }
        }

        document.querySelector('#ketQuaCau8').innerHTML = soNguyenToDauTien;
    }

    // Câu 9: Nhập thêm 1 mảng số thực, tìm trong mảng xem có bao nhiêu số nguyên
    var arrRealNumber = [];
    document.querySelector('#btnThemSoThuc').onclick = function () {
        var number = Number(document.querySelector('#soThuc').value);

        arrRealNumber.push(number);

        // Hiển thị ra mảng:
        document.querySelector('#hienMangSoThuc').innerHTML = '[' + arrRealNumber + ']';


    }

    document.querySelector('#btnDemSoNguyen').onclick = function () {
        var demSoNguyen = 0;
        for (var index = 0; index < arrRealNumber.length; index++) {
            if (kiemTraSoNguyen(arrRealNumber[index]) === 1) {
                demSoNguyen++;
            }
        }
        document.querySelector('#ketQuaCau9').innerHTML = demSoNguyen;
    }

    // Câu 10: so sánh số các số âm và dương
    // So sánh ở mảng số nguyên:
    document.querySelector('#btnSoSanhSoLuongAmDuongA').onclick = function () {
        var demSoDuong = 0;
        var demSoAm = 0;
        for (var index = 0; index < arrNumber.length; index++) {
            if (kiemTraSoDuong(arrNumber[index]) === 1) {
                demSoDuong++;
            } else if (kiemTraSoAm(arrNumber[index]) === 1) {
                demSoAm++;
            }
        }
        if (demSoAm < demSoDuong) {
            document.querySelector('#ketQuaCau10A').innerHTML = 'Số âm ít hơn số dương';
        } else if (demSoAm === demSoDuong) {
            document.querySelector('#ketQuaCau10A').innerHTML = 'Số âm bằng số dương';
        } else {
            document.querySelector('#ketQuaCau10A').innerHTML = 'Số âm nhiều hơn số dương';
        }
    }

    // So sánh ở mảng số thực

    document.querySelector('#btnSoSanhSoLuongAmDuongB').onclick = function () {
        var demSoDuong = 0;
        var demSoAm = 0;
        for (var index = 0; index < arrRealNumber.length; index++) {
            if (kiemTraSoDuong(arrRealNumber[index]) === 1) {
                demSoDuong++;
            } else if (kiemTraSoAm(arrRealNumber[index]) === 1) {
                demSoAm++;
            }
        }
        if (demSoAm < demSoDuong) {
            document.querySelector('#ketQuaCau10B').innerHTML = 'Số âm ít hơn số dương';
        } else if (demSoAm === demSoDuong) {
            document.querySelector('#ketQuaCau10B').innerHTML = 'Số âm bằng số dương';
        } else {
            document.querySelector('#ketQuaCau10B').innerHTML = 'Số âm nhiều hơn số dương';
        }
    }

































}