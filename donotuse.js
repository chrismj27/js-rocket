import { timers } from "jquery";

let fuxCount = 0;
worthOfDamn = function findOut(worth) {
    return worth;
};
if (worthOfDamn > 0) {
    fuxCount += worthOfDamn;
};

if (fuxCount > 0) {
    console.log("What do you want?")
} else {
    console.log("Sorry, it's not your day.")
};

const myObject = {
    oneProperty: "Value",
    twoProperty: 8,
    threeProperty: "-- A Date Goes Here--",
    fouProperty: {
        subProp1: 33,
        subProp2: "string",
        subBool: false
    },

    myMethod1: function(aString){
        this.oneProperty = aString;
    },

    myMethodwParams: function(x, y) {
        this.twoProperty = x + y;
    }
} 