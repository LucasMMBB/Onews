import json
import pyjsonrpc
import os
import sys

from bson.json_util import dumps

SERVER_HOST = 'localhost'
SERVER_PORT = 4040

class RequestHandler(pyjsonrpc.HttpRequestHandler):
    @pyjsonrpc.rpcmethod
    def add(self, a, b):
        # test
        return a + b 

http_server = pyjsonrpc.ThreadingHttpServer(
        server_address = (SERVER_HOST, SERVER_PORT),
        RequestHandlerClass = RequestHandler
)

print "starting server %s:%d" % (SERVER_HOST, SERVER_PORT)
http_server.serve_forever()

