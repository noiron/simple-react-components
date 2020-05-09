// componentName 是 CamelCase 的格式，componentPath 是 awesome-component 这种格式 
function createContainerTemplate(componentName, componentPath) {

  const template = `import * as React from 'react';
import styled from 'styled-components';
import ${componentName} from '../../components/${componentPath}';
  
const DemoBox = styled.div\`\`;
  
class Demo${componentName} extends React.Component {
  componentDidMount() {
    document.title = '${componentName}组件';
  }
  
  render() {
    return (
      <DemoBox>
        <${componentName} />
      </DemoBox>
    );
  }
}

export default Demo${componentName};`

  return template;
}

module.exports = createContainerTemplate;
