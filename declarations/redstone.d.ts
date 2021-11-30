/** @noSelfInFile */
declare namespace redstone {
	type Side = 'top' | 'bottom' | 'left' | 'right' | 'front' | 'back';

	function getSides(): Side[];

	function setOutput(side: Side, on: boolean): void;

	function getOutput(side: Side): boolean;

	function getInput(side: Side): boolean;

	function setAnalogOutput(side: Side, value: number): void;

	function getAnalogOutput(side: Side): number;

	function getAnalogInput(side: Side): number;

	function setBundledOutput(side: Side, output: colors.ColorSet): void;

	function getBundledOutput(side: Side): number;

	function getBundledInput(side: Side): number;

	function testBundledInput(side: Side, mask: number): boolean;
}
