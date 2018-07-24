# Proyecto final

Construir una página donde se listen productos y se puedan agregar los mismos a un carrito de compras.

## Instalación
Deben tener instalado YARN. Hay muchas formas de hacerlo, si ya tienen NPM, la más fácil es: npm install --global yarn
Si no, miren acá todas las formas: https://yarnpkg.com/en/docs/install

Abrir una consola, y escribir los siguientes comandos
1. git clone https://github.com/matias89/bootcampui
2. cd bootcampui
3. yarn install
4. yarn start

## Tareas
A partir del proyecto base, crear los componentes necesarios para ordenar toda la aplicación, agregando estilos y comportamientos que falten. ver en el archivo /src/pages/Products/Products.js el comentario que hay de como podrían encarar esto. Creen componentes para el footer del layout, si quieren crear un componente <SideBar /> para poner los detalles del carrito, componentes para el botón, etc.

La idea es tener dos pantallas:
1. El home, la que aparece por defecto, donde podrían jugar un poco y poner lo que se les ocurra para que quede como una portada de un sitio de ventas (siempre utilizando componentes!).
2. La vista de productos, dónde actualmente saca productos del reducer y los renderiza. La idea es que vayan creando componentes para ordenar todo eso. Agreguen mas productos a la lista existente (ahora solo tiene un copy/paste de ejemplo), y si se animan a agregar mas props a las existentes (name, description, price), por ejemplo podrían crear una prop llamada 'img', poner alguna URL de alguna imagen (ej.: https://notasdemascotas.com/wp-content/uploads/2016/09/Nombres-para-gato-macho-muy-originales-534x401.jpg), y luego renderizarla en el componente que muestre los productos.

## Directorios
Los directorios que deberian tocar son, dentro de src, los siguientes: actions, components, constants, pages y reducers. Los demás ya están preparados para que trabajen, no deberian hacer modificaciones en ellos, a menos que quisieran hacer cosas más avanzadas, como agregar rutas, que está fuera del scope de este proyecto.
