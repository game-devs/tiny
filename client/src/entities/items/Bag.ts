import { ItemsIds } from "../../models/Enums"
import BagItem from "./BagItem"
import { Items } from "./Items"
import { GameClient } from "../../startup/GameClient"

export default class Bag {
    public items: any[] = []
    public coins: number = 0
    public size: number = 24
    public playerId: string = ''
    public itemsHolderEl: HTMLElement
    public coinsEl: HTMLElement
    private client: GameClient
    private itemsCount: number = 0

    constructor(client: GameClient) {
        this.itemsHolderEl = document.getElementById('items')!
        this.coinsEl = document.getElementById('coins')!
        this.client = client
    }

    public drawItems() {
        for (const item of this.items) {
            item.draw()
        }
    }

    public addGold(amount: number) {
        this.coins += amount
        this.coinsEl.innerHTML = `GP: ${this.coins}`
    }

    public setGold(currentGold: number) {
        this.coins = currentGold
        this.coinsEl.innerHTML = `GP: ${this.coins}`
    }

    public addItem(itemId: ItemsIds, coins: number, playerId: string) {
        if (this.playerId == playerId) {
            if (itemId == ItemsIds.Coin) {
                this.addGold(coins)
            } else {
                if (this.items.length < this.size) {
                    this.itemsCount++
                    const itemSprite = this.getItemSprite(itemId)
                    const canvasId = this.addCanvasNode(itemId)
                    this.items.push(new BagItem(this,itemId,itemSprite,canvasId))
                    this.drawItems()
                }
            }
        }
    }

    public clickItem(e: Partial<MouseEvent>, itemId: ItemsIds) {
        if (
            e.type === 'mouseup'
        ) {
            if (e.type === 'mouseup') {
                if (e.button == 0) {
                    this.client.useItem(itemId)
                } else if (e.button == 2) {
                    this.client.dropItem(itemId)
                }
            } else {
                this.client.useItem(itemId)
            }
        } else if (e.type === 'touchmove') {
            this.client.dropItem(itemId)
        }
    }

    public removeItem(itemId: ItemsIds) {
        if (itemId != ItemsIds.Empty) {
            const index = this.items.map(item => { return item.itemId; }).indexOf(itemId);
            const canvasId = this.items[index].layer.canvasId
            if (index > -1) {
                this.items.splice(index, 1);
            }
            const canvasBtn = document.getElementById(canvasId)!
            this.itemsHolderEl.removeChild(canvasBtn)
        }
    }

    public removeAllItems() {
        for (let i=0; i < this.size; i++) {
            const anyItemAtPosition = this.items[i] != undefined && this.items[i] != null
            if (anyItemAtPosition) {
                const canvasId = this.items[i].layer.canvasId
                const canvasBtn = document.getElementById(canvasId)!
                this.itemsHolderEl.removeChild(canvasBtn)
            }
        }
        this.items.splice(0);
    }

    private getItemSprite(itemId: ItemsIds) {
        let keyOfItemId = ItemsIds[itemId]
        let items = Items as any
        return items[keyOfItemId]
    }

    private addCanvasNode(itemId: ItemsIds): string {
        let elementId = `${itemId}-${this.itemsCount}`
        let newButton = document.createElement('canvas')
        newButton.classList.add('item-btn');
        newButton.id = elementId
        newButton.onmouseup = (e) => this.clickItem(e, itemId)
        newButton.ontouchstart = (e) => this.clickItem(e, itemId)
        newButton.ontouchmove = (e) => this.clickItem(e, itemId)
        newButton.oncontextmenu = () => false
        this.itemsHolderEl.appendChild(newButton)
        this.organizeBag();
        return elementId
    }

    private organizeBag(): void {
        const inventoryList = <HTMLCanvasElement[]> Array.from(this.itemsHolderEl.childNodes);

        this.itemsHolderEl.textContent = '';

        inventoryList.sort((a, b) => +a.id.split('-')[0] - +b.id.split('-')[0]).forEach(item => {
            this.itemsHolderEl.appendChild(item);
        });
    }
}