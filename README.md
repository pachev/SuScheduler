# SuScheduler

## Testing

Installed through bower(already included in repo):
* angular
* angular-mocks

Installed through npm(already included in repo, think about ignoring):
`npm install bower karma karma-cli jasmine karma-jasmine phantomjs-prebuilt karma-phantomjs-launcher --save-dev`

it's best to install all at the same time and with `--save-dev` flag. Also, to
avoid any errors you should instlal the same version of angular-mocks as the
angular version currently being used by ionic.

You need gulp and ionic installed globally with `npm -g`.

Now when running `ionic --serve` you should see `Finished 'karma' after...`,
on startup and: `PhantomJS 2.1.1 (Linux 0.0.0): Executed 1 of 1 SUCCESS` after
all file writes that don't break tests.
