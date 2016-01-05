function GenerateRSA() {

	var key = document.getElementById('key').value;
	var bit = document.getElementById('byte').value;

	var RSAkey = cryptico.generateRSAKey(key, bit);
	var PublicKey = cryptico.publicKeyString(RSAkey); 
	
	document.getElementById('Public').innerHTML = PublicKey;
}

function EncryptMessage() {

	var message = document.getElementById('message').value;

	var key = document.getElementById('Public').innerHTML;
	
	var EncryptionResult = cryptico.encrypt(message, key);
	
	if (EncryptionResult.status == "success") document.getElementById('cipher').innerHTML = EncryptionResult.cipher;
	else document.getElementById('cipher').innerHTML = "Geçersiz public key";

}

function DecryptMessage() {

	var key = document.getElementById('encryptKey').value;
	var message = document.getElementById('encryptedText').value;
	var bit = document.getElementById('byte').value;

	var RSAkey = cryptico.generateRSAKey(key, bit);

	var DecryptionResult = cryptico.decrypt(message, RSAkey);

	if (DecryptionResult.status == "success") document.getElementById('decrypted').innerHTML = DecryptionResult.plaintext;
	else document.getElementById('decrypted').innerHTML = "Hatalı anahtar";

	
}