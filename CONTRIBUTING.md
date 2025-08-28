# Contributing to RailroadDocs

By contributing code to the RailroadDocs repository, you:

- Own all the rights to the code in your pull request
- Consent to the publishing of your code publicly

## How to start contributing

### Use a personal fork, not an Organization

We may modify your pull request for you, rather than requesting you to make the changes yourself, for efficiency purposes. However, if your fork is hosted on an Organization, we cannot make such changes, so we request that you use a personal fork in your pull requests.

### Requirements

To start adding your content to RailroadDocs, you will need the following software:

- A nodejs version manager
- NPM

Once you have those installed, install the required dependencies with `npm i`, then you may run the dev server by executing: `npm run dev` in the root of the project.
You will then be given a url to follow to view your locally hosted instance of RailroadDocs.

### Pull Request Requirements

We don't want to waste your or our time on pull requests that just can't be justified. Hence these guidelines each and every pull request must adhere to.

- You must be able to justify the pull request.

  It must fulfill at least one of these requirements:
  - Add undocumented feature(s) to the site, to aid developers who may want to learn about such feature(s).
  - Fix errors or mistakes in existing files.
  - Clarify or rewrite existing documents to provide an easier and clearer experience for any readers.
  - Improve the experience of any reader.
- All additions must be written in English, alongside any other language you can provide accurate translations for.
- All modified files must adhere to our Formatting Guide.
- All content must be PG.
- Any and all content, including translations, must be created by a human.
- At the point of review, the pull request must be up to date with the latest version of the base branch.

### Formatting Guidelines

We want to make sure that all content added is of a same standard to any other piece, so please keep these guidelines in mind at all times.
We suggest installing the markdownlint plugin, as it comes with a good set of guidelines for formatting markdown files.

- Headers must be used in ascending order.
- All sentences must end in a full stop.
- Any references to class names or methods must be surrounded using "`".
- All code snippets must be in code blocks, which are created using "\`\`\`java --code here --\`\`\`"
- Any API feature page must have an accurate and descriptive example
