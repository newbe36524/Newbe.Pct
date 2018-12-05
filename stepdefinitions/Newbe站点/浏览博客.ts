import {Newbe博客文章页面} from "../..//pages/Newbe站点/Newbe博客文章页面";
import {Newbe博客热门文章链接列表} from "../../pages/Newbe站点/Newbe博客热门文章链接列表";
import {Then, Given, When} from "cucumber";
import {should} from "chai";
import {browser} from "protractor";

should();

const newbe博客文章页面 = new Newbe博客文章页面();
const newbe博客热门文章链接列表 = new Newbe博客热门文章链接列表();

Given(/^打开Newbe的博客首页 "(.+)"$/, async (url) => {
    await browser.get(url);
    await browser.sleep(500);
});

When(/^点击博客左侧 热门文章 的第 "(\w)" 条$/, async (index) => {
    const lbl热门文章链接 = newbe博客热门文章链接列表.get热门文章链接(index);
    await lbl热门文章链接.click();
    await browser.sleep(500);
});

Then(/^该文章的标题是 "(.+)"$/, async (title) => {
    const nowTitle = await newbe博客文章页面.lbl文章主标题.getText();
    nowTitle.should.be.eq(title);
});


