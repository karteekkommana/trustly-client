"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
// Path helpers
exports.readFile = (path) => new Promise((resolve, reject) => fs.readFile(path, 'utf8', function (err, data) {
    if (err)
        return reject(err);
    resolve(data);
}));
let ROOT = path.resolve(__dirname, '..', '..');
exports.root = (...args) => path.join(ROOT, ...args);
// Encrypt / Decrypt
exports.sign = function (data, key) {
    let signer = crypto.createSign('RSA-SHA1');
    signer.update(data, 'utf8');
    return signer.sign(key, 'base64');
};
exports.verify = function (data, signature, key) {
    let verifier = crypto.createVerify('RSA-SHA1');
    verifier.update(data, 'utf8');
    return verifier.verify(key, signature, 'base64');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQXdCO0FBQ3hCLDZCQUE0QjtBQUM1QixpQ0FBZ0M7QUFFaEMsZUFBZTtBQUNGLFFBQUEsUUFBUSxHQUFHLENBQUMsSUFBWSxLQUNqQyxJQUFJLE9BQU8sQ0FBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEtBQ3pCLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFTLEdBQUcsRUFBRSxJQUFJO0lBQ3hDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7SUFFM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ2pCLENBQUMsQ0FBQyxDQUNMLENBQUE7QUFFTCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFFakMsUUFBQSxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksS0FDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQTtBQUU1QixvQkFBb0I7QUFDUCxRQUFBLElBQUksR0FBRyxVQUFTLElBQUksRUFBRSxHQUFHO0lBQ2xDLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDMUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0FBQ3JDLENBQUMsQ0FBQTtBQUVZLFFBQUEsTUFBTSxHQUFHLFVBQVMsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHO0lBQy9DLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDOUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFFN0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQTtBQUNwRCxDQUFDLENBQUEifQ==