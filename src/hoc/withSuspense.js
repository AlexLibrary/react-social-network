import React from "react";
import Preloader from "../components/modules/Preloader";


export const withSuspense = (Component) => (props) =>
  <React.Suspense fallback={<Preloader />}>
    <Component />
  </React.Suspense>


// export const withSuspense = (Component) => {

//   class withSuspense extends React.Component {
//     render() {
//       return (
//         <React.Suspense fallback={() => <Preloader />}>
//           <Component />
//         </React.Suspense>
//       )
//     }
//   }

//   return (withSuspense)

// }
