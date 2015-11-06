#!/usr/bin/env node
var StellarBase = require('stellar-base');
var Keypair = require('stellar-lib/src/js/ripple/keypair').KeyPair;

var address = process.argv[2];

if (!StellarBase.Account.isValidAddress(address)) {
	console.error('Not valid stellar-core address.');
	process.exit(-1);
}

var keypair = StellarBase.Keypair.fromAddress(address);
var publicKey = keypair.rawPublicKey();

var oldKeypair = new Keypair();
oldKeypair._pubkey = publicKey;
console.log(oldKeypair.get_address().to_json());
