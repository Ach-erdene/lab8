export function bodlogo1(){
    function isPalindrome(num) {
        const str = num.toString();
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    }
    var s = 0;
    var number = prompt("too ug : ");
    while(number != 0){
        s = s + (number % 10);
        number = Math.floor(number / 10);
    }
    alert(isPalindrome(s));  
}
