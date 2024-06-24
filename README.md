## Clonar el proyecto

Primero, debes ubicar la carpeta donde quieres clonar este repositorio en tu consola de comandos y aplicar el siguiente comando

```
git clone https://github.com/brayanyepesc/groween.git

```

Una vez descargado el proyecto, ábrelo en tu editor de código e instala las dependencias

```
npm install

```

Luego, copia el archivo .env.example a un archivo en la misma ruta .env y agrega: (usando xampp, antes debes iniciar APACHE y MYSQL)

USER: usuario
PORT: puerto
NAME: nombre de la base de datos

```
DATABASE_URL="mysql://USER@localhost:PORT/NAME"

```

y ejecuta el siguiente comando

```
npx prisma db push

```
