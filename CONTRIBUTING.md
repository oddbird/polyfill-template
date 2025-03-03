# Contributing to My Polyfill

Ideas, issues, and pull-requests are welcome!

- [**Github Issues**](https://github.com/oddbird/<POLYFILL-REPO>/issues/)
  are the best place to request a feature, file a bug, or just ask a question.
  Also a great place to discuss possible features before you submit a PR.
- **Pull Requests** are a big help, if you're willing to jump in and make things
  happen. For a bugfix, or documentation, just jump right in. For major changes
  or new features, it's best to discuss in an issue first.

## Conduct

Please follow the [OddBird Code of Conduct](https://www.oddbird.net/conduct/).

## Development

- Clone the repository.
- Install dependencies: `npm install`.
- Start dev server: `npm run serve`. Visit `localhost:3000`.

## Code style

JS code is formatted with prettier, and CSS is formatted with stylelint.

- Lint: `npm run lint:ci`
- Format & lint: `npm run lint`

We recommend setting up your IDE to automatically format code for you.

## Testing

Unit tests and end-to-end tests are available in the `tests/` folder.

- Run all tests: `npm run test`
- Run unit tests: `npm run test:unit`
- Run end-to-end tests:
  - Configure Playwright (this step is only required once or when the version of
    `@playwright/test` changes in package.json):
    `npx playwright install --with-deps`
  - Run tests (Chromium only): `npm run test:e2e`
  - Run tests (Chromium, Firefox & Webkit): `npm run test:e2e:ci`
