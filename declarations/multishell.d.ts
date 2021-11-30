/** @noSelfInFile */
declare namespace multishell {
	function getFocus(): number;

	function setFocus(n: number): boolean;

	function getTitle(n: number): string | null;

	function setTitle(n: number, title: string): void;

	function getCurrent(): number;

	function launch(
		tProgramEnv: object,
		sProgramPath: string,
		...args: any[]
	): number;

	function getCount(): number;
}
