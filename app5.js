export function bodlogo5(){
    
    var date = new Date
    var too = prompt("garaas too ug : ");
    if(date.getHours() <= 10 && date.getHours() >= 5){
        alert(too + " nii 2 zereg ni : " + (too * too));
    }else if(date.getHour() >= 20 && date.getHours() <= 1){
        alert(too + " nii yazguur ni " + Math.sqrt(too));
    }
}