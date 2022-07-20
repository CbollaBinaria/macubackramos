const fs = require('fs');

class Contenedor {
    constructor(file){
        this.file = file
    }

    getAll(){
        const data = JSON.parse(fs.readFileSync(this.file, 'utf-8'))
        console.log(data)
        return data
    }
    saveProduct(product){
        let listado = this.getAll();
        product.id = listado.length+1        
        listado.push(product)
        fs.writeFile(this.file, `${JSON.stringify(listado)}`, error => {
            if (error){
                console.log('Hubo un problema al guardar el archivo')
            }else {
                console.log(`Se guardó el producto bajo el ID ${product.id}`)
            }
        })
    }

    getByID(id){
        let list = this.getAll();
        console.log(list.find(el => el.id === id))        
    }

    deleteByID(id){
        let list2 = this.getAll();
        let indexToSplice = list2.findIndex(el => el.id === id);
        list2.splice(indexToSplice,1);
        fs.writeFile(this.file, `${JSON.stringify(list2)}`, error=> {
            if (error) {
                console.log('Ha ocurrido un error al escribir el archivo')
            } else {
                console.log('Se ha guardado correctamente')
            }
        });
        console.log(list2);
    }

    deleteAll(){
        let list3 = this.getAll();
        list3 = [];
        fs.writeFile(this.file, `${JSON.stringify(list3)}`, error=> {
            if (error) {
                console.log('Ha ocurrido un error al escribir el archivo')
            } else {
                console.log('Se ha guardado correctamente')
            }
        })
    }
}

module.exports = Contenedor;

