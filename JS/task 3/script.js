function cal_emi()
{
    var P= document.getElementById("principle").value
    var N = document.getElementById("month").value
    var R =document.getElementById("interest").value
    var R=R/100
    var I =R/12

    if(P==""||N==""||R=="")
    {
        alert("empty input")
    }
    else{
    var emi= (P*I*((1+I)**N))/(((1+I)**N)-1)
    document.getElementById("emi").innerHTML=emi
    }


}