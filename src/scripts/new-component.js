/**
 * 创建一个新的组件，会需要这样的几个步骤：
 * 1. 接收一个组件的名字，xxxx-xxxx-xxxx，在 components 文件夹下创建一个空文件夹
 * 2. 创建一个组件的模板文件
 * 3. 在 containers 下创建一个空文件夹
 * 4. 创建一个页面的模板文件
 * 5. 在 App.js 中加入相应的路由（这一步当前需要手动完成）
 */
const fs = require('fs');
const path = require('path');
const createComponentTemplate = require('./component-template');
const createContainerTemplate = require('./container-template');

// 接收的组件名字
const componentNameParam = process.argv[2];

// 创建 component 文件夹
const componentDir = path.resolve(
  __dirname,
  `../components/${componentNameParam}`
);
if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir);
}

// 创建 component 模板文件
const componentTemplate = createComponentTemplate(
  turnToCamelCase(componentNameParam)
);
// 写入组件的模板内容
fs.writeFileSync(
  path.resolve(__dirname, componentDir + '/index.js'),
  componentTemplate
);

// 创建 containers 文件夹
const containerDir = path.resolve(
  __dirname,
  `../containers/demo-${componentNameParam}`
);
if (!fs.existsSync(containerDir)) {
  fs.mkdirSync(containerDir);
}

const containerTemplate = createContainerTemplate(
  turnToCamelCase(componentNameParam),
  componentNameParam
);
fs.writeFileSync(
  path.resolve(__dirname, containerDir + '/index.js'),
  containerTemplate
);

/**
 * 将 awesome-component 格式的字符串转换成 AwesomeComponent
 */
function turnToCamelCase(nameParam) {
  return nameParam
    .split('-')
    .map((word) => word.substr(0, 1).toUpperCase() + word.substr(1))
    .join('');
}
