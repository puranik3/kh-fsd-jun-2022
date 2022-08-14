import React from 'react';
import ReactDOM from 'react-dom/client';
import PackageListItem from './components/PackageListItem';

const root = ReactDOM.createRoot(document.getElementById('root'));

// <></> -> <React.Fragment></React.Fragment>
const reactVersion = "18.2.0";

root.render(
  <>
    <PackageListItem
      name="react"
      description="React is a JavaScript library for building user interfaces."
      author="gnoff"
      tags={[ 'react' ]}
      version={reactVersion}
      lastPublished={2}
    >
    </PackageListItem>
    {/* set tags to an array with multiple strings as items and see what happens */}
    <PackageListItem
      name="rxjs"
      description="Reactive Extensions for modern JavaScript"
      author="blesh"
      tags={[ 'Rx', 'RxJS', 'ReactiveX', 'ReactiveExtensions', 'Streams' ]}
      version="7.5.6"
      lastPublished={1}
    >
    </PackageListItem>
  </>
);
