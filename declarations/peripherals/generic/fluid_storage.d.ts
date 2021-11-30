/** @noSelfInFile */
declare class fluidStoragePeripheral {
	/*
tanks()	Get all "tanks" in this fluid storage.
pushFluid(toName [, limit [, fluidName]])	Move a fluid from one fluid container to another connected one.
pullFluid(fromName [, limit [, fluidName]])	Move a fluid from a connected fluid container into this oneone.
	*/
	tanks(): unknown[];
	pushFluid(toName: string, limit?: number, fluidName?: string): number;
	pullFluid(fromName: string, limit?: number, fluidName?: string): number;
}
