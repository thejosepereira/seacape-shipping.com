import os
from http.server import HTTPServer, SimpleHTTPRequestHandler

os.chdir(os.path.dirname(os.path.abspath(__file__)))

class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        path = self.path.split('?')[0].split('#')[0]
        if path == '/' or '.' not in os.path.basename(path):
            for c in [path.rstrip('/') + '.html', path.rstrip('/') + '/index.html']:
                if os.path.exists('.' + c):
                    self.path = c
                    break
        return super().do_GET()
    def log_message(self, *a): pass

port = int(os.environ.get('PORT', 3456))
HTTPServer(('', port), Handler).serve_forever()
