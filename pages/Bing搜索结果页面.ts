import {$, ElementFinder, $$} from "protractor";

export class Bing搜索结果页面 {

    public getlbl第一条搜索结果的标题(): ElementFinder {
        return $$("li.b_algo").get(0).$("h2");
    }
}