# 代理模式

```
A - - * - -> C
A --> B --> C
```

A对象 不方便直接访问 C对象，A 找到 B，将 A 的访问需求交给 B，让 B 代理 A 去访问 C。