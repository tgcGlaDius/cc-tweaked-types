/** @noSelfInFile */
declare namespace peripheral {
	type wrappedPeripheral =
		| commandPeripheral
		| computerPeripheral
		| drivePeripheral
		| modemPeripheral
		| monitorPeripheral
		| printerPeripheral
		| speakerPeripheral
		| energyStoragePeripheral
		| fluidStoragePeripheral
		| itemStoragePeripheral;

	function getNames(): string[];

	function isPresent(name: string): boolean;

	function getType(peripheral: string | wrappedPeripheral): string | null;

	function getMethods(name: string): string[];

	function getName(peripheral: wrappedPeripheral): string;

	function call(name: string, method: string, ...args: any[]): [...any[]];

	function wrap(name: string): wrappedPeripheral;

	function find(
		type: string,
		filter: (name: string, wrapped: wrappedPeripheral) => boolean
	): LuaMultiReturn<wrappedPeripheral[]>;
}
