Proyecto DEV.F Kata 8. Backend de un E-commerce creado con NodeJS, Express, knex, postgreSQL. La base de datos está alojada en [ElephantSQL](https://www.elephantsql.com/) y se le hizo el deploy al proyecto en [Cyclic](https://www.cyclic.sh/)

## Descripción del backend

- Este es un backend diseñado para E-commerce. 
- Contiene 20 productos distintos
- Cada producto tiene los siguientes atributos ( **Schema** ) :
	- id : tipo `int`, único e incremental
	- nombre : tipo `string`, único y **requerido**
	- categoría : tipo `string`
	- descripción : tipo `string`
	- cantidad :  tipo `int`, no puede ser negativo y es **requerido**
	- precio : tipo `float` con un máximo de 10 dígitos, de los cuales 3 son decimales 
	- is_active : tipo `bool`, valor por default es "true", utilizado para eliminar de manera lógica loa productos 
- La base de datos esta alojada en ElephantSQL

## Link del backend

El backend tiene un deploy en Cyclic. Para acceder al backend, tenemos que hacer consultas desde [esta dirección](https://tan-excited-hermit-crab.cyclic.app/api/products/)
##### https://tan-excited-hermit-crab.cyclic.app/api/products/

## CRUD

### Create
Con el método POST podemos crear nuevos productos colocando en el body la siguiente estructura JSON:
``` JSON
{
	"nombre":"<Nombre del producto>",
	"categoria":"<Nombre de la categoria del producto>",
	"descripcion":"<Descripcion del producto>",
	"cantidad":"<Stock del producto>",
	"precio":"<Precio del producto>"
}
```
Regresa el numero de **id** asignado al nuevo producto

### Read
Con el método GET podemos ver la lista de todos los productos o ver un producto con el **id** en los **params**. Regresa un arreglo de los productos o el producto consultado

### Update
Con el método POST podemos editar un producto por **id** como requisito en los **params**. Regresa true

### Delete
Con el método DELETE cambiamos la propiedad **`{ "is_active" : "false" }`** para que no pueda consultarse. Pero este no será eliminado de la base de datos y tampoco podrá crearse un producto igual a este.

## Enpoints

- GET - `/api/products/` :  Regresa todos los productos de la base de datos
- GET - `/api/products/:id` :  Regresa el producto por id 
- POST - `/api/products/` :  Es necesario un objeto en el body. Crea un nuevo producto en la base de datos
- PUT - `/api/products/:id` :  Es necesario un objeto en el body con los atributos a modificar. Modifica el producto por id
- DELETE - `/api/products/:id` :  Elimina un producto por id.
