let count=1;
function myfunction(y)
{
    document.getElementById(`box-${y-2}`).style.display="none";
    document.getElementById(`box-${y+1}`).style.display="block";
    

}
function arrowShow(x)
{
    document.getElementById(`arrow-${x}`).style.visibility="visible";
}
function arrowHide(x)
{
    document.getElementById(`arrow-${x}`).style.visibility="hidden";
}