//array destructuring

// const numbers = [14,78,'abc',87,124,1000]
// const [a,b,c,d,e,f]=numbers
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

//object destructuring
const person={
    name:'Mifthah',
    domain:'Mernstack',
    age:30,
    address:{
        district:'Thriisur',
        local:{
            data:123
        }
    }
}

const{name,age,domain,address:{district},address:{local:{data}}}=person

console.log(domain);
console.log(district);
console.log(data);
