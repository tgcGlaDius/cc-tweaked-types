/** @noSelfInFile */
declare namespace help {
	function path(): string;

	function setPath(newPath: string): void;

	function lookup(topic: string): string | null;

	function topics(): string[];

	function completeTopic(prefix: string): string[];
}
