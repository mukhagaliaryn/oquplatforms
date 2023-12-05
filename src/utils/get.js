
export const getProductType = (prop) => {
    let result = null;
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

