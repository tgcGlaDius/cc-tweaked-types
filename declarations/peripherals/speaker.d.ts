/** @noSelfInFile */
declare class speakerPeripheral {
	/*
playSound(name [, volume [, pitch]])	Plays a sound through the speaker.
playNote(name [, volume [, pitch]])	Plays a note block note through the speaker.
	*/
	playSound(name: string, volume?: number, pitch?: number): void;
	playNote(name: string, volume?: number, pitch?: number): void;
}
