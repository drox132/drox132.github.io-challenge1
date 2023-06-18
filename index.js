const btnEncriptar = document.getElementById("btn-encriptar");
        const btnDesencriptar = document.getElementById("btn-desencriptar");
        const btnCopiar = document.getElementById("btn-copiar");



/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
        btnDesencriptar.addEventListener("click",(evento)=>{
            let input = document.getElementById("txt-palabra");
            let valorInput = document.getElementById("txt-palabra").value;
            let spanInput = document.getElementById("valor-encriptado");

            const claveE = "enter";
            const valorE = "e";
            const claveI = "imes";
            const valorI = "i";
            const claveA = "ai";
            const valorA = "a";
            const claveO = "ober";
            const valorO = "o";
            const claveU = "ufat";
            const valorU = "u";
            
            //desencripteo la palabra
            valorInput = valorInput.replace(new RegExp(claveA,"g"),valorA);
            valorInput = valorInput.replace(new RegExp(claveE,"g"),valorE);
            valorInput = valorInput.replace(new RegExp(claveI,"g"),valorI);
            valorInput = valorInput.replace(new RegExp(claveO,"g"),valorO);
            valorInput = valorInput.replace(new RegExp(claveU,"g"),valorU);

            //sobreescribo la palabra desencriptada
            spanInput.innerText=valorInput;

            //limpio el campo del input
            input.value="";
            

        })


/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
        btnCopiar.addEventListener("click", (evento)=>{
            //var palabraEncriptada = document.getElementById("valor-encriptado").textContent;
           copiarAlPortapapeles("valor-encriptado");

            //console.log(palabraEncriptada);
        })

        function copiarAlPortapapeles(id_elemento) {
            var aux = document.createElement("input");
            aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
            document.body.appendChild(aux);
            aux.select();
            document.execCommand("copy");
            document.body.removeChild(aux);
}


/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

        btnEncriptar.addEventListener("click", (evento)=>{
            encriptarPalabra();

        })


        function limpiarInput (){
            const input = document.getElementById("txt-palabra");
            input.value="";

        }

        function encriptarPalabra(){
            let e = "enter";
            let i = "imes";
            let a = "ai";
            let o = "ober";
            let u = "ufat";
            const copiar = document.getElementById("btn-copiar");
            const imagen = document.getElementById("imagen");
            const p1  = document.querySelector(".p1");
            const p2 = document.querySelector(".p2");
            const spanInput = document.getElementById("valor-encriptado");
            const txtPalabra = document.getElementById("txt-palabra").value;
            
            var arrayTxtPalabra = txtPalabra.split("");
            var palabraEncriptada=""; 

            for (let index = 0; index < arrayTxtPalabra.length; index++) {
                if (arrayTxtPalabra[index]=="e") {
                    arrayTxtPalabra[index]=e;
                }
                if (arrayTxtPalabra[index]=="i") {
                    arrayTxtPalabra[index]=i;
                }
                if (arrayTxtPalabra[index]=="a") {
                    arrayTxtPalabra[index]=a;
                }
                if (arrayTxtPalabra[index]=="o") {
                    arrayTxtPalabra[index]=o;
                }
                if (arrayTxtPalabra[index]=="u") {
                    arrayTxtPalabra[index]=u;
                }
            }
            arrayTxtPalabra.forEach(element => {
                palabraEncriptada = palabraEncriptada+element;
            });
         
            imagen.style.display ="none";
            copiar.style.display ="inline";
            p1.style.display ="none";
            p2.style.display="none";
            spanInput.innerText = palabraEncriptada;
           
            limpiarInput();
        }