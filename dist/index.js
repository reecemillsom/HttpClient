"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NodeCache = require("node-cache");
var Cache_1 = require("./src/Cache/Cache");
var DeleteRequest_1 = require("./src/Request/DeleteRequest/DeleteRequest");
var GetRequest_1 = require("./src/Request/GetRequest/GetRequest");
var PostRequest_1 = require("./src/Request/PostRequest/PostRequest");
var PutRequest_1 = require("./src/Request/PutRequest/PutRequest");
var XMLHttpRequestFactory_1 = require("./src/XMLHttpRequestFactory/XMLHttpRequestFactory");
var nodeCache = new NodeCache({ stdTTL: 43200, checkperiod: 300 }), cache = new Cache_1.Cache(nodeCache), factory = new XMLHttpRequestFactory_1.XMLHttpRequestFactory(XMLHttpRequest), get = new GetRequest_1.GetRequest(factory, cache), post = new PostRequest_1.PostRequest(factory, cache), put = new PutRequest_1.PutRequest(factory, cache), del = new DeleteRequest_1.DeleteRequest(factory, cache);
exports.get = get;
exports.post = post;
exports.put = put;
exports.del = del;
