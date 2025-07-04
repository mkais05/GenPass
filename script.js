 document.body.style.background = "rgba(0, 0, 0, 0.87)";

       window.onload = function (){
        document.getElementById("Enter").value="";
         document.getElementById("Name").value="";
       }
        function code(){
            let length = 10;
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






          const adjective =["Cool", "Fast", "Funky", "Lazy", "Happy", "Crazy", "Silent", "Smart", "Angry", "Brave"];
            const nouns =["Tiger", "Ninja", "Lion", "Wolf", "Panther", "Fox", "Shadow", "Ghost", "Wizard", "Falcon"];


        function username(){
            const adj=adjective[Math.floor(Math.random()*adjective.length)];
            const n=nouns[Math.floor(Math.random()*nouns.length)];
            const num=Math.floor(Math.random()*100);
            const user=adj+n+num;

            document.getElementById("Name").value=user;
        }
