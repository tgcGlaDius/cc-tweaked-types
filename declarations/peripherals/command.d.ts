/** @noSelfInFile */
declare class commandPeripheral {
	getCommand(): string;

	setCommand(command: string): void;

	runCommand(): LuaMultiReturn<[boolean, string | null]>;
}
