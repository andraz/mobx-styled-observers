Built on the shoulders of giants, a [software design pattern](https://en.wikipedia.org/wiki/Software_design_pattern) which merges the best of the best in the React automation ecosystem while avoiding all of the *old bad parts* of JavaScript and also some of the *new bad parts* of latest ES6/7, to make the developer experience [as simple as possible, but not simpler](https://en.wikipedia.org/wiki/Occam's_razor).

## TL;DR
Editable demo, look into the `src` in the sidebar: https://codesandbox.io/s/github/andraz/mobx-styled-observers

## Automated

Best things in software development are those which:
* are simple to use
* are trivial to change
* work as it would be expected by *common sense* (no async state time shifts, complex nesting, etc...)
* do not force you to copy paste boilerplate code
* keep render performance high at 60fps or more (even when it was not optimised and a beginner wrote it)
* keep builds optimized under the hood for the latest multithreaded JS render engines

### Stack

Design pattern is initialized with [Create React App](https://github.com/facebook/create-react-app), then upgraded with the stack of automation:
* automatic state managment: [mobx-state-tree](https://github.com/mobxjs/mobx-state-tree)
* automatic CSS handling: [styled-components](https://github.com/styled-components/styled-components)
* automatic shouldComponentUpdate handling (React.PureComponent simplified): [mobx-react](https://github.com/mobxjs/mobx-react)

## Why it simplifies work

Pattern covers some of the most important topics for a good developer experience across the team:

- keeps the code [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
- greatly reduces [cognitive load](https://en.wikipedia.org/wiki/Cognitive_load)
- removes as much boilerplate code as possible (avoids flux refactoring nightmare by design)
- protects the developers from themselves (discourages "clever" and "hacky" solutions, most of the code are simple one-liners)

## How it simplifies work

**_Plug and play_** on all levels of developer experience, even **for designers**:
- designer can open a `component.style.js` and patch in some CSS tweaks on his own
- beginner programmer can:
  - render a `<store.Header>` component coming from store by simply adding it to JSX without passing any props, keys, ids or state, it "just works"
  - prepare a new component from CSS without bothering to wire it up to view getter inside of the store
- senior programmer:
  - has all of the most powerful automatic tools at his disposal
  - can get components prepared by juniors and not waste time on generic tasks
  - gets high FPS updates built in automatically
  - gets advanced environment while still keeping it simple enough to onboard anyone fast
  
## How it works

A styled-component gets wrapped together with props (into a closure) when getter returnes the component from the store.

The returned component uses the same name as the styled-component used to create it. This is to reduce cognitive load.

Store returns the component in a getter which makes it look (from outside) like the component itself is just a simple prop of the store. This prop is then used as a JSX element directly.

As there is **no need to pass the store** through props or context or global var or any other exotic means, this greatly simplifies code. The returned styled-component already has internally all information it needs to (re)render and refresh its content on its own automatically and only when it is needed. Everything *just works*.

## Environment

Minimal code needed for a complete React project takes **4 js files** inside of `/src`. That's it. Everything else is allready provided by Create React App.

Separate component and store files are added to subfolders as needed.

Test it live: https://codesandbox.io/s/github/andraz/mobx-styled-observers

## Why no routing?

Routing is avoided to keep the base implementation as simple as possible, 100% frontend, while still covering 98% of SPA use cases.

Routing can be later plugged into MST and exposed as a subtree. Url path can then be used in same way (automagically) as all of the state tree. At this point you would also need to configure http server to allow all subroutes returning index route etc... Serverside config is out of the scope of this pattern.
