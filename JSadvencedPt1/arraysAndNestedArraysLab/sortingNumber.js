function sortingNumber (array)  {
    let final = [];
    array.sort((a,b) => b - a);

    while(array.length !== 0) {
        final.push(array.pop());
        final.push(array.shift());
        
    }
    return final
   
}
sortingNumber ([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])


// make a while cicly and just make a new array and push 
// into it be using push and pop of the orrgininal array and 
// and just switch them so you end up with a new array that 
// consosts of the first and last element of the array just 
// like that other exercise where we poped the unneeded numbers
