// componentName 是 CamelCase 的格式
function createComponentTemplate(componentName) {
  const template = `import React from 'react';
import styled from 'styled-components';
  
class ${componentName} extends React.Component {
  
  render() {
    return (
      <div>This is ${componentName}</div>
    )
  }
};
  
export default ${componentName};`;

  return template;
}

module.exports = createComponentTemplate;