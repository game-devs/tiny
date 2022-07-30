import { Items, ItemType, GearType } from "../../../shared/Enums.ts"
import ItemBase from "./itemBase.ts"
import { buyPrice, sellPrice } from "./itemPrices.ts";

export default class IronHelm extends ItemBase {

    constructor(dropChance: number, customBuyPrice: number = 0) {
        super(0, Items.IronHelm, ItemType.Weareable, GearType.Head, 0, 0, 20, true, 0, 0, 0, dropChance, (customBuyPrice !== 0 ? customBuyPrice : buyPrice.IronHelm), sellPrice.IronHelm)
    }
}