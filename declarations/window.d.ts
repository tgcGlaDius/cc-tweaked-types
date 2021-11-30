/** @noSelfInFile */
declare namespace window {
	function create(
		parent: Redirect,
		nX: number,
		nY: number,
		nWidth: number,
		nHeight: number,
		bStartVisible?: boolean
	): Window;
}

declare class Window extends Redirect {
	setVisible(visible: boolean): void;

	redraw(): void;

	restoreCursor(): void;

	getPosition(): [x: number, y: number];

	reposition(x: number, y: number, width?: number, height?: number): void;
}
