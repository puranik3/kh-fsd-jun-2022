import React from 'react';
import ReactDOM from 'react-dom/client';
import PackageListItem from './components/PackageListItem';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <PackageListItem
      name="react"
      description="React is a JavaScript library for building user interfaces."
      author="gnoff"
      tag="react"
      version="18.2.0"
      lastPublished="2 months ago"
    >
    </PackageListItem>
    <PackageListItem
      name="rxjs"
      description="Reactive Extensions for modern JavaScript"
      author="blesh"
      tag="Rx"
      version="7.5.6"
      lastPublished="a month ago"
    >
    </PackageListItem>
  </>
);
