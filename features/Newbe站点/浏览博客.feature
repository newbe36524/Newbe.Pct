Feature: 浏览博客

  Background:
    Given 打开Newbe的博客首页 "http://www.newbe.pro"

  @NewbeDemo
  Scenario Outline: 浏览博客的主要文章
    When 点击博客左侧 热门文章 的第 "<index>" 条
    Then 该文章的标题是 "<title>"
    Examples:
      | index | title                    |
      | 0     | 开始第一个QQ机器人【适用于v1.9-1.12】 |
      | 1     | 免费构建自己的博客                |
      | 2     | 在C#中使用依赖注入               |