
function imprime(){
    let lg = document.getElementById("login").value 
    let ps = document.getElementById("pass").value

  let senha = "snoppy"

   if (ps == senha) {
          alert("Você está logado")
   } else {
          alert("Tente novamente")
   }

}