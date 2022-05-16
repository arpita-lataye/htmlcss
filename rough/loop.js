// var s=''
// for (i=1; i<=5; i++){
//     for (j=1; j<=i; j++){
//         s+=j
//     }
//     s+="\n"
// }
// console.log(s)


// var s=''
// for (i=1; i<=5; i++){
//     for (j=1; j<=i; j++){
//         s+=i
//     }
//     s+='\n'
// }
// console.log(s)

// var s=''
// for (i=5; i>=1; i--){
//     for (j=5; j>=i; j--){
//         s+=j
//     }
//     s+='\n'
// }
// console.log(s)

// var s=''
// for (i=1; i<=5; i++){
//     for (j=1; j<=i; j++){
//         s+=i
//     }
//     s+='\n'
// }
// console.log(s)


// var s='';
// for (i=0; i<5; i++){
//     for (j=0; j<5; j++){
//         s+='*';
//     }
//     s+='\n'
// }
// console.log(s)

// let s='';
// for (let i=1; i<=5; i++){
//     for (let j=5; j>i; j--){
//         s+=' ';
//     }
//     for (let k=0; k<i*2-1; k++){
//         s+='*';
//     }
//     s+='\n';
// }
// for (let i=1; i<=5-1; i++){
//     for (let j=0; j<i; j++){
//         s+=' ';
//     }
//     for (let k=(5-i)*2-1; k>0; k--){
//         s+='*';
//     }
//     s+='\n';
// }
// console.log(s)


// let s="";
// for (let i=0; i<5; i++){
//     for (let k=0; k<5-i; k++){
//         s+='*';
//     }
//     s+='\n';
// }
// console.log(s)


// s='';
// for (i=1; i<=6; i++){
//     for (k=1; k<=6-i; k++){
//         s+=k;
//     }
//     s+='\n';
// }
// console.log(s)

/*
var n=6;
let s='';
for (i=n/2; i<n; i+=2){
    for (j=1; j<n-i; j+=2){
        s+=' ';
    }
    for (j=1; j<i+1; j++){
        s+='*';
    }
    for (j=1; j<n-i+1; j++){
        s+=' ';
    }
    for (j=1; j<i+1; j++){
        s+='*';
    }
    s+='\n';
}

for (i=n; i>0; i--){
    for (j=0; j<n-i; j++){
        s+=' ';
    }
    for (j=1; j<i*2; j++){
        s+='*';
    }
    s+='\n';
}
console.log(s) */


// n=5;
// s=''
// for (i=1; i<=n; i++){
//     for (j=n; j>i; j--){
//         s+=' ';
//     }
//     for (k=0; k<i*2-1; k++){
//         if (k===0 || k===2*i-2){
//             s+='*';
//         }
//         else{
//             s+=' ';
//         }
//     }
//     s+='\n';
// }
// for (i=1; i<=n-1; i++){
//     for (j=0; j<i; j++){
//         s+=' ';
//     }
//     for (k=(n-i)*2-1; k>=1; k--){
//         if (k===1 || k===(n-i)*2-1){
//             s+='*';
//         }
//         else{
//             s+=' ';
//         }
//     }
//     s+='\n';
// }
// console.log(s)

/*
n=5;
s='';
for (i=1; i<=n; i++){
    for (j=1; j<=n-i; j++){
        s+=' ';
    }
    for (k=0; k<2*i-1; k++){
        if (i===1 || i===n){
            s+='*';
        }
        else{
            if (k===0 || k===2*i-2){
                s+='*';
            }
            else{
                s+=' ';
            }
        }
    }
    s+='\n'
}
console.log(s) */

/*
let n=5;
let s='';
for (i=0; i<n; i++){
    for (j=0; j<n; j++){
        if (i===0 || i===n-1){
            s+='*';
        }
        else{
            if (j===0 || j===n-1){
                s+='*';
            }
            else{
                s+=' ';
            }
        }
    }
    s+='\n';
}
console.log(s) */

/*
let n=5;
let s='';
for (i=1; i<=n; i++){
    for (j=0; j<i; j++){
        if (i===n){
            s+='*';
        }
        else{
            if (j===0 || j===i-1){
                s+='*';
            }
            else{
                s+=' ';
            }
        }
    }
    s+='\n';
}
console.log(s); */


// let n=5;
// let s='';
// for (i=0; i<n; i++){
//     for (j=0; j<i; j++){
//         s+=' ';
//     }
//     for (k=0; k<(n-i)*2-1; k++){
//         s+='*';
//     }
//     s+='\n';
// }
// for (i=2; i<=n; i++){
//     for (j=n; j>i; j--){
//         s+=' ';
//     }
//     for (k=0; k<i*2-1; k++){
//         s+='*';
//     }
//     s+='\n';
// }
// console.l

/*
let n=5;
let s='';
for (i=0; i<n; i++){
    for (j=0; j<i; j++){
        s+=' ';
    }
    for (k=0; k<(n-i)*2-1; k++){
        s+='*';
    }
    s+='\n';
}
for (i=2; i<=n; i++){
    for (j=n; j>i; j--){
        s+=' ';
    }
    for (k=0; k<i*2-1; k++){
        s+='*';
    }
    s+='\n';
}
console.log(s) */

/*
let n=5;
let s='';
for (i=1; i<=n; i++){
    for (j=0; j<n-i; j++){
        s+=' ';
    }
    for (k=0; k<i; k++){
        s+='*';
    }
    s+='\n';
}
for (i=1; i<=n-1; i++){
    for (j=0; j<i; j++){
        s+=' ';
    }
    for (k=0; k<n-i; k++){
        s+='*';
    }
    s+='\n';
}
console.log(s) */

/*
let n=5;
let s='';
for (i=1; i<=n; i++){
    for (j=0; j<i; j++){
        s+='*';
    }
    s+='\n';
}
console.log(s) */

/*
let n=5;
let s='';
for (i=0; i<n; i++){
    for (j=0; j<i; j++){
        s+=' ';
    }
    for (k=0; k<2*(n-i)-1; k++){
        s+='*';
    }
    s+='\n';
}
console.log(s) */


// let n=5;
// let s='';
// for (i=1; i<=n; i++){
//     for (j=0; j<i; j++){
//         s+='*';
//     }
//     s+='\n';
// }
// for (i=1; i<=n; i++){
//     for (j=0; j<n-i; j++){
//         s+='*';
//     }
//     s+='\n';
// }
// console.log(s);

/*
var s='';
for (i=1; i<=5; i++){
    for (j=1; j<=i; j++){
        s+=j;
    }
    s+='\n';
}
console.log(s)*/

/*
let s='';
let count=0; 
for (let i=1; i<=5; i++){
    for (j=0; j<i; j++){
        s+=String.fromCharCode(count+65);
        count++;
    }
    s+='\n';
}
console.log(s) */


// var s=''
// for (i=5; i>=1; i--){
//     for (j=1; j<=i; j++){
//         s+=j;
//     }
//     s+='\n';
// }
// console.log(s)

/*
var s='';
for (i=5; i>=1; i--){
    for (j=1; j<=i; j++){
        s+=j;
    }
    s+='\n';
}
console.log(s)  */

/*
var s='';
for (i=5; i>=1; i--){
    for (j=1; j<=i; j++){
        s+=i;
    }
    s+='\n';
}
console.log(s) */

/*
var s='';
for (i=1; i<=5; i++){
    for (j=5; j>=i; j--){
        s+=i;
    }
    s+='\n';
}
console.log(s) */

/*
var s='';
for (i=1; i<=5; i++){
    for (j=5; j>=i; j--){
        s+=j;
    }
    s+='\n';
}
console.log(s)*/

/*
var s='';
for (i=5; i>=1; i--){
    for (j=5; j>=i; j--){
        s+=i;
    }
    s+='\n';
}
console.log(s) */

/*
var s='';
for (i=1; i<=5; i++){
    for (b=1; b<=5-i; b++){
        s+=' ';
    }
    for (j=1; j<=i; j++){
        s+=j;
    }
    s+='\n';
}
console.log(s) */

/*
var s='';
for (i=1; i<=5; i++){
    for (j=1; j<=i; j++){
        s+=i*j;
        s+=' ';
    }
    s+='\n';
}
console.log(s) */

// var s='';
// for (i=1; i<=7; i++){
//     for(j=1; j<=i; j+=2){
//         s+=j;
//         s+=' ';
//     for (j=1; j<=i; j+=1){
//         s+='*'
//     }
//     }
//     s+='\n'
// }
// console.log(s)



// var s='';
// for (i=1; i<=9; i++){
//     for (j=1; j<=i; j++){
//         if (j%2==0){
//             s+='*'
//         }
//         else{
//             s+=j;
//         }
//     }
//     s+='\n'
// }
// console.log(s)


// var a=require('readline-sync')
// var n=a.questionInt('Enter number:')
// if (3*n+1%3===0){
//     console.log('beautiful')
// }
// else if ((3*n+2)%3===0){
//     console.log('better')
// }
// if(3*n){
//     console.log('best')
// }


// var s='';
// for (i=1; i<=9; i++){
//     for (j=1; j<=i; j++){
//         if (j%2==0){
//             s+='*'
//         }
//         else{
//             s+=j;
//         }
//     }
//     s+='\n'
// }
// console.log(s)


// var s='';
// for (i=1; i<=7; i++){
//     for (j=1; j<=i; j++){
//         if (j%2==0){
//             s+='*'
//         }
//         else{
//             s+=j;
//         }
//         s+='\n'
//     }
//     // s+='\n'
// }
// console.log(s)

// var s='';

var s=''
for (i=1; i<=7; i++){
    for (j=1; j<=i; j++){
        if (i%j==0){

        }
    }
}