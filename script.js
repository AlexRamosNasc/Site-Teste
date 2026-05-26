document.write("Hello World!");

function detectClick()
{
  alert("You clicked a button");
}
function detectDoubleClick()
{
  alert("You double-clicked another button");
}
function show()
{
  document.getElementById("secret").innerHTML ="Chuchubeleu";
}
function hide()
{
  document.getElementById("secret").innerHTML ="***********";
}

let contador = 0;
function diminuto(){
  contador--;
  document.getElementById("somador").innerHTML = contador;
}
function somacao() {
  contador++; 
  document.getElementById("somador").innerHTML = contador;
}
