/** @noSelfInFile */
declare namespace disk {
	function isPresent(name: string): boolean;

	function getLabel(name: string): string | null;

	function setLabel(name: string, label: string): void;

	function hasData(name: string): boolean;

	function getMountPath(name: string): string | null;

	function hasAudio(name: string): boolean;

	function getAudioTitle(name: string): string | false | null;

	function playAudio(name: string): void;

	function stopAudio(name: string): void;

	function eject(name: string): void;

	function getID(name: string): string | null;
}
