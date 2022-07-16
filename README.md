# CompuMarket

## Descripción

En eset repositorio se encuentra el proytecto final desarrollado para el curso de `React JS` de `Coderhouse`.

La aplicación es un eCommerce en el cual se puede filtrar los productos de acuerdo a categorías y acceder a ver el detalle de cada producto. Los mismos pueden ser agregados al carrito para luego completar un formulario simulando un proceso de compra completo.

Tanto el listado de categorías, como los productos y las órdenes generadas se almacenan en `Firebase`.

Puede visitarse el deploy del proyecto en [https://curso-react-8ed77.web.app/](https://curso-react-8ed77.web.app/)

![GIF de muestra.](/public/muestra.gif "Vista del proyecto.")

## Tecnologías utilizadas

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![React-Bootstrap](https://img.shields.io/badge/REACT_BOOTSTRAP-%230081CB.svg?style=for-the-badge&logo=bootstrap&logoColor=white) ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase) ![Validator](https://img.shields.io/badge/validator-%23000000.svg?style=for-the-badge) ![SweetAlert2](https://img.shields.io/badge/sweetalert2-%23000000.svg?style=for-the-badge)

* [React JS](https://reactjs.org/)
* [React Router Dom](https://reactrouter.com/)
* [React-Bootstrap](https://react-bootstrap.netlify.app/)
* [Firebase](https://firebase.google.com/)
* [Validator](https://vercel.com/)
* [SweetAlert2](https://sweetalert2.github.io/)

## Ejecutar el proyecto

Para ejecutar el proyecto, el mismo puede descargarse como .zip o clonarlo con:

```
git clone https://github.com/LucasERossini/clase-Rossini
cd clase-Rossini
```

Instalar las dependencias:

```
npm install
```

Luego es necesario crear un proyecto en Firebase y crear una colección llamada `items` en Firestore. Los items deben crearse manualmente desde Firebase.

##### Ejemplo de item:
```
item = {
    "id": "1",
    "category": "Motherboard",
    "title": "Motherboard 1",
    "description": "Buen motherboard.",
    "detail": "Buena motherboard. Cumple con funciones básicas.",
    "price": 150,
    "pictureUrl": "/images/motherboard.png",
    "stock": 100,
    "color": "negro"
    }
```
Una segunda colección, llamada `orders`, se creará automáticamente al generar la primer orden de compra.

## Consideraciones adicionales

### React-Bootstrap
Se escogió React-Bootstrap como librería de componentes para agilizar el proceso de desarrollo y estilado de la aplicación.
### Firebase
En Firebase se almacenaron el listado de productos y las órdenes generadas.
### SweetAlert2
Se utilizó la librería SweetAlert2 para mejorar visualmente los algunos avisos dirijidos al usuario.
### Validator
Se utilizó la librería Validator para asistir en la validación de campos del formulario en el checkuot.
### LocalStorage
Se utilizó LocalStorage para persistir el carrito de los usuarios en sus dispositivos en el caso de que no finalicen el flujo de compra para mejorar la experiencia de uso.
### Control de Stock
Se implementó control de stock en dos puntos del flujo de compra para evitar que un usuario pueda adquirir una cantidad mayor de un producto de la que se encuentre disponible:
* Al enviar la orden a Firebase, comparando la cantidad de items a adquirir con la disponible en la base de datos.
* Cuando el usuario ya tiene un producto en el carrito y vuelve a acceder al mismo para agregar más, si la cantidad que agrega más la inical superan el stock del producto, se le avisa que esa acción no se puede realizar.

### Componente ScrollToTop
En las últimas versiones de React Router Dom ya no se restaura el scroll automáticamente al navegar entre rutas, por lo que si por ejemplo estamos observando el listado de productos y recorremos la página hacia la parte inferior, al navegar a otra página quedaremos posicionados también en la parte inferior.

Para resolver este comportamiento se implementó el componente `src/wrappers/ScrollToTop.jsx` el cual, mediante el hook `useLocation` de React Router, detecta la navegación entre rutas y restaura el scroll a la parte superior de la página. 