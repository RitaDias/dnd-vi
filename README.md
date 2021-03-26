# What is this?

This is a side project that when looking at a d&d monster will suggest good spells to fight against it.
Used to refresh react and get a chance to use GraphQL and Hooks.

!["List of Mosters with default image and chip. Opens a modal for spells that would work / not work against it"](./src/Assets/monster-vi.gif)

# Is it finished?

Not even close!
Here's a list of to dos more or less by order:

- [ ] Write basic unit tests
- [ ] Add Loading animation (on first load)
- [X] Fix background color (so that it occupies the whole screen on loading)
- [X] Add empty state for when no spells are on the list (image)
- [ ] Add loading animation (for spells fetching)
- [ ] Make design for spell card more consistent (fix the names that spill into two lines)
- [ ] Add a search for Monster
- [ ] Add a filter for Monster Type
- [ ] Add filter for spells types in modal
- [ ] _Add a spells search in modal_
- [X] Renaming components to more closely match what they are
- [ ] _Add memoisation in Modal Components_
- [ ] Look into windowing technics for the monster list

And here's a list of ideas that I think I will continue working on for the future!

- When clicking a spell in the modal, open a modal focused on the spell. The lists that will be shown are monsters that have vunerabilities, immunities and resistances to the picked spell type.

## Browser compatibility

IE is a no-go :(

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
