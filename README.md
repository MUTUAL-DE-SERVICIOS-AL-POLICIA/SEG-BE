# seg-be

## Instalación de dependencias con yarn
```
yarn install
```

### Compila y recarga en hot para desarrollo
```
yarn serve
```

### Compila y minimiza para producción
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# seg-be - dockerizar el proyecto
### Construir la imagen Docker, desde la raíz del proyecto
```
docker build -t vue2-app .

```
### Ejecutar para levantar el contenedor 
```
docker run -p 8080:80 vue2-app
```
Accede desde el navegador en: http://localhost:8080

### (Opcional) modifica el puerto en docker-compose.yml
```
version: '3'
services:
  vue-app:
    build: .
    ports:
      - "8085:80"
```
### Ejecuta para levantar el contenedor (El flag -d lo ejecuta en segundo plano.)
```
docker-compose up --build -d
```
Accede desde el navegador en: http://localhost:8580