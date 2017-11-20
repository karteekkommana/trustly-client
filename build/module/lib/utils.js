import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';
// Path helpers
export const readFile = (path) => new Promise((resolve, reject) => fs.readFile(path, 'utf8', function (err, data) {
    if (err)
        return reject(err);
    resolve(data);
}));
let ROOT = path.resolve(__dirname, '..', '..');
export const root = (...args) => path.join(ROOT, ...args);
// Encrypt / Decrypt
export const sign = function (data, key) {
    let signer = crypto.createSign('RSA-SHA1');
    signer.update(data, 'utf8');
    return signer.sign(key, 'base64');
};
export const verify = function (data, signature, key) {
    let verifier = crypto.createVerify('RSA-SHA1');
    verifier.update(data, 'utf8');
    return verifier.verify(key, signature, 'base64');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxFQUFFLE1BQU0sSUFBSSxDQUFBO0FBQ3hCLE9BQU8sS0FBSyxJQUFJLE1BQU0sTUFBTSxDQUFBO0FBQzVCLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFBO0FBRWhDLGVBQWU7QUFDZixNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFZLEtBQ2pDLElBQUksT0FBTyxDQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sS0FDekIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVMsR0FBRyxFQUFFLElBQUk7SUFDeEMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUUzQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDakIsQ0FBQyxDQUFDLENBQ0wsQ0FBQTtBQUVMLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtBQUU5QyxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksS0FDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQTtBQUU1QixvQkFBb0I7QUFDcEIsTUFBTSxDQUFDLE1BQU0sSUFBSSxHQUFHLFVBQVMsSUFBSSxFQUFFLEdBQUc7SUFDbEMsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUMxQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUMzQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUE7QUFDckMsQ0FBQyxDQUFBO0FBRUQsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFHLFVBQVMsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHO0lBQy9DLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDOUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFFN0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQTtBQUNwRCxDQUFDLENBQUEifQ==