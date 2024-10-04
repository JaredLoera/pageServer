const fs = require('fs');
const path = require('path');
const crypto = require('crypto')
const successColor = '\x1b[32m%s\x1b[0m';
const checkSign = '\u{2705}';
const envList = ['development', ''];

// Función para generar una clave secreta
function generateSecretKey(length = 32) {
    return crypto.randomBytes(length).toString('hex');
  }
  
  // Función para generar un IV aleatorio
  function generateIV(length = 16) {
    return crypto.randomBytes(length).toString('hex'); // 16 bytes para el IV
  }

  const secretKey = generateSecretKey();
    const iv = generateIV();
// Generar el contenido de los archivos de entorno para cada ambiente
envList.forEach(en => {
  const envPath = en !== 'local' ? `.${en}` : '';

  // Crear el archivo con APP_KEY e IV
  const envFile = `export const environment = {
    baseUrl: 'https://servertorreon.ddns.net/api/',
    socket: 'https://servertorreon.ddns.net/',
    production: ${en !== 'local'},  // Solo local no es de producción
    appKey: '${secretKey}',
    iv: '${iv}'
  };
`;

  // Definir la ruta donde se guardarán los archivos de entorno
  const targetPath = path.join(__dirname, `src/environments/environment${envPath}.ts`);

  // Escribir el archivo de entorno
  fs.writeFile(targetPath, envFile, (err) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(successColor, `${checkSign} Successfully generated ${en} environment file`);
    }
  });
});