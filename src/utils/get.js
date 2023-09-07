export const getClassLevel = (prop) => {
    let result = 0;
    switch (prop) {
        case "ONE":
            result = 1;
            break;
        case "TWO":
            result = 2;
            break;
        case "THREE":
            result = 3;
            break;
        case "FOUR":
            result = 4;
            break;
        case "FIVE":
            result = 5;
            break;
        case "SIX":
            result = 6;
            break;
        case "SEVEN":
            result = 7;
            break;
        case "EIGHT":
            result = 8;
            break;
        case "NINE":
            result = 9;
            break;
        case "TEN":
            result = 10;
            break;
        case "ELEVEN":
            result = 11;
            break;
    }

    return result;
}

export const getProductType = (prop) => {
    let result = "";
    switch (prop) {
        case "SUBJECT":
            result = "Жалпы орта мектептерге арналған пән";
            break;
        case "COURSE":
            result = "Авторлық онлайн курс";
            break;
    }
    return result;
}