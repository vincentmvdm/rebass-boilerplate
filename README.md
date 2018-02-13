# Rebass Boilerplate

A <a href="https://github.com/react-boilerplate/react-boilerplate" target="_blank">React Boilerplate</a>-inspired starter for your <a href="https://github.com/styled-components/styled-components" target="_blank">styled-components</a> projects

<sub>Created by <a href="https://github.com/vincentmvdm" target="_blank">Vincent van der Meulen</a> (<a href="https://twitter.com/vincentmvdm" target="_blank">@vincentmvdm</a> on Twitter)</sub>

## Features

<dl>
    <dt>Create React App </dt>
    <dd>Develop and deploy React applications with ease using <a href="https://github.com/facebook/create-react-app">Create React App</a>.</dd>
    <dt>Rebass Components</dt>
    <dd>Jump start your styled-components project with <a href="https://github.com/jxnblk/rebass" target="_blank"> a set of essential and customizable components</a>.</dd>
    <dt>Redux State Management</a></dt>
    <dd>Manage your application state with <a href="https://github.com/reactjs/redux" target="_blank">Redux</a> and <a href="https://github.com/reactjs/react-redux">react-redux</a>.</dd>
    <dt>Redux-Synced Routing</dt>
    <dd>Power your app with <a href="https://github.com/ReactTraining/react-router" target="_blank">react-router</a> routing while keeping your application state up-to-date.</dt>
    <dt>Asynchronous Action Dispatch</dsd>
    <dd>Wait for functions to finish before dispatching new actions.</test>
    <dt>Redux-Synced Forms and Form Validation</dt>
    <dd>Enable communication between your forms and Redux while getting access to features such as synchronous form validation.</dd>
    <dt>Redux Logging</dt>
    <dd>Monitor your application state with <a href="https://github.com/evgenyrodionov/redux-logger" target="_blank">Redux Logger</a> and stay in the know.</dd>
    <dt>SEO</dt>
    <dd>Make your websites easier to find and a pleasure to use with <a href="https://github.com/nfl/react-helmet" target="_blank">React Helmet</a></dd>
</dl>

## Rationale

### Folder Structure

The folder structure is based on react-boilerplate's, which in turn is based on <a href="https://www.smashingmagazine.com/2016/09/how-to-scale-react-applications/" target="_blank">How To Scale React Applications</a> and <a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0" target="_blank">Presentational and Container Components</a>.

### Redux Thunk instead of Redux Saga

Asynchronous action dispatch is essential, but Redux Saga is complex and takes a while to learn. Redux Thunk takes at most 30 minutes to learn and set up.

### Rebass

Rebass provides only the essential components you would create yourself anyway. It enables the use of an [8pt grid](https://spec.fm/specifics/8-pt-grid) and customization is easy thanks to styled-components.

### Redux Form

Synchronizing your form and Redux state is useful. Redux Form makes that and (synchronous) form validation easy.

## Quick Start

1. Clone this repository: `git clone https://github.com/vincentmvdm/rebass-boilerplate.git`
2. Navigate to the directory: `cd rebass-boilerplate`
3. Install packages: `yarn install` or `npm install`
4. Start: `yarn start` or `npm start`

## Attribution

The majority of code is blatantly copied from <a href="https://github.com/react-boilerplate/react-boilerplate" target="_blank">react-boilerplate</a> and every package's respective documentation. Thanks to <a href="https://github.com/mxstbr" target="_blank">Max Stoiber</a> for creating <a href="https://github.com/styled-components/styled-components" target="_blank">styled-components</a> and react-boilerplate. Thanks to <a href="https://github.com/jxnblk" target="_blank">Brent Jackson</a> for making <a href="https://github.com/jxnblk/rebass" target="_blank">Rebass</a>.

## License

<a href="https://github.com/vincentmvdm/rebass-boilerplate/blob/master/LICENSE" target="_blank">MIT License</a>
