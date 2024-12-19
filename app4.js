export function bodlogo4(){
    const arr = [1, 6, 7, 3, 2]
    let temp = arr[0];
    for(let i = 1; i < arr.length; i++){
        temp = hb(temp, arr[i]);
    }
    function hb(a, b){
        let aa = a;
        let bb = b;
        let uldegdel;
        while(bb != 0){
            uldegdel = aa % bb;
            aa = bb;
            bb = uldegdel
        }
        return a * b / aa;
    }
    alert("hamgiin baga yoronhii huvaagdagch ni : " + temp);
}