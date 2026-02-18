// alert('Hi everyone');
// alert(x); // intensionaly error
// alert('Bye everyone');

// error handling
// try and catch
/*
syntax:
try{

} catch(anyVariableName){

}
*/

try{
    // code test
    alert('Hi everyone');
    alert(x);
    // alert('Bye everyone');
}catch(err){
    // handle error 
    // alert('Inside catch block');
    // console.log('error found');

    console.log(err);
    console.log(err.name);
    console.log(err.message);
    // console.log(err.stack);
}finally{
    // always work if any error has or not
    alert('Bye everyone');
}