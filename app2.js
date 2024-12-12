export function bodlogo2(){
    var zai = prompt("Garaas zai ug");
    var chono = 25 / 3.6;
    var tuulai = 18 / 3.6;
    var second = zai/(chono - tuulai);
    alert("dundjaar " + Math.round(second) + " second shaardaj baina");
}
