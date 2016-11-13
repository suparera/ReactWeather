var names=['Andrew', 'Julia', 'Jan']

// var returnMe = (name) => name+'!';
// console.log('returnMe',returnMe('Andrew'));

var person= {
  name:'Andrew',
  greet:function(){
    names.forEach((name)=>{
      console.log(this.name+' say hi to '+name);
    })
  }
};



person.greet();

function add(a,b){
  return a+b;
}

var add2 = (a,b)=>{return a+b;}

console.log(add2(1,3));
console.log(add2(9,0));
