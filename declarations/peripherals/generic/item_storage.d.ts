/** @noSelfInFile */
declare class itemStoragePeripheral {
	/*
	size()
Source

    Get the size of this inventory.
    Returns

        number The number of slots in this inventory.

list()
Source

    List all items in this inventory. This returns a table, with an entry for each slot.

    Each item in the inventory is represented by a table containing some basic information, much like turtle.getItemDetail includes. More information can be fetched with getItemDetail. The table contains the item name, the count and an a (potentially nil) hash of the item's nbt. This NBT data doesn't contain anything useful, but allows you to distinguish identical items.

    The returned table is sparse, and so empty slots will be nil - it is recommended to loop over using pairs rather than ipairs.
    Returns

        { table | nil... } All items in this inventory.

    Usage

        Find an adjacent chest and print all items in it.

        local chest = peripheral.find("minecraft:chest")
        for slot, item in pairs(chest.list()) do
          print(("%d x %s in slot %d"):format(item.count, item.name, slot))
        end

getItemDetail(slot)
Source

    Get detailed information about an item.

    The returned information contains the same information as each item in list, as well as additional details like the display name (displayName) and item durability (damage, maxDamage, durability).

    Some items include more information (such as enchantments) - it is recommended to print it out using textutils.serialize or in the Lua REPL, to explore what is available.
    Parameters

        slot number The slot to get information about.

    Returns

        table Information about the item in this slot, or nil if not present.

    Throws

        If the slot is out of range.

    Usage

        Print some information about the first in a chest.

        local chest = peripheral.find("minecraft:chest")
        local item = chest.getItemDetail(1)
        if not item then print("No item") return end

        print(("%s (%s)"):format(item.displayName, item.name))
        print(("Count: %d/%d"):format(item.count, item.maxCount))
        if item.damage then
          print(("Damage: %d/%d"):format(item.damage, item.maxDamage))
        end

getItemLimit(slot)
Source

    Get the maximum number of items which can be stored in this slot.

    Typically this will be limited to 64 items. However, some inventories (such as barrels or caches) can store hundreds or thousands of items in one slot.
    Parameters

        slot number The slot

    Returns

        number The maximum number of items in this slot.

    Throws

        If the slot is out of range.

    Usage

        Count the maximum number of items an adjacent chest can hold.

        local chest = peripheral.find("minecraft:chest")
        local total = 0
        for i = 1, chest.size() do
          total = total + chest.getItemLimit(i)
        end
        print(total)

pushItems(toName, fromSlot [, limit [, toSlot]])
Source

    Push items from one inventory to another connected one.

    This allows you to push an item in an inventory to another inventory on the same wired network. Both inventories must attached to wired modems which are connected via a cable.
    Parameters

        toName string The name of the peripheral/inventory to push to. This is the string given to peripheral.wrap, and displayed by the wired modem.
        fromSlot number The slot in the current inventory to move items to.
        limit? number The maximum number of items to move. Defaults to the current stack limit.
        toSlot? number The slot in the target inventory to move to. If not given, the item will be inserted into any slot.

    Returns

        number The number of transferred items.

    Throws

        If the peripheral to transfer to doesn't exist or isn't an inventory.

        If either source or destination slot is out of range.

    Usage

        Wrap two chests, and push an item from one to another.

        local chest_a = peripheral.wrap("minecraft:chest_0")
        local chest_b = peripheral.wrap("minecraft:chest_1")

        chest_a.pushItems(peripheral.getName(chest_b), 1)

    See also

        peripheral.getName Allows you to get the name of a wrapped peripheral.

pullItems(fromName, fromSlot [, limit [, toSlot]])
Source

    Pull items from a connected inventory into this one.

    This allows you to transfer items between inventories on the same wired network. Both this and the source inventory must attached to wired modems which are connected via a cable.
    Parameters

        fromName string The name of the peripheral/inventory to pull from. This is the string given to peripheral.wrap, and displayed by the wired modem.
        fromSlot number The slot in the source inventory to move items from.
        limit? number The maximum number of items to move. Defaults to the current stack limit.
        toSlot? number The slot in current inventory to move to. If not given, the item will be inserted into any slot.

    Returns

        number The number of transferred items.

    Throws

        If the peripheral to transfer to doesn't exist or isn't an inventory.

        If either source or destination slot is out of range.

    Usage

        Wrap two chests, and push an item from one to another.

    local chest_a = peripheral.wrap("minecraft:chest_0")
    local chest_b = peripheral.wrap("minecraft:chest_1")

    chest_a.pullItems(peripheral.getName(chest_b), 1)

See also

    peripheral.getName Allows you to get the name of a wrapped peripheral.
	*/

	size(): number;

	list(): { name: string; count: number; nbt?: string }[];

	getItemDetail(
		slot: number
	): ({
		name: string;
		count: number;
		nbt?: string;
		tags: { [key: string]: true };
	} & ({} | { damage: number; maxDamage: number; durability: number }))[];

	getItemLimit(slot: number): number;

	pushItems(
		toName: string,
		fromSlot: number,
		limit?: number,
		toSlot?: number
	): number;

	pullItems(
		fromName: string,
		fromSlot: number,
		limit?: number,
		toSlot?: number
	): number;
}
