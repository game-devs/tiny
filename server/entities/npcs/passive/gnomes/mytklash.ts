import { Npcs } from '../../../../../shared/Enums.ts'
import NpcBase from '../../npcBase.ts'
import MytklashDialog from "../dialogs/mytklashDialog.ts"

export default class Mytklash extends NpcBase {
    constructor() {
        super(Npcs.FemaleGnome, false, 'mytklash', 0, 0, 0, 0, 1000, 0.05, 0, 36, new MytklashDialog(), [], null)
    }
}