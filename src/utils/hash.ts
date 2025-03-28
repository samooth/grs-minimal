import crypto from "crypto";
import { groestl512 } from 'hashes-grs/groestl512'

function grs512(buf: Buffer){
  return Buffer.from(groestl512(buf))
}

function grs512d(buf: Buffer){
  return Buffer.from(groestl512(groestl512(buf)))
}
function sha256(buf: Buffer) {
  return crypto.createHash("sha256").update(buf).digest();
}

function sha256sha256(buf: Buffer) {
  return sha256(sha256(buf));
}

function ripemd160(buf: Buffer) {
  return crypto.createHash("ripemd160").update(buf).digest();
}

function sha256ripemd160(buf: Buffer) {
  return ripemd160(sha256(buf));
}

const Hash = {
  sha256,
  sha256sha256,
  ripemd160,
  sha256ripemd160,
  grs512,
  grs512d
};

export default Hash;
