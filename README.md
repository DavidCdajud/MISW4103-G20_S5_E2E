# MISW4103-G20_S5_E2E_CYPRESS
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

## Incidencias:

[issues reportados](https://github.com/DavidCdajud/MISW4103-G20_S5_E2E/issues)

