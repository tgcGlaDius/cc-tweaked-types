/** @noSelfInFile */
declare namespace rednet {
	var CHANNEL_BROADCAST: 65535;

	var CHANNEL_REPEAT: 65533;

	type computerID = number;

	type rednetMessage = any;

	function open(modem: string): void;

	function close(modem?: string): void;

	function isOpen(modem?: string): boolean;

	function send(
		nRecipient: computerID,
		message: rednetMessage,
		sProtocol?: string
	): boolean;

	function broadcast(message: rednetMessage, nTimeout?: number): void;

	function receive(
		sProtocolFilter?: string,
		nTimeout?: number
	):
		| [computer: computerID, message: rednetMessage, protocol: string | null]
		| null;

	function host(sProtocol: string, sHostname: string): void;

	function unhost(sProtocol: string): void;

	function lookup(sProtocol: string): computerID[] | null;

	function lookup(sProtocol: string, sHostname: string): computerID | null;

	function run(): void;
}
