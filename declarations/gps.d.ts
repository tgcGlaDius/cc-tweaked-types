/** @noSelfInFile */
declare namespace gps {
	var CHANNEL_GPS: 65534;

	function locate(timeout?: number, debug?: boolean): LuaMultiReturn<[number, number, number]>;
}
