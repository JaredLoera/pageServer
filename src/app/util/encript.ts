import * as CryptoJS from 'crypto-js';
import { environment } from '../../environments/environment';


export class Encript {
  private static key = CryptoJS.enc.Utf8.parse(environment.appKey);
    private static iv = CryptoJS.enc.Utf8.parse(environment.iv);
    
    private static generateRandomIV(): string {
        return CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Hex);
    }

    static encrypt(data: string): string {
     const iv = CryptoJS.enc.Hex.parse(this.generateRandomIV());
    const encrypted = CryptoJS.AES.encrypt(data, this.key, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });

    // Devolver el IV concatenado con el texto encriptado
    return iv.toString(CryptoJS.enc.Hex) + ':' + encrypted.toString();
    }

    static decrypt(data: string): string {
         // Dividir el texto encriptado para obtener el IV y el texto cifrado
    const parts = data.split(':');
    const iv = CryptoJS.enc.Hex.parse(parts.shift()!);
    const encryptedText = parts.join(':');

    const decrypted = CryptoJS.AES.decrypt(encryptedText, this.key, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });

    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}