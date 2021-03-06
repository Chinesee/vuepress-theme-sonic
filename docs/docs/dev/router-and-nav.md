# 路由和菜单

路由和菜单建立了各个页面的联系，通过侧边栏的菜单，你可以轻松地到达各个功能页面。在 Venus 中，侧边栏的菜单是由路由配置生成的，因此你无需关心侧边栏真实的结构。这很神奇，要获得这样的好处，你仅仅需要修改一些配置。

### 路由配置

为了方便管理，路由的配置都在 [`@/router/router.js`]() 中定义。除了 vue-router 已规定的 [路由配置]((https://router.vuejs.org/zh/api/#routes))，还新增了以下配置项：

#### `hidden`
可选的，默认值：`false`

当设为 `true` 时，路由将不会在侧边栏菜单中出现。

#### `meta.title`
可选的，默认值：`false`



#### `meta.roles`
可选的，默认值：`false`



#### `meta.icon`
可选的，默认值：`false`



#### `meta.openKey`
可选的，默认值：`false`


### 动态路由

在 `router.js` 中你可以看到那里定义了两种路由：`constantRoutes` 和 `asyncRoutes`，constantRoutes 是路由对象被创建时就已经初始化的**静态路由**，而 asyncRoutes 则是通过人为控制的方式生成的**动态路由**，一般是那些需要根据用户权限判断而生成的路由。

vue-router 的 [`addRoutes`](https://router.vuejs.org/zh/api/#router-addroutes) 方法赋予了我们动态添加路由的能力，[权限控制]()一节中将介绍如何配合用户角色标识生成权限路由表。

**请注意**，如果你使用了动态添加路由的方法，请务必**只**在 `asyncRoutes` 中对未匹配的路由进行兜底处理。如果你在 `constantRoutes` 就声明了“404 重定向”，那么此后的所有路由都将被拦截，即未匹配到路径的路由都将被重定向至 404 页面，原因在于 `asyncRoutes` 是在后面动态添加的。
```js
// 应该始终仅在 asyncRoutes 的最后加上这条声明
{ path: '*', redirect: '/not-found', hidden: true }
```

### 面包屑



### 侧边栏


