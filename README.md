# Maulhardt Restoration Project

Link to Análisis 2 website: https://gabrieldiem.github.io/maulhardt-restoration/pages/analisis-2

Link to root website: https://gabrieldiem.github.io/maulhardt-restoration/

The objective of this project is to restore a working copy of the webpages made by Martin Maulhardt, with the sole purpose of them being available to students.

The original ones are down in some way or another:

- http://analisis2.com/
- http://analisis3.com/
- http://matematicadiscreta.com/

## Dependencies

The project is made with this core technologies, which will be installed locally after installing them with `npm install`:

| NPM Package      | Version |
| ---------------- | ------- |
| parcel           | 2.8.2   |
| react            | 18.2.0  |
| react-dom        | 18.2.0  |
| react-router-dom | 6.8.0   |
| bootstrap        | 5.2.3   |
| popper.js        | 1.16.1  |
| dotenv           | 16.0.3  |

There are other dependencies that must be installed separately in order to run some scripts defined in `package.json`, they can be installed globally or locally:

- [http-server](https://www.npmjs.com/package/http-server): used to run the necessary local servers needed for some scripts. The version used and tested is the `14.1.1` so it can be installed running: `npm install http-server@14.1.1`

- [Concurrently](https://www.npmjs.com/package/concurrently): used to run the parcel watcher and an http server simultaneously. The version used and tested is the `7.6.0` so it can be installed running: `npm install concurrently@7.6.0`


## Ideas Section

- Colocar páginas de las 3 materias al principio (AM2, AM3 y MD)
- En cada una replicar la pagina

## Useful resources

- [Linking Parcel and Bootstrap](https://en.parceljs.org/recipes.html)
