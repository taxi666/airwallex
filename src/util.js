export default {
    isEmail 
}

function isEmail(mail){
    var phoneReg = /^\w+@[a-z0-9]+(\.[a-z]+){1,3}$/;  
    return phoneReg.test(mail);
}
