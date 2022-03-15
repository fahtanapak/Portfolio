document.getElementById('topic1').value ;
document.getElementById('comment1').value ;
document.getElementById('comment2').value ;
var Input_text = document.getElementById('text1');
var num =1;

function postFunction()
{  
    TEXT= Input_text.value;
    if(num==1 && TEXT != '' )
    {
        document.getElementById('topic1').innerHTML =  document.getElementById('text1').value;
        num++;
    }
    else if(num==2 && TEXT != '')
    {
        document.getElementById('comment1').innerHTML =  document.getElementById('text1').value;
        num++;
    }
    else if(num==3 && TEXT != '')
    {
        document.getElementById('comment2').innerHTML =  document.getElementById('text1').value;
        num++;
    }
    else if (num>3 && TEXT != '')
    {
        num =1;
    }
    document.getElementById('text1').value = '';
}   
   
function clearFunction()
{
    topic1.innerText=null;
    comment1.innerText=null;
    comment2.innerText=null;
}
