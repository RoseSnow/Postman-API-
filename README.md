## API 接口文档格式化网页

因为公司用的是postman做接口文档调试，postman有提供用浏览器打开文档，看着会清晰很多，如果在项目交付时，客户方需要接口文档，我们不能让客户去下postman，直接给接口地址的话是需要账户登录的，所以写这个网页是可以把postman导出的json格式的接口文档格式化并在浏览器打开。

>预览

![loading...](/images/api.gif)

>用法

postman导出的json文档，命名为api.js，并给json数据放到一个对象中，命名为api，然后在index.html文件中引入api.js，在浏览器中打开即可。