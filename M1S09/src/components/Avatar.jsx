// import React from "react";

export const Avatar = ({ src, alt }) => {
  return <img src={src} className="img-thumbnail" alt={alt} />;
};

// export class Avatar extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <img
//         src={this.props.src}
//         className="img-thumbnail"
//         alt={this.props.alt}
//       />
//     );
//   }
// }
