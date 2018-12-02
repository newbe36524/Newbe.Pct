import {Newbe博客文章页面} from "../..//pages/Newbe站点/Newbe博客文章页面";
import {Then, Given, When} from "cucumber";
import {should} from "chai";
import {browser} from "protractor";

should();

const newbe博客文章页面 = new Newbe博客文章页面();

Given(/^打开博客文章 "借一步说话" "(.+)"$/, async (url) => {
    await browser.get(url);
});

When(/^在轻评论输入框中输入  "(.+)"$/, async (content) => {
    await newbe博客文章页面.newbe轻评论组件.input轻评论输入.sendKeys(content);
});

When(/^点击轻评论的 发表 按钮$/, async () => {
    await newbe博客文章页面.newbe轻评论组件.btn发表轻评论.click();
    await browser.sleep(500);
});

Then(/^评论成功，最后一个轻评论内容为 "(.+)"$/, async (content) => {
    const lbl = await newbe博客文章页面.newbe轻评论组件.getLbl最新发送的轻评论();
    const newContent = await lbl.getText();
    newContent.should.be.eq(content);
});


