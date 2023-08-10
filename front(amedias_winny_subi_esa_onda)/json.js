

document.querySelector('#bot').addEventListener('click',traer);

function traer(){


    const json= new XMLHttpRequest();

    json.open('GET','http://',true);

    json.send();

    json.onreadystatechange=function(){

        if(this.readyState==4 && this.status==200){
   
            let datos= JSON.parse(this.responseText);

            let res= document.querySelector('#res');

            res.innerHTML='';

            for(let truku of datos){
          
                res.innerHTML +=`

                <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${truku.}</h5>
                <p class="card-text">${truku.}</p>
                <p class="card-text">${truku.}</p>
             
                </div>
                </div>
                
                `
            }
        }
    }

    
}