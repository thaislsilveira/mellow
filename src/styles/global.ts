import { createGlobalStyle } from 'styled-components';

import EksellDisplaySmallOtf from '../fonts/EksellDisplay-Small.otf';
import EksellDisplaySmallWoff from '../fonts/EksellDisplay-Small.woff';

import EksellDisplayMediumOtf from '../fonts/EksellDisplay-Medium.otf';
import EksellDisplayMediumWoff from '../fonts/EksellDisplay-Medium.woff';

export default createGlobalStyle`
 @font-face {
    font-family: 'EksellDisplaySmall';
    src: local('EksellDisplaySmall'), local('EksellDisplaySmall'),
    url(${EksellDisplaySmallOtf}) format('otf'),
    url(${EksellDisplaySmallWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'EksellDisplayMedium';
    src: local('EksellDisplayMedium'), local('EksellDisplayMedium'),
    url(${EksellDisplayMediumOtf}) format('otf'),
    url(${EksellDisplayMediumWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

html::-webkit-scrollbar, body::-webkit-scrollbar {
	width: 10px;
}

html::-webkit-scrollbar-thumb, body::-webkit-scrollbar-thumb {
	background-color: #00ea87;
}

body {
  color: #fff;
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font-family: Open Sans, serif;
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}

h1 {
  font-family: 'EksellDisplayMedium';
  font-weight: 400;
}

button {
  cursor: pointer;
}
`;
