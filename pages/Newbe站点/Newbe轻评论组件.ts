import {$, $$, ElementFinder, promise} from "protractor";

export class Newbe轻评论组件 {
    public input轻评论输入: ElementFinder;
    public btn发表轻评论: ElementFinder;

    constructor() {
        this.input轻评论输入 = $("input[name='qing-content']");
        this.btn发表轻评论 = $("div.qing-input > button");
    }

    public async getLbl最新发送的轻评论(): Promise<ElementFinder> {
        const list = $$("li.qing-item");
        const count = await list.count();
        return list.get(count - 1);
    }
}
