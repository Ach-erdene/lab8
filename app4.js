export function bodlogo4(){
        
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
            console.log(a, b);
        }
        return a;
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    function hbye(arr) {
        return arr.reduce((acc, num) => lcm(acc, num), 1);
    }

    console.log(hbye([1, 6, 7, 3, 2])); 
    console.log(gcd(30,120));

}