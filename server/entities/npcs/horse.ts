import { Npcs } from '../../../shared/Enums.ts'
import NpcBase from './npcBase.ts'

export default class Horse extends NpcBase {
    constructor() {
        super(Npcs.Horse, false, 'horse', 0, 0, 0, 0, 1000, 0, 0, 36, null, [], null)
    }
}