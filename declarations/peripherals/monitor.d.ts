/** @noSelfInFile */
declare class monitorPeripheral extends Redirect {
	setTextScale(scale: number): void;

	getTextScale(): number;

	write(text: string): void;

	scroll(y: number): void;

	getCursorPos(): LuaMultiReturn<[x: number, y: number]>;

	setCursorPos(x: number, y: number): void;

	getCursorBlink(): boolean;

	setCursorBlink(blink: boolean): void;

	getSize(): LuaMultiReturn<[width: number, height: number]>;

	clear(): void;

	clearLine(): void;

	getTextColour(): colors.ColorSet;

	setTextColour(colour: colors.ColorSet): void;

	getBackgroundColour(): colors.ColorSet;

	setBackgroundColour(colour: colors.ColorSet): void;

	isColour(): boolean;

	blit(text: string, textColour: string, backgroundColour: string): void;

	setPaletteColour(index: number, colour: number): void;

	getPaletteColour(colour: number): colors.UnpackedRGB;
}
