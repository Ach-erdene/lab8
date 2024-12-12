export function bodlogo3(){
    
var ail = prompt("Toot ug : ");
var orts;
var davhar;
var haalga;

if(ail <= 36){
    orts = 1;
}else if(ail > 36 && ail <= 72){
    orts = 2;
}else if(ail > 72 && ail <= 106){
    orts = 3;
}else{
    orts = null;
}

    if(orts === 1){
        davhar = (ail % 4 === 0) ? ail / 4
        : Math.ceil(ail / 4);
    }else if(orts === 2){
        davhar = ((ail - 36) % 4 === 0) ? (ail - 36) / 4
        : Math.ceil((ail - 36) / 4);
    }else if(orts === 3){
        davhar = ((ail - 36 * 2) % 4 === 0) ? (ail - 36 * 2) / 4
        : Math.ceil((ail - 36 * 2) / 4);
    }else{
        davhar = null;
    }

    if(orts === 1){
        haalga = ail % 4 === 0 ? 4
        : ail % 4;
    }else if(orts === 2){
        haalga = (ail - 36) % 4 === 0 ? 4
        : (ail - 36) % 4;
    }else if(orts === 3){
        haalga = (ail - 36 * 2) % 4 === 0 ? 4
        : (ail - 36 * 2) % 4;
    }else{
        haalga = null;
    }


alert(`${orts} dugaar ortsnii ${davhar} davhariin ${haalga} dugaar haalga`);

}