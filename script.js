 document.body.style.background = "rgb(23, 22, 22)";

       window.onload = function (){
        document.getElementById("Enter").value=""
       }
        function code(){
            let length = 15;
            let charset = "abc23d4e5f2g1hi5j7kl7m4no8pq9rst74uvw68xyz";
               let password = "";

               const up = document.getElementById("Upper").checked;
               const low = document.getElementById("Lower").checked;
               const special =document.getElementById("Special").checked;

               if(up){
                charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
               }
               if(low){
                charset+="abcdefghijklmnopqrstuvwxyz";
               }
               if(special){
                charset+="!@#$%^&*()_+[]{}";
               }
            for(let i =0 ; i < length ; i++){
                let set = Math.floor(Math.random()*charset.length);
                password+= charset[set];
            }
            document.getElementById("Enter").value = password;
        }



setInterval(() => {
    
        document.body.style.background = disco();
}, 100);

        function disco() {
            let num ="123456789ABCDEF";
            let color ="#";
            for(let i = 0 ; i < 6 ; i++){
                color+=num[Math.floor(Math.random()*16)];
            }
            return color;
        }