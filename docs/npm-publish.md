# Publishing a package

## Set up

`npm adduser` will allow you to log in on your browser.

# Publish

`npm publish` publishes a package to the registry so that it can be installed by name. This include making updates to an already published package.

The cli should require you to authenticate your account.

# SemVer

While I'm making an exception with my first package, remember to follow semantic versioning.

`npm version patch` or `npm version minor` can help you with that.

`git push --tags` will additionally push the new tag you made on your remote branch.