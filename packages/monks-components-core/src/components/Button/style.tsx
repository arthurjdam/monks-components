import { css } from '@emotion/react';

export const button = css({});
export const label = css({
  backgroundColor: '#2d2d2d',
  height: '30px',
  borderRadius: '10rem',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'rgb(234, 232, 228)',
  padding: '0 1.2rem',
  position: 'relative',
  transition: '100ms ease-out',
});
// import { StyleSheet } from '../../hooks/useStyles';

// export const buttonStyleSheet: StyleSheet = ({
//   color,
//   font,
//   pattern,
//   ui,
//   unit,
//   transition,
// }) => ({
//   button: {
//     '@selectors': {
//       ':hover :nth-child(1)': {
//         transform: 'scale(1, 1)',
//       },
//       ':hover :nth-child(2)': {
//         transform: 'translate(30px, 0)',
//       },
//       ':hover :nth-child(3)': {
//         transform: 'scale(0, 0)',
//       },
//     },
//   },
//   label: {
//     backgroundColor: '#2d2d2d',
//     height: '30px',
//     borderRadius: '10rem',
//     display: 'inline-flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     color: 'rgb(234, 232, 228)',
//     padding: '0 1.2rem',
//     position: 'relative',
//     transition: '100ms ease-out',
//   },
//   icon: {
//     backgroundColor: '#2d2d2d',
//     width: '30px',
//     height: '30px',
//     borderRadius: '10rem',
//     display: 'inline-flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     overflow: 'hidden',
//     transition: '100ms ease-out',
//   },
//   iconBefore: {
//     transformOrigin: '0% 50%',
//     transform: 'scale(0, 0)',
//   },
//   iconAfter: {
//     transformOrigin: '100% 50%',
//   },
// });
