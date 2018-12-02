Feature: 评论666

  @NewbeDemo
  Scenario: 进入博客文章使用轻评论表示666
    Given 打开博客文章 "借一步说话" "http://www.newbe.pro/donate.html"
    When 在轻评论输入框中输入  "我要为你信仰充值"
    When 点击轻评论的 发表 按钮
    Then 评论成功，最后一个轻评论内容为 "我要为你信仰充值"