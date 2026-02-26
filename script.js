let obj1={                  /*NAN is  a NOT A  NUMBER
    name:'abc',              number(int+float)
    age:22                    string
} 
                              boolean,null,undefined*/
let obj2=obj1
obj2.name='xyz';
console.log(obj1.name)