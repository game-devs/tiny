import { Npcs } from '../../../shared/Enums.ts'
import NpcBase from './npcBase.ts'
import AdamantArmour from '../items/adamantArmour.ts'
import AdamantDagger from '../items/adamantDagger.ts'
import AdamantSword from '../items/adamantSword.ts'
import LargeHp from "../items/consumable/largeHp.ts"

export default class SandSpirit extends NpcBase {
    constructor() {
        super(Npcs.SandSpirit, true, 'sandspirit', 0, 0, 0, 50, 10000, 0.25, 6, 36, null, [new LargeHp(0.4), new AdamantArmour(0.4), new AdamantDagger(0.4), new AdamantSword(0.4)], null)
    }
}