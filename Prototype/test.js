var xau = "aaabbkc";

function mahoa(xau) {
    var array = [];
    var rs = [];
    var dem = 0;
    for (let i = 0; i < xau.length; i++) {
        if (xau[i] != xau[i + 1]) {
            array.push(xau[i]);
        }
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < xau.length; j++) {
            if (array[i] == xau[j]) {
                dem++;
            }
        }
        if (dem == 1) {

        }
        rs.push(array[i], dem);
        dem = 0;
    };
    return rs.join("");
}

console.log("xau", mahoa(xau))