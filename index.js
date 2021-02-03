var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;


  const jwt = require('express-jwt');
  const jwksRsa = require('jwks-rsa');

  // The issuer refers to the Merchant Center API Gateway URL.
  const issuer = 'https://mc-api.europe-west1.gcp.commercetools.com';
  // The audience refers to the forwarded target URL (same value as in `X-Forward-To` header)
  const audience = 'https://external-server.now.sh/sayhi';


  app.use(
    jwt({
      // Dynamically provide a signing key based on the kid in the header
      // and the singing keys provided by the JWKS endpoint
      secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        // The JWKS endpoint is also available from the discovery endpoint
        // `${audience}/.well-known/openid-configuration`
        // in case you wish to retrieve it programmatically.
        jwksUri: `${issuer}/.well-known/jwks.json`,
      }),

      // Validate the audience and the issuer.
      audience,
      issuer,
      algorithms: ['RS256'],
    })
  );


var routes = require('./api/routes/main'); //importing route
routes(app); //register the route



app.listen(port);

console.log('Test ' + port);
