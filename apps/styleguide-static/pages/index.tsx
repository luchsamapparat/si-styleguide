import React from 'react';

import './index.scss';

export const Index = () => {
  return (
    <main>
      <h1>Signal Iduna Design System</h1>
        <section>
          {/* <markdown ngPreserveWhitespaces [data]="foundationButtonMd"></markdown> */}
          <div className="preview">
            <div className="figma">
              <a target="_blank" href="https://www.figma.com/file/GYwTZES10fYQL7y9iaKkCy/Button?node-id=1%3A8">🎨 Open in Figma</a>
              <iframe scrolling="no" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FGYwTZES10fYQL7y9iaKkCy%2FButton%3Fnode-id%3D1%253A8"></iframe>
            </div>
            <div className="storybook">
              <a target="_blank" href="http://localhost:4300/?path=/story/button--primary">👩‍💻 Open in Storybook</a>
              <iframe scrolling="no" src="http://localhost:4300/iframe.html?id=button--primary"></iframe>
            </div>
          </div>
        </section>

        <section>
          {/* <markdown ngPreserveWhitespaces [data]="webButtonMd"></markdown> */}
          <div className="preview">
            <div className="figma">
              <a target="_blank" href="https://www.figma.com/file/GYwTZES10fYQL7y9iaKkCy/Button?node-id=1%3A8">🎨 Open in Figma</a>
              <iframe scrolling="no" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FGYwTZES10fYQL7y9iaKkCy%2FButton%3Fnode-id%3D1%253A8"></iframe>
            </div>
            <div className="storybook">
              <a target="_blank" href="http://localhost:4300/?path=/story/web-components--button">👩‍💻 Open in Storybook</a>
              <iframe scrolling="no" src="http://localhost:4300/iframe.html?id=web-components--button"></iframe>
            </div>
          </div>
        </section>

        <section>
          {/* <markdown ngPreserveWhitespaces [data]="ngButtonMd"></markdown> */}
          <div className="preview">
            <div className="figma">
              <a target="_blank" href="https://www.figma.com/file/GYwTZES10fYQL7y9iaKkCy/Button?node-id=1%3A8">🎨 Open in Figma</a>
              <iframe scrolling="no" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FGYwTZES10fYQL7y9iaKkCy%2FButton%3Fnode-id%3D1%253A8"></iframe>
            </div>
            <div className="storybook">
              <a target="_blank" href="http://localhost:4300/?path=/story/angular-components--button">👩‍💻 Open in Storybook</a>
              <iframe scrolling="no" src="http://localhost:4300/iframe.html?id=angular-components--button"></iframe>
            </div>
          </div>
        </section>
    </main>
  );
};

export default Index;
