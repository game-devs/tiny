import { Npcs } from '../../../Enums.ts'
import NpcBase from '../npcBase.ts'
import ZeroDialog from "./dialogs/zeroDialog.ts"

export default class Zero extends NpcBase {
    constructor() {
        super(Npcs.Zero, false, 0, 0, 0, 0, 1000, 0, 0, 36, new ZeroDialog(), [])
    }
}