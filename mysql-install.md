
mac 安装 mysql教程
https://www.bilibili.com/video/BV1tS4y1T7sf/?spm_id_from=333.337.search-card.all.click&vd_source=eb2428254cab0a8c2dd8d2d38ac5a6d8

昨天安装完成之后，没有做好相应的检查记录工作
今天打开终端，输入 mysql -u root -p
终端提示 zsh: command not found: mysql
应该是环境变量没有编辑,且，需要注意的是此处是zsh,不是bash
MAC电脑启动mysql，系统提示mysql: command not found该怎么办
https://blog.csdn.net/m0_71059347/article/details/130308868

其中配置编辑vi ~/.zshrc的方法
Mac OS开发环境配置
https://blog.csdn.net/weixin_38404507/article/details/121111876

写入配置文件的方法：

1、终端vi ~/.zshrc ---- 打开配置文件
2、按 i 进入编辑模式
3、将 export .....  语句粘贴进去
4、按esc推出编辑模式
5、输入 :wq  关闭配置文件
6、source ~/.zshrc — 保存配置文件

操作完，在终端输入 mysql -u root -p
回车
输入密码
验证是否连接成功