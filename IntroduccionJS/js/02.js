//OBJETOS


function Producto(){

    const product ={
        nombre: "cosa",
        precio: 400,
        disponible: true
    }
    
    const dispo=()=>{
        const estado = product.disponible;
        if(estado = false){
            return "el producto no esta disponible"
        } else{
            return product;
        }
        
    }
    
}

console.log(Producto)

