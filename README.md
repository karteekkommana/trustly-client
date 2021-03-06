# Trustly Client

[![Greenkeeper badge](https://badges.greenkeeper.io/danibram/trustly-client.svg)](https://greenkeeper.io/)
[![Dependency Status](https://david-dm.org/danibram/trustly-client.svg)](https://david-dm.org/danibram/trustly-client)

Node.js client for trustly integrations. Rewrite completely to Typescript and updated to use lasts libraries.


## Quickstart

### Installation

Install the module with: `npm install trustly-client` or `yarn add trustly-client`

### Usage

```javascript

    // In Vanilla javascript
    var client = require('trustly-client').default // Import it
    var tClientKP = client(configuration);         // Fill the configuration

    tClientKP                                      // Ready to use
        .deposit({
            NotificationURL: 'http://127.0.0.1:4343/notification',
            EndUserID: 'john.doe@example.com',
            MessageID: '111112111221',
            Locale: 'es_ES',
            Amount: '1.00',
            Currency: 'EUR',
            SuccessURL: 'http://127.0.0.1:4343/success',
            FailURL: 'http://127.0.0.1:4343/fail'
        })
        .then(function (response) {
            console.log(util.inspect(response, false, 20, true));
        })
        .catch(function (error) {
            console.log(util.inspect(error, false, 20, true));
        });

    // In Typescript
    import client from 'trustly-client'            // Import it
    let tClient = client(configuration)            // Fill the configuration

    tClientKP                                      // Ready to use
        .deposit({
            NotificationURL: 'http://127.0.0.1:4343/notification',
            EndUserID: 'john.doe@example.com',
            MessageID: '111112111221',
            Locale: 'es_ES',
            Amount: '1.00',
            Currency: 'EUR',
            SuccessURL: 'http://127.0.0.1:4343/success',
            FailURL: 'http://127.0.0.1:4343/fail'
        })
        .then(function (response) {
            console.log(util.inspect(response, false, 20, true));
        })
        .catch(function (error) {
            console.log(util.inspect(error, false, 20, true));
        })
```

## Documentation

### Initialization

After import the library you must configure it with your data:

```javascript
    import client from 'trustly-client'            // Import it
    let tClient = client(configuration)            // Fill the configuration
```

This configuration is an object and this is the structure:

- [required] 'privateKeyPath': Path to you private key
- [required] 'username': Your trustly api username
- [required] 'password': Your trustly api password
- [optional] 'publicKeyPath': Path to a public key (for the general cases you don't need it, i package the trusty public key)
- [optional] 'endpoint': By default is selected depending of the environment between "" and "".
- [optional] 'environment': By default is "development"

### Usage

This are the methods availables:

- **'deposit'** : Create a deposit request.
- **'refund'** : Create a refund request.
- **'selectAccount'** : Create a refund request.
- **'charge'** : Create a refund request.
- **'withdraw'** : Create a refund request.
- **'approveWithdrawal'** : Create a refund request.
- **'denyWithdrawal'** : Create a refund request.
- **'createNotificationResponse'** : Helper that:
    - Verify the signature and the data from trustly
    - Compose the data you need to send to trustly to answer the notifications, it will be returned as an output fro this method

All trustly methods (deposit, refund, selectAccount, charge, withdraw, approveWithdrawal, denyWithdrawal) uses the parameters described in trusty documentation. [here (trustly docs)](https://trustly.com/en/developer/api#/introduction).
If is something missing please make a pull request or write an issue.

Method **'createNotificationResponse'** accepts a Json string or a Json with the notification, and compose for you te correct response for Trustly. See [tests/notification-server/test-notification-server.js](https://github.com/danibram/trustly-client/blob/master/tests/notification-server/test-notification-server.js), inside you have an already express server that you can deploy anywhere (dont forget to update with your configuration), and test the notifications.

Also it is exported helpers to sign, verify, interfaces, all configuration etc... So feel free to use it, if there is any doubt dont be shy, write an issue, a pull request or an email to me.

## Errors

Managing errors is the key of a client, so for that trustly client always send the lastRequest and lastResponse (If there it be), and also i parse the most important parts for you according to the documentation, the final structure, is:

```javascript
    var error = {
        lastRequest: self._lastRequest,
        lastResponse: self._lastResponse,
        trustlyError: null,
        clientError: null
    };
```
It seems to long but sometimes you must understand the request and the response.

If *clientError* is filled, means that the error not comes from trustly.
If *trustlyError* is filled, it will catch all information about the trustly error in this format (Example):
```javascript
    trustlyError = {
        method: 'Deposit',
        uuid: 'dba2d98c-6c4e-4b9e-aa46-90027793aa14',
        message: 'ERROR_DUPLICATE_MESSAGE_ID',
        code: 637
    };
```
*Note: method and uuid can be null if the request contains a malformed JSON*
More information about the errors [here (trustly docs)](https://trustly.com/en/developer/api#/errormessages)

## Release History

See [CHANGELOG.md](https://github.com/danibram/trustly-client/blob/master/CHANGELOG.md)

## License

Licensed under the MIT license. 2017
