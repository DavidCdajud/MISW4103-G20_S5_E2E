# MISW4103-G20_S7_E2E_CYPRESS
## Entrega Semana 6
### Video presentación

[Video](https://uniandes-my.sharepoint.com/:v:/g/personal/d_caycedod_uniandes_edu_co/Edzy5jMAR9ZIqr0SfEPWh78BXHstLFql8uRMxQnqfk3N3A?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=kIdga1)

### Informe de resultados Resemble Js

[Informe Resemble Js](https://github.com/DavidCdajud/MISW4103-G20_S5_E2E/blob/develop/cypress/reporte_resemblejs/informe_resultados.html)

### Informe de resultados Backstop Js

[Informe Backstop Js](https://github.com/DavidCdajud/MISW4103-G20_S5_E2E/blob/develop/backstop_data/html_report/index.html)

### Incidencias:

[issues reportados](https://github.com/DavidCdajud/MISW4103-G20_S5_E2E/issues)

### Wiki 

[Wiki](https://github.com/DavidCdajud/MISW4103-G20_S5_E2E/wiki)


## Set up

### Prerrequisitos:

Node.js: v18.18.1
  
Ghost v3.42
  
Ghost v5.68

### CMD coding:

```
docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.42 ghost:3.42

npm install

npm install ghost-cli@latest

mkdir ghost5.68

cd ghost5.68

ghost install 5.68 --local

ghost start

npm install -g cypress

cypress open

npm install cypress --save-dev

npm install cypress-xpath@2.0.1 --save-dev
```

Open the e2e test and run it


### Set up Ghost

**Nombre ambiente:** Pruebas automatizadas

**Correo admin:** pruebas@correo.com

**Contraseña:** abcde12345

### Instalación de Backstop.js
```
npm install -g backstopjs

backstop init

backstop test

backstop approve

backstop test
```

### Instalación de Resemble.js

```
npm install -g resemblejs

node index.js

```
### Instalación de Faker

```
npm install faker --save-dev
```

### CMD coding para v3.42 sin docker
```
npm install

npm install ghost-cli@latest

mkdir ghost5.68

cd ghost5.68

ghost install 3.42 --local

ghost start

npm install -g cypress

cypress open

npm install cypress --save-dev

npm install cypress-xpath@2.0.1 --save-dev
```

Open the e2e test and run it

# Repositorio Kraken
https://github.com/jhosalarcon/MISW4103-G20_S5_Kraken_E2E

# Entrega Semana 7

Version de Ghost usada 5.68

## Enlaces Importantes

- **Estrategia de generación de Datos junto documentacion de los scripts**:  
  [https://github.com/DavidCdajud/MISW4103-G20_S5_E2E/wiki/07.-Generaci%C3%B3n-de-datos](https://github.com/DavidCdajud/MISW4103-G20_S5_E2E/wiki/07.-Generaci%C3%B3n-de-datos)

- **Definición Escenarios de Prueba**:  
  [https://github.com/DavidCdajud/MISW4103-G20_S5_E2E/wiki/08.-Escenarios](https://github.com/DavidCdajud/MISW4103-G20_S5_E2E/wiki/08.-Escenarios)

- **Información General de la Wikipedia**:  
  [https://github.com/DavidCdajud/MISW4103-G20_S5_E2E/wiki](https://github.com/DavidCdajud/MISW4103-G20_S5_E2E/wiki)

- **Scripts de pruebas elaborados (v5.68)**:  
  [https://github.com/DavidCdajud/MISW4103-G20_S5_E2E/tree/main/cypress/e2e/v5.68](https://github.com/DavidCdajud/MISW4103-G20_S5_E2E/tree/main/cypress/e2e/v5.68)

## Detalles de Acceso

- **Email**: `pruebas@correo.com`
- **Contraseña**: `abcde12345`

## Ejecución de pruebas 

- cypress open
- Seleccionar las pruebas a ejecutar

# Entrega Semana 8

- **Estrategia de pruebas**
  https://uniandes-my.sharepoint.com/:w:/g/personal/jd_fajardor1_uniandes_edu_co/EeP0mywNIABGi_wpKPyN6E8B2Qy8df7xuQqvsmbZKQeKOQ?e=SCeiHJ

- **Inventario de pruebas manuales**
  https://uniandes-my.sharepoint.com/:x:/g/personal/jd_fajardor1_uniandes_edu_co/EbSDXLU2UqFEpTOVu-zj6-kBGHIgt2bjgXI0nh99sjnN7Q?e=K4xQyk

- **Pruebas E2E**

  - Configuración de impresión de imágenes:
    - [Configuración en `cypress.config.js`](https://github.com/DavidCdajud/MISW4103-G20_S5_E2E/blob/develop/cypress.config.js)
      - Se puede verificar usando la variable `printImage: 'true' o 'false'` para validar la ejecución de imágenes.

  - Scripts de pruebas:
    - [e11_dashboard_review.cy.js](https://github.com/DavidCdajud/MISW4103-G20_S5_E2E/blob/develop/cypress/e2e/v5.68/e11_dashboard_review.cy.js)
    - [e12_page_creation.cy.js](https://github.com/DavidCdajud/MISW4103-G20_S5_E2E/blob/develop/cypress/e2e/v5.68/e12_page_creation.cy.js)
    - [e13_create_draft.cy.js](https://github.com/DavidCdajud/MISW4103-G20_S5_E2E/blob/develop/cypress/e2e/v5.68/e13_create_draft.cy.js)
    - [e14_create_tag.cy.js](https://github.com/DavidCdajud/MISW4103-G20_S5_E2E/blob/develop/cypress/e2e/v5.68/e14_create_tag.cy.js)
    - [e15_theme_verification.cy.js](https://github.com/DavidCdajud/MISW4103-G20_S5_E2E/blob/develop/cypress/e2e/v5.68/e15_theme_verification.cy.js)

  - Ejecución de pruebas en diferentes navegadores:
    - **Electron**:
      ```
      npx cypress run --browser electron --spec "cypress/e2e/v5.68/e11_dashboard_review.cy.js,cypress/e2e/v5.68/e12_page_creation.cy.js,cypress/e2e/v5.68/e13_create_draft.cy.js,cypress/e2e/v5.68/e14_create_tag.cy.js,cypress/e2e/v5.68/e15_theme_verification.cy.js"
      ```
      - [Log de Electron](https://github.com/DavidCdajud/MISW4103-G20_S5_E2E/blob/develop/pruebase2emultiplesnavegadores/log-electron.txt)

    - **Firefox**:
      ```
      npx cypress run --browser firefox --spec "cypress/e2e/v5.68/e11_dashboard_review.cy.js,cypress/e2e/v5.68/e12_page_creation.cy.js,cypress/e2e/v5.68/e13_create_draft.cy.js,cypress/e2e/v5.68/e14_create_tag.cy.js,cypress/e2e/v5.68/e15_theme_verification.cy.js"
      ```
      - [Log de Firefox](https://github.com/DavidCdajud/MISW4103-G20_S5_E2E/blob/develop/pruebase2emultiplesnavegadores/log-firefox.txt)

    - **Chrome**:
      ```
      npx cypress run --browser chrome --spec "cypress/e2e/v5.68/e11_dashboard_review.cy.js, cypress/e2e/v5.68/e12_page_creation.cy.js, cypress/e2e/v5.68/e13_create_draft.cy.js, cypress/e2e/v5.68/e14_create_tag.cy.js, cypress/e2e/v5.68/e15_theme_verification.cy.js"
      ```
      - [Log de Chrome](https://github.com/DavidCdajud/MISW4103-G20_S5_E2E/blob/develop/pruebase2emultiplesnavegadores/log-chrome.txt)

  - Reporte de resultados:
    - [Reporte en GitHub](https://github.com/DavidCdajud/MISW4103-G20_S5_E2E/tree/develop/pruebase2emultiplesnavegadores)
