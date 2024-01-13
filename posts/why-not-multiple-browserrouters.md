---
title: why not multiple BrowserRouters
date: 2023-10-22
tags:
- react
- javascript
---

why not use multiple browserrouters
____________________________________

```
React Router error - 
    Error: You cannot render a <Router> inside another <Router>. You should never have more than one in your app.
    at Router (/vendors-node_modules_restart_hooks_esm_useForceUpdate_js-node_modules_restart_hooks_esm_usePr-cdac26.iframe.bundle.js:6709:103)
    at renderWithHooks (/vendors-node_modules_storybook_addon-a11y_dist_preview_mjs-node_modules_storybook_addon-essen-d391cf.iframe.bundle.js:38091:27)
    at mountIndeterminateComponent (/vendors-node_modules_storybook_addon-a11y_dist_preview_mjs-node_modules_storybook_addon-essen-d391cf.iframe.bundle.js:41855:13)
at beginWork (/vendors-node_modules_storybook_addon-a11y_dist_preview_mjs-node_modules_storybook_addon-essen-d391cf.iframe.bundle.js:43368:16)
    at beginWork$1 (/vendors-node_modules_storybook
```


Drew Reese - . There becomes an issue when you start nesting routers within routers, or rather it's the routing contexts within other routing contexts. The contexts of "outer" routers are unaware of what nested "inner" routers have handled.

<https://stackoverflow.com/questions/67175039/is-it-possible-to-have-multiple-browserrouter-in-react-app>


scriptedalchemy - Dont think you want have multiple browser routers. Youd want to use switch or something else. Only hosts should implement browser router, and only once. Usually I have a standalone wrapper that has like a mini shell for each app. Then I federate the inner component. So browser router stays on the shell layer

nebarf - Single source of truth: having a single "component" updating the browser history brings a lot of flexibility (e.g. it could really help in case you're gradually migrating a legacy system following the strangler pattern).

<https://github.com/module-federation/module-federation-examples/issues/1986>
