var createName =  function(first,last)
{
    return first+" "+last;

}





var askName = function(){
    var first=prompt("Please enter your First name");
    var last=prompt("Please enter your Last name");

    var fullName=createName(first,last);

    alert("Your name :"+fullName);
    return 0;
}



