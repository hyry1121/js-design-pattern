# 模板方法模式

严重依赖抽象类（父类）
在抽象类中定义异常，如果子类没有实现抽象类的方法，
则在调用的时候，顺着原型链找到抽象类找到异常。