export function bodlogo5(){
    console.log("hi");
    var date = new Date
    var too = prompt("garaas too ug : ");
    var hour = date.getHours();
    console.log(hour);
    too = parseInt(too, 10); 
    console.log(too);
    console.log(typeof(too))
    console.log(typeof(hour))
    if(typeof(hour) == "number") console.log("ghghgh");

    if(hour >= 5 && hour < 15){
        alert(too + " nii 2 zereg ni : " + (too * too));
        console.log("hi");
    }else{
        alert(too + " nii yazguur ni " + Math.sqrt(too));
        console.log("hi");
    }
}