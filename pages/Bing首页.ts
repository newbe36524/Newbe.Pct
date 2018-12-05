import {$, ElementFinder} from "protractor";

export class Bing首页 {
    public input搜索框: ElementFinder;
    public btn搜索按钮: ElementFinder;

    constructor() {
        this.input搜索框 = $("#sb_form_q");
        this.btn搜索按钮 = $("#sb_form_go");
    }
}
