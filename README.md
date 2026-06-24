# 📊 Módulo de Gestión de Datos (JS Intermedio II)

Sistema CRUD desarrollado como parte de la **Actividad 10 de JavaScript Intermedio II**, enfocado en el procesamiento, transformación y visualización de datos utilizando **Node.js**, **JavaScript Moderno** y **Tailwind CSS**.

El proyecto demuestra cómo los datos pueden ser procesados en el backend para posteriormente ser presentados en una interfaz web moderna e interactiva.

---

## 📌 Descripción del Proyecto

Este proyecto implementa un flujo completo de gestión de datos dividido en dos etapas principales:

1. **Procesamiento de datos en consola mediante Node.js.**
2. **Visualización y administración de información a través de un Dashboard Web.**

Durante el desarrollo se aplicaron conceptos avanzados de JavaScript relacionados con manipulación de arreglos, manejo de archivos, programación funcional e inmutabilidad.

---

## 🚀 Funcionalidades

### ⚙️ Procesamiento en Consola (Node.js)

El sistema realiza diversas operaciones sobre archivos de datos:

#### 📂 Lectura y Parsing de Archivos

* Lectura de archivos CSV mediante el módulo `fs`.
* Conversión de texto en estructuras de datos manipulables.

#### 🧹 Limpieza Inteligente de Datos

* Eliminación de registros vacíos.
* Filtrado de información corrupta usando `.filter()`.

#### 🔄 Normalización de Información

* Transformación de datos utilizando `.map()`.
* Conversión de nombres y campos a formatos consistentes.

#### 💾 Optimización de Almacenamiento

* Generación de respaldos binarios.
* Manipulación de Buffers para mejorar la eficiencia del almacenamiento.

#### 📋 Resumen de Resultados

* Presentación de datos procesados mediante `console.table()`.
* Visualización clara de registros válidos y resultados finales.

---

### 🌐 Dashboard Web

Una vez procesados los datos, estos son mostrados en una interfaz visual moderna.

#### 🎨 Diseño Responsivo

* Construido con Tailwind CSS.
* Adaptable a dispositivos móviles y escritorio.

#### 📄 Renderizado Dinámico

* Generación de contenido HTML mediante Template Literals.
* Sin dependencias externas de renderizado.

#### 🔍 Buscador en Tiempo Real

* Localización rápida de registros utilizando `.find()`.

#### 📈 Estadísticas Automáticas

* Cálculo dinámico de métricas utilizando `.reduce()`.

#### 🗂️ Gestión CRUD

* Creación de registros.
* Consulta de información.
* Actualización de datos.
* Eliminación de registros.

---

## 🧠 Conceptos de JavaScript Aplicados

### ♻️ Inmutabilidad

Uso del Spread Operator (`...`) para actualizar estructuras de datos sin modificar los originales.

### 📦 Desestructuración

Extracción limpia de propiedades de objetos y arreglos.

### 🔗 Métodos de Arreglos

Implementación práctica de:

* `.map()`
* `.filter()`
* `.find()`
* `.reduce()`

### 💽 Buffers y Serialización

Manipulación de datos binarios para almacenamiento optimizado.

### 🏗️ Programación Modular

Separación de responsabilidades para mejorar la escalabilidad y mantenimiento del código.

---

## 🛠️ Tecnologías Utilizadas

### Backend

* Node.js
* File System (`fs`)
* Buffers

### Frontend

* HTML5
* Tailwind CSS
* JavaScript ES6+

### Herramientas de Desarrollo

* Visual Studio Code
* Git
* GitHub

---

## 📂 Estructura del Proyecto

```bash
Modulo-Gestion-Datos/
│
├── data/
│   ├── registros.csv
│   └── respaldo.bin
│
├── src/
│   ├── app.js
│   ├── crud.js
│   ├── parser.js
│   └── utils.js
│
├── dashboard/
│   ├── index.html
│   ├── styles.css
│   └── dashboard.js
│
└── README.md
```

> La estructura puede variar según la organización final del proyecto.

---

## 🎯 Objetivos Académicos

* Aplicar conceptos de JavaScript Intermedio II.
* Implementar un sistema CRUD funcional.
* Procesar y transformar información desde archivos externos.
* Utilizar programación funcional para manipular datos.
* Construir interfaces modernas con Tailwind CSS.
* Comprender el uso de Buffers y serialización binaria.

---

## 📈 Resultados Obtenidos

✅ Procesamiento eficiente de datos CSV.

✅ Limpieza y normalización automática de registros.

✅ Visualización dinámica de información.

✅ Implementación de búsqueda en tiempo real.

✅ Aplicación de principios de inmutabilidad.

✅ Uso práctico de métodos avanzados de JavaScript.

---

## 👩‍💻 Desarrollado por

**Sharith**
**Aprendiz ADSO – SENA**
**JavaScript Intermedio II – Actividad 10**

---

⭐ Si este proyecto te resulta interesante, no olvides dejar una estrella en el repositorio.
