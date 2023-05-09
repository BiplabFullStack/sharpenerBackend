let array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
//let res =['apple', 'oranges' , 'empty string', 'mango', 'empty string', 'lemon']
console.log( array.map((ele,index)=>{
    if (ele ==' ') {
        ele=ele+'empty string'
    }
    return ele;
    
}))
//console.log(res2);