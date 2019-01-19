var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var color3=document.querySelector(".color3");
var color4=document.querySelector(".color4");
var body=document.getElementById("gradient");
function setGradient()
{
body.style.background="linear-gradient(to right,"
+color1.value
+","
+color2.value
+")";
}
function setGradient1()
{
body.style.background="linear-gradient(to bottom,"
+color3.value
+","
+color4.value
+")";
}
color3.addEventListener("input",setGradient1);
color4.addEventListener("input",setGradient1);
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);


