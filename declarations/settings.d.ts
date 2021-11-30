/** @noSelfInFile */
declare namespace settings {
	type settingDetails = {
		description?: string;
		default?: any;
		type?: string;
		value?: any;
	};

	function define(name: string, options?: settingDetails): void;

	function undefine(name: string): void;

	function set(name: string, value: any): void;

	function get(name: string, defaultValue?: any): any;

	function getDetails(name: string): settingDetails;

	function unset(name: string): void;

	function clear(): void;

	function getNames(): string[];

	function load(sPath?: string): boolean;

	function save(sPath?: string): boolean;
}
