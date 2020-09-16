# Contributing

Requires `yarn` (`npm` alternative). [Install Yarn](https://yarnpkg.com/getting-started/install).

## Building

```
yarn run build
```

## Testing
No automated tests for this project yet. It's relatively simple.

Run the build command first, then test in the browser by running a local server like `http-server` in the project directory, and loading index.html.

## Publishing

Requires `np`
```
yarn global add np
```

Publish a patch and set up the Github tags and release.
```
yarn run publish-patch
```

## Notes

We're currently manually concatting dash.js into the web component javascript bundle because of issues relying on rollup and imports. Something about how dash.js does imports of certain dependencies doesn't play nice with the rollup model. [See this issue.](https://github.com/Dash-Industry-Forum/dash.js/issues/3366)
