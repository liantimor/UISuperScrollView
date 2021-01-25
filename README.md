# UISuperScrollView 针对CocosCreator cc.ScrollView做的优化 
[在线演示效果](https://icipiqkm.github.io/UISuperScrollView/)

[Cocos论坛地址](http://forum.cocos.org/t/cocos-creator-scrollview-uisuperscrollview/99891)




# 说明
---
    整个列表数据的增减刷新都是在使用层去处理的，组件不需要知道你的数据结构是什么
    无论你对你的数组做了什么样的操作（push，pop ....）
    或者修改了某个元素的内容时，你只需要告诉组件你有多少条数据即可，
    也就是 UISuperLayout.total这个方法

# 接口
* UISuperLayout.total(length:number) 这个方法就是告诉组件你有多少条数据，每当你增加 删除 或者是你的数组长度没有变化 但是你数组的内容改变了 你都可以调用这个方法来刷新
* UISuperLayout.scrollToHeader 滚动到起始位置
* UISuperLayout.scrollToFooter 滚动到结束位置
* UISuperLayout.resetScrollView 重置列表 当列表滑动到底部时 然后不管通过什么方式(同步|异步)减少了整体的(尺寸|缩放) 时保证内容显示正确
* 喜欢的话别忘记点个 Star 谢谢

<img src="https://github.com/icipiqkm/UISuperScrollView/blob/main/image/IMAGE%202021-01-25%2017:07:57.jpg" height="400"> <img src="https://github.com/icipiqkm/UISuperScrollView/blob/main/image/IMAGE%202021-01-25%2017:07:52.jpg" height="400">
