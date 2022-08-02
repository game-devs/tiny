import { Npcs } from '../../../shared/Enums.ts'
import NpcBase from './npcBase.ts'
import Coffee from '../items/consumable/coffee.ts'

export default class Document extends NpcBase {
    constructor() {
        super(Npcs.Document, true, 'document', 0, 0, 0, 20, 10000, 0.25, 6, 18, null, [new Coffee(0.1)], null)
    }
}