/*const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
   // let pokeInput = pokeName.value.toLowerCase();
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokeName.value.toLowerCase()}`;
    fetch(URL).then((res) => {
        console.log(res);
        return res.json();
    }).then((data) => {
        console.log("aqui esta el dato")
        console.log(data);
        let pokeImg = data.sprites.other.dream_world.front_default;
        let pokeType = data.types[0].type.name;
        let pokeStadistics = data.stats;
        pokeStadistics.forEach(element => {
            console.log(element.base_stat)
            console.log(element.stat.name)

        });
        console.log(pokeType);

        console.log(pokeImg);
        pokeImagen(pokeImg);
        ponerTipo(pokeType);
    })
}*/

const pokeName = document.getElementById("pokeName");
const tipo = document.getElementById("pokeType");

    


async function fetchPokemon() {
    
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokeName.value.toLowerCase()}`
   
    //console.log(`el nombre ${pokeName} el id ${idi}`)
    try{
    const res = await fetch(URL)
    console.log(res)
    return await res.json()
    .then(data => {
        console.log("aqui esta el dato")
        console.log(data)
       
        const {id,name,is_default,types,sprites,stats,moves,weight} = data;
        
        console.log({id,is_default})
        /*const idi = document.getElementById("pokeId");
        idi.value= id;
        console.log(id);*/
    
        
       //idi = data.id;
        //pokeName.value=name;
       // console.log(name);
       
        //id = document.getElementById("pokeId").value;  
        //tipo.value = types[0].type.name;
        document.getElementById("pokeType").innerHTML = `Tipo: ${types[0].type.name}`;
        document.getElementById("pokePeso").innerHTML = `Peso: ${weight} kg`;
        document.getElementById("pokeId").innerHTML = `Id: ${id}`;
        document.getElementById("pokeMovimientos").innerHTML = `Movimientos: ${moves[0].move.name} y ${moves[1].move.name}`;
        const pokeImage = document.getElementById("pokeImage");
        pokeImage.src = sprites.other.dream_world.front_default;
        document.getElementById("pokeEstadisticas").innerHTML = "Estadisticas:";
        stats.forEach(element => {

            let nuevoDiv = document.createElement("div");

            let nuevoElemento = document.createElement("p");
            nuevoElemento.innerHTML = element.base_stat;
            let newElemento = document.createElement("p");
            newElemento.innerHTML = element.stat.name.substring(0,3); 
            nuevoDiv.appendChild(nuevoElemento);
            nuevoDiv.appendChild(newElemento);

            document.getElementById("estadisticas").appendChild(nuevoDiv);


            
            //document.getElementById("estadisticas").appendChild(newElemento);

            console.log(element.base_stat)
            console.log(element.stat.name)

            document.getElementById("botonPush").addEventListener("click",function(){nuevoDiv.removeChild});

            document.getElementById("circle").addEventListener("click",function(){pokeImage.src = sprites.other.home.front_shiny});
                
        });
    })
    }catch(error){
        console.error("pokemon no encontrado")
        pokeImage.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bd0ba646-3d51-4979-a04c-bc8169de1dab/d4f0gnw-c79677cd-3f48-4175-ae8a-a3cd666fe8f1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JkMGJhNjQ2LTNkNTEtNDk3OS1hMDRjLWJjODE2OWRlMWRhYlwvZDRmMGdudy1jNzk2NzdjZC0zZjQ4LTQxNzUtYWU4YS1hM2NkNjY2ZmU4ZjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VV74RGsdS91Hd8Du-S669wvWB52oSYoMuW4Qi_RYaf4"
        document.getElementById("pokeType").innerHTML="Sin pokemon";
    }
    }
 
 
    /*
    const pokeImagen = (url) => {
        const pokeImage = document.getElementById("pokeImage");
        pokeImage.src = url;
    }


   
    fetch(URL).then((res) => {
        console.log(res);
        return res.json();
    }).then((data) => {
        console.log("aqui esta el dato")
        console.log(data);
        let pokeImg = data.sprites.other.dream_world.front_default;
        let pokeType = data.types[0].type.name;
        let pokeStadistics = data.stats;
        pokeStadistics.forEach(element => {
            console.log(element.base_stat)
            console.log(element.stat.name)

        });
        console.log(pokeType);

        console.log(pokeImg);
        pokeImagen(pokeImg);
        ponerTipo(pokeType);
    })
}

*/

fetchPokemon();

const ponerMovimiento = (move) => {

}

const ponerTipo = (name) => {
    const tipo = document.getElementById("pokeType");
    tipo.value = name;
}




//pokeImagen('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg')

const imprimir = () =>{
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    console.log("Hola " + pokeInput);
    return pokeInput;
}