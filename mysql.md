
mysql语句

    use managementCenter;
    show tables;
    -- 增
    insert into user (userName, password) values ('hello', 'world');
    -- 查
    select * from user;
    select * from user where userName='aaa';
    select * from user where userName like '%a%' order by userId;
    -- 改
    update user set userName='hello world' where userId = 6;
    -- 删,mysql有个叫sql_safe_updates的变量，为了数据库更新操作的安全性，此值默认为1或on,将变量赋值为0或off即可完成修改
    set sql_safe_updates=0;
    delete from user where userName='ccc';
    -- 软删除 删除标识字段state
    update user set state=0 where userName='ccc';
    select * from user where state=1;

nodeJS连接mysql
