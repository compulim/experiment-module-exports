# Background

Experiment using the new Node.js "exports map" feature. The feature was introduced as experimental in Node 12 and shipped in Node 13.

## How to run

- `npm ci`
- `npm run bootstrap`
- `npm start`

## Related read

- https://github.com/nodejs/node/issues/21787
- https://github.com/jkrems/proposal-pkg-exports

## 2020-09-25

Tested with `create-react-app` 3.4.3 (React 16.13.1), and it is not working.

It seems the resolve module inside Webpack doesn't support it yet.
