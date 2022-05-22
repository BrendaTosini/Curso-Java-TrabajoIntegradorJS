function calcular(){

    var porcentaje=parseInt(document.getElementById("categoria").value);
    var cantidad=parseInt(document.getElementById("cantidad").value);

   document.getElementById("total").value=(cantidad * (200 - (200 * porcentaje/100)));
    
}