# Prueba Técnica: Búsqueda de Frases y GIFs en React
Descripción:
El objetivo de esta prueba es crear una aplicación en React que haga lo siguiente:

Realice una petición a una API que retorne una frase o chiste (en español) aleatorio.
Extraiga las primeras dos palabras de la frase obtenida.
Realice una búsqueda en la API de Giphy para encontrar un GIF relacionado con esas palabras clave.
Muestre en pantalla la frase obtenida y el GIF relacionado.
Requisitos:
Obtener una frase o chiste aleatorio: Utiliza la API pública JokeAPI para obtener un chiste o frase aleatoria en español (con lang=es).

Obtener un GIF relacionado: Utiliza la API de Giphy para buscar un GIF relacionado con las primeras dos palabras de la frase obtenida. Para ello, necesitarás registrar una cuenta gratuita en Giphy Developers y obtener una clave de API.

Interfaz de usuario:

Muestra el chiste o frase obtenida en la pantalla.
Muestra el primer GIF relacionado con las tres primeras palabras de la frase.
Si no se encuentra un GIF relacionado, muestra un mensaje indicándolo.
Estado de carga: Mientras se obtiene la frase o el GIF, muestra un indicador de "Cargando...".

Manejo de errores:

Si ocurre algún error durante la obtención de la frase o el GIF (por ejemplo, problemas con la API), debe mostrarse un mensaje de error adecuado en la pantalla.
Uso de React y Hooks: Utiliza React y useState/ useEffect para manejar el estado de la aplicación y las peticiones asincrónicas a las APIs.

Pasos recomendados:
Configurar el entorno: Crea un proyecto con Vite y React.

Crear los componentes:

Un componente principal que maneje las peticiones y el estado.
Un componente para mostrar el chiste o frase.
Un componente para mostrar el GIF.
Realizar las peticiones:

Realiza una petición a la API de JokeAPI para obtener una frase en español.
Realiza una petición a la API de Giphy usando las tres primeras palabras de la frase obtenida.
Gestionar los estados:

Carga el estado inicialmente (indicador de "Cargando...").
Actualiza los estados con la frase y el GIF cuando se obtienen.
Optimización y mejora: Si deseas, puedes intentar optimizar la búsqueda del GIF utilizando menos palabras o ajustando la cantidad de resultados de la API de Giphy.