Feature: 使用必应搜索Newbe相关的内容

  Background:
    Given 打开必应首页 "https://cn.bing.com/"

  @NewbeDemo
  Scenario: 使用必应搜索 Newbe
    When 搜索框输入内容 "Newbe"
    When 点击搜索按钮
    Then 出现在必应搜索第一条的标题是 "主页 - Newbe便是新生，唯有不断蜕变才能焕然新生。"

  @NewbeDemo
  Scenario: 使用必应搜索 newbe.pro
    When 搜索框输入内容 "newbe.pro"
    When 点击搜索按钮
    Then 出现在必应搜索第一条的标题是 "主页 - Newbe便是新生，唯有不断蜕变才能焕然新生。"

  @NewbeDemo
  Scenario: 使用必应搜索 Newbe.Mahua.Framework
    When 搜索框输入内容 "Newbe.Mahua.Framework"
    When 点击搜索按钮
    Then 出现在必应搜索第一条的标题是 "Newbe.Mahua.Framework: 本SDK为实现QQ机器人平台的 ..."