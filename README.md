# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

##### ECOMMERCE DE LIBROS #####

Frikitona es una SPA creada en React para la venta de Libros
Tiene la posibilidad de sumar muchas funcionalidades, como pago en linea, envios a domicilio, y secciones de productos.

Inicialmente se desarrolló como prueba de concepto y los estilos son minimalistas ya que se busca tener un template que sea facilmente adaptable a cualquier marca / rubro.

Se utiliza la librería MUI (en su versión 4 por una cuestion de comodidad para el estilado)
Para el manejo de los estados globales se generó un Contexto simple, el mismo es escalable y puede sumar nuevas funcionalidades en caso que el proyecto lo requiera.

Se evitó el manejo de Bases de Datos ya que esto implicaría cumplir con la legislación vigente en Ley 25.326 para el manejo de los datos ingresados por el usuario.

La lista de Productos puede ser facilmente modificada por cualquier otra que respete la misma estructura minima ({ id: , name: , description: , price: , img: }) dentro de src/mocks/productList.jsx
