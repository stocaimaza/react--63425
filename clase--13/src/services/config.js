//Tenes que instalar las herramientas de Firebase: npm install firebase.

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//Importamos estas dos funciones. 
//initializeApp = la voy a usar para iniciar la conexion con firebase. 
//getFirestore = se utiliza para obtener una instancia de Firestore. 


//Este es un objeto que tiene toda nuestra información de la cueta. 
//Acá se incluye la key personal de acceso a la BD. 
const firebaseConfig = {
  apiKey: "AIzaSyC3BzRWSEUbqnuwS0v1ds-V9BEL2wuTi20",
  authDomain: "e-commerce63425.firebaseapp.com",
  projectId: "e-commerce63425",
  storageBucket: "e-commerce63425.firebasestorage.app",
  messagingSenderId: "741580099168",
  appId: "1:741580099168:web:19b436fb9ca8badf763d05"
};

//Inicializamos Firebase y se pasa la configuracion como argumento. Esto me devuelve una instancia. 
const app = initializeApp(firebaseConfig);

//Ahora uso esa instancia para obtener el servicio de de Firestore: 

export const db = getFirestore(app);
//No se olviden de exportarla asi esta disponible en toda nuestra aplicación. 