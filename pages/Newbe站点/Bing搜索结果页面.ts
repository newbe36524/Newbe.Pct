import {$, ElementFinder, $$} from "protractor";

export class Bing搜索结果页面 {
    public lbl第一条搜索结果的标题: ElementFinder;

    constructor() {
        this.lbl第一条搜索结果的标题 = $$("li.b_algo").get(0).$("h2");
    }
}