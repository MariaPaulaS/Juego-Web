//namespace - espacio de nombres
//mainloop - nombre principal
//callback - incluir una funcion dentro de otra (se ejecuta primero la funcion externa)

var buclePrincipal = {
    idEjecucion : null,
    ultimoRegistro : 0,
    aps : 0,
    fps : 0,
    iterar : function(registroTemporal){
        buclePrincipal.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar);

    },
    detener: function(){

    },
    actualizar: function(registroTemporal){


    },
    dibujar: function(registroTemporal){


    }

};
