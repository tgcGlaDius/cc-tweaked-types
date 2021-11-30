/** @noSelfInFile */
declare class drivePeripheral {
	isDiskPresent(): boolean;

	getDiskLabel(): string | null;

	setDiskLabel(label?: string): string | null;

	hasData(): boolean;

	getMountPath(): string | null;

	hasAudio(): boolean;

	getAudioTitle(): string | null | false;

	playAudio(): void;

	stopAudio(): void;

	ejectDisk(): void;

	getDiskID(): number | null;
}
