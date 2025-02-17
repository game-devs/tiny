import { ItemsIds } from "../../../../shared/Enums.ts"
import { ItemsToHaveBase } from "./itemsToHaveBase.ts"

export class ItemsToHave {
    public item: ItemsIds
    public amount: number
    public amountTotal: number

    constructor(itemsBase: ItemsToHaveBase) {
        this.item = itemsBase.item
        this.amount = itemsBase.amount
        this.amountTotal = itemsBase.amount
    }
}