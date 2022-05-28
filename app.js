/**
 * Rapyd Integrations: Request Signature.
 *
 * This app implements the Rapyd's API request signature. The crypto-js library
 * is required (https://www.npmjs.com/package/crypto-js). To install it, run:
 * 
 * npm install crypto-js
 *
 * @link   https://docs.rapyd.net/
 * @file   This files defines the main node.js application.
 * @author Isaac Benitez.
 * @version 0.0.1
 * 
 * @requires express
 * @requires https
 * @requires crypto-js
 */

 const express = require('express');

 const makeRequest = require('./utilities').makeRequest;
 
 const app = express();
 
 app.set('json spaces', 4);
 
 app.listen(5000);
 
 app.get('/country', async (req, res) => {
 
     try {
         const result = await makeRequest('GET', '/v1/payment_methods/country?country=it');
     
         res.json(result);
       } catch (error) {
         res.json(error);
       }
 
 })
 
 app.get('/country', async (req, res) => {
 
     try {
         const result = await makeRequest('GET', '/v1/payment_methods/country?country=it');
     
         res.json(result);
       } catch (error) {
         res.json(error);
       }
 
 })
 
 app.get('/checkout', async (req, res) => {
 
     try {
         const body = {
             "amount": 100,
             "complete_payment_url": "http://example.com/complete",
             "country": "SG",
             "currency": "SGD",
             "error_payment_url": "http://example.com/error",
             "merchant_reference_id": "0912-2021",
             "language": "en",
             "metadata": {
                 "merchant_defined": true
             },
             "payment_method_types_include": [
                 "sg_grabpay_ewallet"
             ]
         }
 
         const result = await makeRequest('POST', '/v1/checkout', body);
         res.json(result);
     } catch (error) {
         res.json(error);
     }
 
 })
 
 