export function bodlogo1(){
    function isPalindrome(num) {
        const str = num.toString();
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    }
    
    var number = prompt("too ug : ");
    alert(isPalindrome(number));
    console.log(isPalindrome(number));   
}
