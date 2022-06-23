// Kiểm tra số nguyên:
function kiemTraSoNguyen(number) {
    if (number % 1 === 0) {
        return 1;
    } else {
        return 0;
    }
}

// Kiểm tra số dương
/**
 * 
 * @param {*} number number: Số cần kiểm tra tính dương
 * @returns 1: số dương
 * 0: số không dương
 */
function kiemTraSoDuong(number) {
    if (number > 0) {
        return 1;
    } else {
        return 0;
    }
}

// Kiểm tra số âm
function kiemTraSoAm(number) {
    if (number < 0) {
        return 1;
    } else {
        return 0;
    }
}

// Kiểm tra số chẵn:
function kiemTraSoChan(number) {
    if (number % 2 === 0) {
        return 1;
    } else {
        return 0;
    }
}

// Tìm số nhỏ nhất trong mảng
/**
 * 
 * @param {*} arrNumber arrNumber: mảng cần tìm số nhỏ nhất
 * @returns min: số nhỏ nhất trong mảng
 */
function timSoNhoNhat(arrNumber) {
    var min = arrNumber[0];
    for (var index = 0; index < arrNumber.length; index++) {
        if (arrNumber[index] < min) {
            min = arrNumber[index];
        }
    }
    return min;
}

// Tìm chỉ số của số nhỏ nhất
function timChiSoCuaSoNhoNhat(arrNumber) {
    var min = arrNumber[0];
    var chiSo = 0;
    for (var index = 0; index < arrNumber.length; index++) {
        if (arrNumber[index] < min) {
            min = arrNumber[index];
            chiSo = index;
        }
    }
    return chiSo;
}

// Lọc ra các số dương trong mảng:
/**
 * 
 * @param {*} arrNumber arrNumber: mảng cần lọc các số dương
 * @returns arrSoDuong: mảng gồm các số dương của mảng ban đầu
 */
function locSoDuong(arrNumber) {
    var arrSoDuong = [];
    for (var index = 0; index < arrNumber.length; index++) {
        if (kiemTraSoDuong(arrNumber[index]) === 1) {
            arrSoDuong.push(arrNumber[index]);
        }
    }
    return arrSoDuong;
}

// Lọc số chẵn:
function locSoChan(arrNumber) {
    var arrSoChan = [];
    for (var index = 0; index < arrNumber.length; index++) {
        if (kiemTraSoChan(arrNumber[index]) === 1) {
            arrSoChan.push(arrNumber[index]);
        }
    }
    return arrSoChan;

}

// Sắp xếp mảng số tăng dần:
function sapXepTangDan(arrNumber) {
    var arrPhu = [];
    for (var index = 0; index < arrNumber.length; index++) {
        arrPhu.push(arrNumber[index]);
    }

    for (var i = 0; i < arrNumber.length; i++) {
        var min = timSoNhoNhat(arrPhu);
        var chiSo = timChiSoCuaSoNhoNhat(arrPhu);
        arrNumber[i] = min;
        arrPhu.splice(chiSo, 1);
    }

    return arrNumber;
}

// Kiểm tra số nguyên tố:
function kiemTraSoNguyenTo(number) {
    var soUoc = 2;
    if (number < 2) {
        return 0;
    } else if (number === 2) {
        return 1;
    } else {
        for (var soHang = 2; soHang <= Math.sqrt(number); soHang++) {
            if (number % soHang === 0) {
                soUoc++;
            }
        }
        if (soUoc === 2) {
            return 1;
        } else {
            return 0;
        }
    }

}
