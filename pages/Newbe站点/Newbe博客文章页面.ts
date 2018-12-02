import {$, ElementFinder} from "protractor";
import {Newbe轻评论组件} from "./Newbe轻评论组件";

export class Newbe博客文章页面 {
    public lbl文章主标题: ElementFinder;
    public newbe轻评论组件: Newbe轻评论组件

    constructor() {
        this.newbe轻评论组件 = new Newbe轻评论组件();
        this.lbl文章主标题 = $("article>div>header>h1");
    }
}
