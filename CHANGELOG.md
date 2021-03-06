# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.0.1"></a>
# [2.0.1](https://github.com/danibram/trustly-client/compare/v2.0.0...v2.0.1) (2017-12-01)

### Updates

- Better configuration

### Fixes

- Fixes on examples
- Fix on create notification response

<a name="2.0.0"></a>
# [2.0.0](https://github.com/danibram/trustly-client/compare/v1.3.7...v2.0.0) (2017-11-21)

### Features

- Rewrite completely in typescript
- Remove unused libs
- Promise style
- You dont need to use anymore init(), it automatically do for you
- And more... Stay tuned

### Deprecations

- No more `.init()`
- No more callback style

<a name="1.3.7"></a>
## [1.3.7](https://github.com/danibram/trustly-client/compare/v1.3.6...v1.3.7) (2017-11-21)

### Fixes

- Fix Error on serialization


<a name="1.3.5"></a>
## [1.3.5](https://github.com/danibram/trustly-client/compare/v1.2.0...v1.3.5) (old)

### Features

- Added RequestDirectDebitMandate in deposit
- Added withdraw (thanks @rizr)
- Added approveWithdrawal (thanks @rizr)
- Added denyWithdrawal (thanks @rizr)

### Fixes

- Remaining field in charge method
- Use uuid instead node-uuid
- Updated all attributes


<a name="1.2.0"></a>
## [1.2.0](https://github.com/danibram/trustly-client/compare/v1.1.3...v1.2.0) (old)

### Features

- Added charge (thanks @Iteam1337)
- Added select account (thanks @Iteam1337)

<a name="1.1.3"></a>
## [1.1.3](https://github.com/danibram/trustly-client/compare/v1.1.1...v1.1.3) (old)

### Features

- Working for Deposit, Refund and management of notifications.

### Fixes

- Better management of the errors.
- Correct and fix refund.

<a name="1.1.1"></a>
## [1.1.1](https://github.com/danibram/trustly-client/compare/v1.1.0...v1.1.1) (old)

### Fixes

- Fix problems with notifications some example updates.

<a name="1.1.0"></a>
## [1.1.0](https://github.com/danibram/trustly-client/compare/v1.0.4...v1.1.0) (old)

### Fixes

- Correct notifications handling, remove "handleNotification" is replaced by "createNotificationResponse", more correct, and added an express server as example.

<a name="1.0.4"></a>
## [1.0.4](https://github.com/danibram/trustly-client/compare/v1.0.4...v1.0.4) (old)

### Features

- Updates in packages.
- Update the load method.
- Added callback example.
- Fix paths, problems with the keys.

<a name="1.0.0"></a>
## [1.0.0]() (old)

### Features

- Firsts release.
- Added Deposit
- Added Refund
- Added handleNotification functions.
- Added Sign
- Added verify
- Added compose requests, and responses done.