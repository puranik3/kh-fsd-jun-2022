import React from 'react';
import ReactDOM from 'react-dom/client';
import PackageListItem from './components/PackageListItem';

const root = ReactDOM.createRoot(document.getElementById('root'));

// <></> -> <React.Fragment></React.Fragment>
const reactVersion = "18.2.0";

const packages = [
    {
        name: "react",
        description: "React is a JavaScript library for building user interfaces.",
        author: "gnoff",
        tags: [ 'react' ],
        version: reactVersion,
        lastPublished: 2
    },
    {
        name: "rxjs",
        description: "Reactive Extensions for modern JavaScript",
        author: "blesh",
        tags: [ 'Rx', 'RxJS', 'ReactiveX', 'ReactiveExtensions', 'Streams' ],
        version: "7.5.6",
        lastPublished: 1
    }
];

// root.render(
//   <>
//     {
//       packages.map(
//         pkg => (
//           <PackageListItem
//             name={pkg.name}
//             description={pkg.description}
//             author={pkg.author}
//             tags={pkg.tags}
//             version={pkg.version}
//             lastPublished={pkg.lastPublished}
//           >
//           </PackageListItem>
//       ))
//     }
//   </>
// );

// shorter syntax that sets the properties of the object as props
root.render(
  <>
    {
      packages.map(
        pkg => (
          <PackageListItem
            {...pkg}
          >
          </PackageListItem>
      ))
    }
  </>
);
