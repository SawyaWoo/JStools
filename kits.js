var kits = {};


// 数字前加0
kits.addZero = function (date) {
    date = date >= 10 ? date : '0' + date;
    return date;
};

// 获取实时时间
kits.getTime = function () {
    var time = new Date();
    var year = time.getFullYear();
    var month = kits.addZero(time.getMonth() + 1);
    var day = kits.addZero(time.getDate());
    var hour = kits.addZero(time.getHours());
    var min = kits.addZero(time.getMinutes());
    var sec = kits.addZero(time.getSeconds());
    return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec;
};

// 获取从n到m的随机数
kits.randomNum = function (n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n);
};

// 获取随机ID
kits.randomId = function (n, m) {
    var time = new Date();
    time = time.getTime();
    var num = kits.randomNum(n, m);
    var result = time + '' + num;
    return result;
};

// 获取随机颜色 rgb模式
kits.randomRgbColor = function () {
    var r = kits.randomNum(0, 255);
    var g = kits.randomNum(0, 255);
    var b = kits.randomNum(0, 255);
    // console.log(r, g, b);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
};

// 获取随机颜色 hex模式
kits.randomHexColor = function () {
    var n = ((Math.random() * 0xfffff) | 0).toString(16);
    var result = '#' + (n.length !== 6 ? ((Math.random() * 0xf) | 0).toString(16) + n : n);
    return result;
};