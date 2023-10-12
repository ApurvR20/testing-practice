const capitalize = (str) => str.charAt(0).toUpperCase() +str.slice(1);

const reverseString = (str) => {

    let strArr = str.split("");
    strArr.reverse();
    return strArr.join('');
}

const calculator = {
    add(a,b) {
        return a+b;
    },

    subtract(a,b){
        return a-b;
    },

    multiply(a,b){
        return a*b;
    },

    divide(a,b){
        return a/b;
    }
}

const caesarCipher = (str, shift) => {

    let stringArray = str.split('');
    let codeArr = stringArray.map(e => e.charCodeAt(0));

    stringArray = codeArr.map((e) => {

        if((e >=65 && e <=90) || (e >=97 && e<=122))
        {
            let temp = e;
            e+=shift;
            if((temp <=90 && e > 90 ) || (temp <=122 && e > 122))
            {
                e-=26;
            }
        }

        return String.fromCharCode(e);
        
    });

    return stringArray.join('');

}

const analyzeArray = (arr) => ({

    average : arr.reduce((accumulator, currentValue) => accumulator+currentValue/arr.length, 0),

    min : Math.min(...arr),

    max : Math.max(...arr),

    length : arr.length

})

export {capitalize, reverseString, calculator, caesarCipher, analyzeArray};
