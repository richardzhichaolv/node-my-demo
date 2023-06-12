node index命令报错
Client does not support authentication protocol requested by server; consider upgrading MySQL client

原因是MySQL密码加密问题
导致这个错误的原因是，目前，最新的mysql模块并未完全支持MySQL 8的“caching_sha2_password”加密方式，而“caching_sha2_password”在MySQL 8中是默认的加密方式。
解决步骤：

1、连接数据库

mysql -u root -p;

2、输入原来的密码

3、更改密码的加密类型

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'QQqq2429..';

(其中''123456"为新的密码)

4、最后在输入下面这个命令，然后回车。

FLUSH PRIVILEGES;

百度之后，
https://blog.csdn.net/Salttswordfish/article/details/124830443