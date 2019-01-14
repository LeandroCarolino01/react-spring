import React from 'react';
import { Spring } from 'react-spring';

export default function Component1() {
  return (
      <Spring
        from={{ opacity: 0, marginTop: -500}}
        to={{ opacity: 1, marginTop: 0 }}
      >
          { props => (
              <div style={props}>
                <div style={c1style}>
                    <h1>Component 1</h1>
                    <p>typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
          )}
      </Spring>
    
  )
}

const c1style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5em'
}
