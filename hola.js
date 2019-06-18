var getData=function(){
    var tam = document.getElementById("tamano").value;
    
    function burbuja(arreglo,n)
    {

        var i, k ,aux;
        for(k=1; k<n;k++){
            for(i=0; i <(n-k);i++){
                if(arreglo[i]>arreglo[i +1]){
                    aux=arreglo[i];
                    arreglo[i] = arreglo[i + 1];
                    arreglo[i+1]=aux;
                }
            }
        }
    }

    function ingresar(arreglo,n)
    {
        for(var k =0;k<n;k++)
        {
            var datos = parseInt(prompt("Ingresa los elementos "));
            arreglo[k]=datos;  
        }
    }

    function Principal()
    {
        var arreglo123=[];
        //var n = parseInt(prompt("Ingrese el tamaño "));
        ingresar(arreglo123,tam)
    
        var t=arreglo123.length;
        document.getElementsByName("aing")[0].value=arreglo123; 
        console.log(arreglo123);
        burbuja(arreglo123,t);
        document.getElementsByName("arresal")[0].value=arreglo123;
        console.log(arreglo123);

    }

    Principal();


}
