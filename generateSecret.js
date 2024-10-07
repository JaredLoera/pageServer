const fs = require('fs');
const path = require('path');
const crypto = require('crypto')
const successColor = '\x1b[32m%s\x1b[0m';
const checkSign = '\u{2705}';
const envList = ['development', 'production'];

function generateSecretKey(length = 32) {
    return crypto.randomBytes(length).toString('hex');
  }
  
  // Función para generar un IV aleatorio
  function generateIV(length = 16) {
    return crypto.randomBytes(length).toString('hex'); 
  }

  const secretKey = generateSecretKey();
    const iv = generateIV();
envList.forEach(en => {
  const envPath = en === 'production' ? '' : `.${en}`;
  const baseUrl = en === 'development' ? 'http://localhost:3333/api/' : 'https://servertorreon.ddns.net/api/';
  const socket = en === 'development' ? 'http://localhost:3000/' : 'https://servertorreon.ddns.net/';

  const envFile = `export const environment = {
    baseUrl: '${baseUrl}',
    socket: '${socket}',
    production: ${en !== 'local'},  // Solo local no es de producción
    appKey: '${secretKey}',
    iv: '${iv}'
  };
`;
  const targetDir = path.join(__dirname, 'src/environments');

  const targetPath = path.join(__dirname, `src/environments/environment${envPath}.ts`);

  if(!(fs.existsSync(targetDir))){
    fs.mkdirSync(path.join(__dirname, 'src/environments'));
  }
  fs.writeFile(targetPath, envFile, (err) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(successColor, `${checkSign} Successfully generated ${en} environment file`);
    }
  });
});