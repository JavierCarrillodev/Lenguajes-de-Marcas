# APRENDIENDO SASS

## ¿Qué es sass?

#### Sass (Syntactically Awesome Stylesheets) es una extensión de CSS que añade funcionalidades potentes y eficaces para hacer que el desarrollo de hojas de estilo sea más organizado, eficiente y fácil de mantener. En este repositorio, utilizamos Sass para mejorar el proceso de desarrollo Frontend.

## ¿Por qué utilizar Sass?

### El uso de Sass en el desarrollo Frontend puede que nos ayude a acelerar el proceso y ofrecer numerosas ventajas. A continuación, se detallan algunos de los motivos principales por los cuales Sass puede ser muy beneficioso para los desarrolladores Frontend:

### 1. **Mejor Organización del Código**

Sass permite dividir los archivos CSS en partes más pequeñas y modulares mediante el uso de "partials". Esto facilita el mantenimiento del código y la colaboración en proyectos grandes, ya que los desarrolladores pueden trabajar en diferentes partes del archivo CSS sin que haya conflictos o complicaciones. Los archivos parciales (`_partial.scss`) se pueden importar en un archivo principal, lo que mejora la organización.

Ejemplo:
```scss
// _variables.scss
$primary-color: #333;

// _header.scss
header {
  background-color: $primary-color;
}

// styles.scss
@import 'variables';
@import 'header';
