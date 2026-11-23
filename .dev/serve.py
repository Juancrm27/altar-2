"""Local preview server that disables browser caching, so every reload picks up the latest build."""
import functools
import http.server
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARGS = [a for a in sys.argv[1:] if not a.startswith("--")]
PORT = int(ARGS[0]) if ARGS else 4173
# --host: listen on every interface so a phone on the same network can open the preview.
HOST = "0.0.0.0" if "--host" in sys.argv[1:] else "127.0.0.1"


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        super().end_headers()


if __name__ == "__main__":
    handler = functools.partial(NoCacheHandler, directory=ROOT)
    with http.server.ThreadingHTTPServer((HOST, PORT), handler) as server:
        print(f"Preview on http://127.0.0.1:{PORT}/.dev/preview.html", flush=True)
        if HOST == "0.0.0.0":
            import socket
            s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
            try:
                s.connect(("10.255.255.255", 1)); ip = s.getsockname()[0]
            except OSError:
                ip = None
            finally:
                s.close()
            if ip:
                print(f"Network:  http://{ip}:{PORT}/.dev/preview.html", flush=True)
        server.serve_forever()
