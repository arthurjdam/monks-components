import React from 'react';
import Typography from '.';

export default {
  title: 'Core/Typography',
  parameters: {
    inspectComponents: [Typography],
  },
};

export function headerStyles(): React.ReactElement {
  return (
    <React.Fragment>
      <h1>h1. Monk Typography</h1>
      <h2>h2. Monk Typography</h2>
      <h3>h3. Monk Typography</h3>
      <h4>h4. Monk Typography</h4>
      {/* <h5>h5. Monk Typography</h5> */}
      {/* <h6>h6. Monk Typography</h6> */}
      <p>p. Paragraph - lorem ipsum.</p>
      <code>Source code</code>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        fermentum, lacus sit amet varius lobortis, arcu felis feugiat nulla, at
        sollicitudin dui urna et lorem. Nulla euismod odio lacus, sit amet
        posuere mi imperdiet et. <code>Vestibulum finibus eget lacus</code> eu
        scelerisque. Duis dictum risus malesuada dolor euismod porta.
        Pellentesque fringilla sollicitudin massa non viverra. Mauris eget
        sapien tortor. Nam molestie dapibus magna tristique laoreet. Praesent
        tincidunt turpis id tellus condimentum aliquam. In commodo libero dui,
        et aliquam <a href="#">anchor tag tortor euismod</a> sit amet. Vivamus
        suscipit quam eu faucibus maximus. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; In fringilla
        iaculis justo, <em>emphasis nec facilisis turpis lacinia</em> a. Ut
        laoreet libero sed est pharetra, id condimentum risus rutrum. Nunc
        dictum nunc vitae elit imperdiet convallis.
      </p>
      <small style={{ display: 'block' }}>small. Lorem ipsum</small>
    </React.Fragment>
  );
}

headerStyles.story = {
  name: 'Headers',
};
