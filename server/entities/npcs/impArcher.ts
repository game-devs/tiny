import { Npcs } from '../../../shared/Enums.ts'
import NpcBase from './npcBase.ts'
import Coffee from '../items/consumable/coffee.ts'
import WoodenHelm from '../items/woodenHelm.ts'
import WoodenArmour from '../items/woodenArmour.ts'
import Bread from "../items/consumable/bread.ts"

export default class ImpArcher extends NpcBase {
    constructor() {
        super(Npcs.ImpArcher, true, 'imp archer', 1, 0, 0, 5, 10000, 0.15, 2, 42, null, [new WoodenHelm(0.3),new WoodenArmour(0.2), new Bread(0.3),new Coffee(0.4)], null)
    }
}