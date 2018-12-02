import {$$, ElementFinder} from "protractor";

export class Newbe博客热门文章链接列表 {

    constructor() {

    }

    public get热门文章链接(index: number): ElementFinder {
        return $$(".toc-h2").get(index);
    }
}
