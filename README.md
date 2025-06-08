# Happy y Unhappy paths del proyecto Sprint 2
# Happy Path
1. Se abre el modal al seleccionar “cerrado”
	•	Precondición: Hay una publicación con estado distinto de "cerrado".
	•	Acción: Cambiar el estado de la publicación a "cerrado".
	•	Resultado esperado: El modal con el texto "Deja una Reseña" aparece en pantalla.

2. Se puede escribir una reseña
	•	Acción: Escribir en el textarea dentro del modal.
	•	Resultado esperado: El valor del textarea se actualiza correctamente y es legible en la UI.

3. Se puede seleccionar la calificación (slider)
	•	Acción: Mover el input range de 3 a otro valor.
	•	Resultado esperado: Se actualiza el valor visible de estrellas, por ejemplo: "Valor: 4 estrellas".

4. Se envía la reseña correctamente
	•	Acción: Click en el botón "Enviar Reseña".
	•	Resultado esperado:
	•	Se llama a ClienteService.enviarReseña con los datos correctos.
	•	Se actualiza la publicación a estado "cerrado".
	•	Se oculta el modal.

5. Cancelar cierra el modal sin guardar
	•	Acción: Click en el botón "Cancelar".
	•	Resultado esperado: El modal desaparece sin hacer ninguna llamada a la API.


# UNHAPPY PATHS

1. Fallo en el envío de la reseña
	•	Acción: ClienteService.enviarReseña lanza un error (mock).
	•	Resultado esperado: Se muestra un mensaje de error como "Error al enviar la reseña." y el modal no se cierra.

2. El usuario intenta enviar la reseña sin escribir comentario (los comentarios son obligatorios)
	•	Acción: Dejar el textarea vacío y hacer click en “Enviar Reseña”.
	•	Resultado esperado: No se llama al servicio y opcionalmente se muestra un mensaje de validación.

3. Slider fuera de rango
	•	Acción: Forzar programáticamente un valor fuera del rango del slider (ej. 10).
	•	Resultado esperado: La aplicación no rompe; se puede normalizar el valor a 5 o ignorarlo.


# Laboratorio 04: Pruebas Unitarias con Jest en React

Este laboratorio tiene como objetivo proporcionar una introducción práctica a las pruebas unitarias en aplicaciones React utilizando Jest y React Testing Library.

## Aplicación Todo List

La aplicación desarrollada es una lista de tareas (Todo List) con las siguientes funcionalidades:

- Añadir nuevas tareas
- Marcar tareas como completadas
- Eliminar tareas
- Filtrar tareas por estado (todas, activas, completadas)
- Ver estadísticas de tareas
- Borrar todas las tareas completadas

## Estructura del Proyecto

```
app/
├── components/
│   ├── Todo.tsx               # Componente principal que integra todos los demás
│   ├── TodoForm.tsx           # Formulario para añadir nuevas tareas
│   ├── TodoItem.tsx           # Componente individual para cada tarea
│   ├── TodoList.tsx           # Lista de tareas
│   ├── TodoFilter.tsx         # Filtros para las tareas
│   ├── TodoStats.tsx          # Estadísticas de tareas
│   └── __tests__/             # Directorio de pruebas
│       ├── TodoItem.test.tsx  # Pruebas para TodoItem
│       ├── TodoForm.test.tsx  # Pruebas para TodoForm
│       └── TodoList.test.tsx  # Pruebas para TodoList
├── page.tsx                   # Página principal
└── layout.tsx                 # Layout de la aplicación
```

## Instrucciones del Laboratorio

En este laboratorio, exploraremos cómo escribir pruebas unitarias efectivas siguiendo el patrón **Prepare, Execute and Validate**:

1. **Prepare**: Configurar el entorno de prueba y los datos necesarios
2. **Execute**: Realizar la acción que queremos probar
3. **Validate**: Verificar que el resultado es el esperado

### Ejercicios

#### Ejercicio 1: Completar prueba de TodoItem

Completa el test para verificar que el componente `TodoItem` muestra correctamente el texto de una tarea con caracteres especiales.

Archivo: `app/components/__tests__/TodoItem.test.tsx`

#### Ejercicio 2: Completar prueba de TodoForm

Completa el test para verificar que el componente `TodoForm` maneja correctamente la entrada de texto con espacios al inicio o final.

Archivo: `app/components/__tests__/TodoForm.test.tsx`

#### Ejercicio 3: Completar prueba de TodoList

Completa el test para verificar que el componente `TodoList` pasa correctamente las funciones onToggle y onDelete a cada TodoItem.

Archivo: `app/components/__tests__/TodoList.test.tsx`

## Casos de Prueba

En las pruebas existentes, podrás encontrar ejemplos de:

- **Happy Path**: Pruebas que verifican el comportamiento correcto cuando todo funciona como se espera
- **Unhappy Path**: Pruebas que verifican el comportamiento cuando hay situaciones inesperadas o errores

## Ejecución de Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando:

```bash
npm test
```

Para ejecutar las pruebas en modo observador (útil durante el desarrollo):

```bash
npm run test:watch
```

## Recursos Adicionales

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest DOM Testing Library](https://github.com/testing-library/jest-dom)
