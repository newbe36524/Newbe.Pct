import {Bing首页} from "../..//pages/Newbe站点/Bing首页";
import {Bing搜索结果页面} from "../..//pages/Newbe站点/Bing搜索结果页面";
import {Then, Given, When} from "cucumber";
import {should} from "chai";
import {browser} from "protractor";

should();

const bing首页 = new Bing首页();
const bing搜索结果页面 = new Bing搜索结果页面();

Given(/^打开必应首页 "(.+)"$/, async (url) => {
    await browser.get(url);
});

When(/^搜索框输入内容 "(.+)"$/, async (keyword) => {
    await bing首页.input搜索框.sendKeys(keyword);
});

When(/^点击搜索按钮$/, async () => {
    await bing首页.btn搜索按钮.click();
    await browser.sleep(1000);
});

Then(/^出现在必应搜索第一条的标题是 "(.+)"$/, async (titlehtml) => {
    const title = await bing搜索结果页面.lbl第一条搜索结果的标题.getText();
    title.should.be.eq(title);
});
