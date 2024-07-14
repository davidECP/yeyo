// QUE ES GIT: ES UN SISTEMA DE CONTROL DE VERSIONES DEL PROYECTO QUE PERMITE TRABAJAR COOPERATIVAMENTE Y SUBIR LAS VERSIONES, EN CUANTO A LA SEGURIDAD TIENE UN HASH LLAMADO "unosiryoku" algo asi
// tiene 3 areas de desarrollo:
// 1° directorio  que se refiere a la ruta del proyecto
// 2° el area de trabajo
// 3° y el repositorio que aun no entiendo pero sirve para controlar la modificaciones en el proyecto

// EN LA TERMINAL SE USO ESTE COMANDO PARA CONFIGURAR GLOBALMENTE LA CONEXION CON VISUAL STUIO EL PROBLEMA ES QUE ESTAMOS TRABAJANDO DESDE LA VERSION MOVIL POR LO QUE NO SABEMOS SI FUNCIONE CORRECTAMENTE CON ESTA VERSION
// "$ git config --global core.editor "code --wait"
//-> vasicamenete lo que hace es que configuramos con visual studio code el "wait" es para que espere ha cerrar VS(visual studio code) para que se suban los cambios

// COMANDO "GIT INIT" -> este comando crea una carpeta invisible en la ruta que deseas, la carpeta tiene la configuracion del repositorio

// COMANDO "GIT ADD" -> este comando seleccionas el archivo que va ir al area de preaparacion, si quieres subir todo usamos el comando "GIT ADD ."

// COMANDO "GIT COMMIT"-> este comando va despues del anterior y se usa para guardar en el historial de versiones se usa con una breve descripcion o te dira te abrira vscode para que lo añadas desde ahi, asi es como usar COMANDO "GIT COMMIT -m "tu_descripcion"" ->

//COMADNO "GIT RM --CACHE TU_ARCHIVO" -> esto sacara los archivos que no quieras que vayan a preparion, en caso de que no funcione puedes forzar "COMADNO "GIT RM --CACHE -F TU_ARCHIVO"

// COMANDO "GIT RM TU_ARCHIVO"-> al hacer esto eliminaras el archivo o carpeta y lo registra git pero si lo quieres eliminar sin que lo que registre git usa el comando "RM TU_ARCHIVO"

// COMANDO "GIT RESTORE TU_ARCHIVO"-> ten encuenta que esto solo restaurara el archivo si el archivo eliminado fue registrado por git o tuvo una version subida o añadida y si quieres restaura la penultima versison subida usa el comando "GIT RESET --HARD" 

// COMANDO "GIT CHECKOUT TU_ARCHIVO" -> es como un punto de control o guardado si modificas algo y usas este comando podras volver al ultimo checkout

// COMANDO "GIT RESET --SOFT NUMERO_DEL_COMIT"->     este comando se usa para ir a un comit con el numero o valor de id del comit y con reset borra el resot de comits de adelante, o tambien se puede hacer "COMANDO "GIT RESET --SOFT head~4"" y esto se posicionar por detras en la 4 posicion del ultimo comit

// RAMA  QUE SON ?
// las ramas son como un arbol de decicion, en un proyecto no sabes que funciones vas a ir añadiendo por lo que creas una rama o una copia del proyecto para ir añadiendo las nuevas funciones eso seria una rama al haber hecho una copia del proyecto, una cosa importante es que los ramas hijas solo mostran su commits y las del padre

// COMANDO "GIT BRANCH NOMBRE-NUEVA-RAMA"-> esto creara una nueva rama en esta se usa "-" y no "_"
// COMANDO "GIT BRANCH -D NOMBRE-NUEVA-RAMA"-> esto eliminara la una nueva rama pero no puedes estar si borras
// COMANDO "GIT SWITCH NOMBRE-DE-LA-RAMA"-> esto igual te pasa de una rama a otra
// o usar
// COMANDO "GIT CHECKOUT NOMBRE-DE-LA-RAMA"->esto te ayudar a pasar de una rama a otra
// COMANDO "GIT SWITCH -C NOMBRE-LA-NUEVA-RAMA"-> este es mucho mejor porque crear la nueva rama y te posiciona de una
// COMANDO "GIT BRANCH -M ARCHIVO-A-CAMBIAR NUEVO-NOMBRE-DEL-ARCHIVO"-> esto te ayudara a cambiar el nombre de las ramas

// COMO MEZCLAR RAMAS O UNIR 
// COMANDO "GIT  MERGE NOMBRE-RAMA-ACTUAL NOMBRE-LA-OTRA-RAMA-A-UNIR "-> con este linea podemos pasar los modifiaciones de una rama a la principal
// COMANDO "GIT RESET --HARD NUMERO-DEL-COMMIT-DONDE-SE-MEZCLARON"->esto quitara la union de la rama en la principal pero borra el commit de la otra rama.

// si hay conflictos al unir por lo general se da cuando creas una rama y le das commit y en la principal editas y las unes git tiene conflicto para elgir cual de las dos usar, eso aparecera en vscode y te dara las opciones en gris,  mas info en "curso git dalto min 2:06.00"


// COMANDO "GIT REFLOG" -> cuando borrasmos un commit con el comando "git reset" el commit como tal no es que este borrado porque este comando muestra todo los registros, este es como un registro mas global 