'use strict';

let i = 2;
let j;

next:
    while (i <= 100) {
        j = 2;
        while (j <= Math.sqrt(i)) {
            if (i % j == 0) {
                i++;
                continue next;
            } else j++;
        }
        console.log(i);
        i++;
    }