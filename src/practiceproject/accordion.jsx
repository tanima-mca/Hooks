import React, { useState } from 'react';

export default function Accordion() {
  
  const [expandedIndex, setExpandedIndex] = useState(null);

  
  const accordionItems = [
    { title: 'Item 1', content: 'This is the content of Item 1' },
    { title: 'Item 2', content: 'This is the content of Item 2' },
    { title: 'Item 3', content: 'This is the content of Item 3' },
  ];

  
  const handleToggle = (index) => {
    
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      <h2>Accordion Example</h2>
      {accordionItems.map((item, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <div
            onClick={() => handleToggle(index)}
            style={{
              cursor: 'pointer',
              padding: '10px',
              backgroundColor: '#f1f1f1',
              border: '1px solid #ccc',
              borderRadius: '4px',
              userSelect: 'none',
            }}
          >
            {item.title}
          </div>
          {expandedIndex === index && (
            <div style={{ padding: '10px', border: '1px solid #ccc', borderTop: 'none' }}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}