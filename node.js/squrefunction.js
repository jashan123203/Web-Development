// //function to return squre of a number
// function findsquare(num) 
// {
//     var squre = num ** 2);
//     return squre;
// }
function fac()
{
    if(n==0)
    {
        return 1;
    }
    return n*fac(n-1);
}
console.log(fac(5));