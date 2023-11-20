# MISW4103-G20_S5_E2E_CYPRESS

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

