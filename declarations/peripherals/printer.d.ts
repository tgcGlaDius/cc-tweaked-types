/** @noSelfInFile */
declare class printerPeripheral {
	/*
write(...)	Writes text to the current page.
getCursorPos()	Returns the current position of the cursor on the page.
setCursorPos(x, y)	Sets the position of the cursor on the page.
getPageSize()	Returns the size of the current page.
newPage()	Starts printing a new page.
endPage()	Finalizes printing of the current page and outputs it to the tray.
setPageTitle([title])	Sets the title of the current page.
getInkLevel()	Returns the amount of ink left in the printer.
getPaperLevel()	Returns the amount of paper left in the printer.
	*/

	write(...text: string[]): void;

	getCursorPos(): LuaMultiReturn<[x: number, y: number]>;

	setCursorPos(x: number, y: number): void;

	getPageSize(): LuaMultiReturn<[x: number, y: number]>;

	newPage(): void;

	endPage(): void;

	setPageTitle(title?: string): void;

	getInkLevel(): number;

	getPaperLevel(): number;
}
