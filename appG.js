import { bodlogo1 } from './app.js';
import { bodlogo2 } from './app2.js';
import { bodlogo3 } from './app3.js';
import { bodlogo4 } from './app4.js';
import { bodlogo5 } from './app5.js';

var bodlogo = prompt("heddugeer bodlogo ve ? ");

    switch(bodlogo){
        case "1" : bodlogo1();break;
        case "2" : bodlogo2();break;
        case "3" : bodlogo3();break;
        case "4" : bodlogo4();break;
        case "5" : bodlogo5();break;
        default : alert("iim bodlogo alga"); break;
    }   
