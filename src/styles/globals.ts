import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
}

body{
  //font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-family: '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
  font-size: 12px;
  color: '#000';
}

code {
    font-family: 'source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New',
        'monospace';
}
`;
