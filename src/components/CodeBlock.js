import React from 'react';

const codeBlockStyles = {
  backgroundColor: '#f5f5f5',
  padding: '10px',
  borderRadius: '4px',
  fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
  fontSize: '14px',
  lineHeight: '1.4',
};

const CodeBlock = ({ code }) => {
  return <pre style={codeBlockStyles}>{code}</pre>;
};

export default CodeBlock;