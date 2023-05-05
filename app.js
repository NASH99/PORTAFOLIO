import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;


// Configuración del motor de plantillas hbs
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Configuración de la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


