// result value
let result =
document.getElementById("answer").value;

//fuction to add answer
function addAnswer (numb){
    result= result + numb
    //update result on the screen
    document.getElementById("answer").value= result
}

//fuction to calculate
function calculate(){
    result=eval(result);
    document.getElementById("answer").value =numberWithComma(result);  
}


//function to delete
function deleteButton(){
    result= result.slice(0, result.length-1)
    document.getElementById("answer").value= result;
}


//function to clear all
function clearAll(){
    result ="";
    document.getElementById("answer").value = ("");   
}


//function add comma to result
function numberWithComma(x){
    //add a thousand separator to result
    return x.toLocaleString ("en-US",{
        useGrouping:true,
     groupingSeperator :","||"."

    }
    )
    }
    
