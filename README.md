# MISW4103-G20_S5_E2E_CYPRESS

##Video presentación

[Video](https://uniandes-my.sharepoint.com/:v:/g/personal/d_caycedod_uniandes_edu_co/Edzy5jMAR9ZIqr0SfEPWh78BXHstLFql8uRMxQnqfk3N3A?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=kIdga1)

###Informe de resultados Resemble Js

[Informe Resemble Js](https://github.com/DavidCdajud/MISW4103-G20_S5_E2E/blob/develop/cypress/reporte_resemblejs/informe_resultados.html)

###Informe de resultados Backstop Js

[Informe Backstop Js](https://github.com/DavidCdajud/MISW4103-G20_S5_E2E/blob/develop/backstop_data/html_report/index.html)

## Incidencias:

[issues reportados](https://github.com/DavidCdajud/MISW4103-G20_S5_E2E/issues)

## Wiki 

[Wiki](https://github.com/DavidCdajud/MISW4103-G20_S5_E2E/wiki)



## Prerrequisitos:

Node.js: v18.18.1
  
Ghost v3.42
  
Ghost v5.68

## Set up:

docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.42 ghost:3.42

npm install

npm install ghost-cli@latest

mkdir ghost5.68

cd ghost5.68

ghost install local 5.68

ghost start

npm install -g cypress

cypress open

npm install cypress --save-dev

npm install cypress-xpath@2.0.1 --save-dev

open the e2e test and run it

## Set up Ghost

Nombre ambiente: Pruebas automatizadas

correo admin: pruebas@correo.com

contraseña: abcde12345



