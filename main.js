name_student_array =[];
function submit(){
    var display_student_array=[];
    for(var j=1; j<=4; j++){
        var name_student = document.getElementById("name_of_the_student_"+j).value;
        name_student_array.push(name_student);
    }
    console.log (name_student_array);
    length_of_array=name_student_array.length;
    for (var k=0; k<length_of_array;k++){
        display_student_array.push("<h4>NAME- "+name_student_array [k]+"</h4>");
    }
console.log (display_student_array);
document.getElementById("display_name_with_commas").innerHTML=display_student_array;
var remove_commas= display_student_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_student_array.sort();
    console.log (name_student_array);
    var display_sort_array =[];
    length_of_array=name_student_array.length;
    for (var k=0; k<length_of_array;k++){
        display_sort_array.push("<h4>NAME- "+name_student_array [k]+"</h4>");
    }
console.log (display_sort_array);
var remove_commas= display_sort_array.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_commas;

}
function searching()
{
    var s= document.getElementById("s1").value;
    var found =0;
    var j;
    for(j=0; j<names_of_people.length; j++)
    {
        if(s==names_of_people[j]){

        }
    }
    document.getElementById("p2").innerHTML="name found "+found+"  time/s";
    console.log("found name"+found+"  time/s");
}
