/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    

    // Application Constructor
    initialize: function() {
        

        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        // recogemos el boton 
       document.getElementById("ok").addEventListener('click',this.boton);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('aplicacion');
        
       
    },
    boton : function(){
        // recogemos del cuadro de texto los datos que necesitamos para la conversion 
        var latitud=document.getElementById("latitud").value;
        var longitud=document.getElementById("longitud").value;
        // realizamos la conversion 
        nativegeocoder.reverseGeocode(success, failure, 52.5072095, 13.1452818, { useLocale: true, maxResults: 1 });
 
        function success(result) {
            // recogemos el resultado
        var firstResult = result[0];
        var resultado=JSON.stringify(firstResult);
        var pais=firstResult.countryName;
        var codigoPais=firstResult.countryCode;
        var codigoPostal=firstResult.postalCode;
        var localidad=firstResult.locality;
        var areaAdministrativa=firstResult.administrativeArea;

        // para comprobar toda la informacion por el log
        

        document.getElementById("texto").innerHTML=pais+"<br>"+codigoPais+"<br>"+codigoPostal+"<br>"+localidad+"<br>"+areaAdministrativa+"<br>";
        console.log("First Result: " + resultado);


        }
        
 
        function failure(err) {
        console.log(err);
}
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
          
        }
    
        
    
        
    
};

 


app.initialize();