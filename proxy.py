import socketserver
import http.server
import urllib.request
import requests

PORT = 9098
HEADERS = {
    "Content-Type": "application/json",
    "x-api-key": "pXStedvXkA9pMcNK1tWvx_4DesmTsIZ47qfTa6WkqFxgrCvCqJA0mpALQ53J",
}


class MyProxy(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        content_length = self.headers["Content-Length"]
        data_string = self.rfile.read(int(content_length))

        response = requests.post(
            "https://data.veridion.com/search/v1/companies?page_size=50",
            data=data_string,
            headers=HEADERS,
        )
        try:
            self.send_response(response.status_code)
            response.raise_for_status()  # Raises an HTTPError if the HTTP request returned an unsuccessful status code
        except requests.exceptions.RequestException as e:
            # Handle exceptions (e.g., network errors)
            self.send_error(500, str(e))
            return

        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(response.content)

    def do_OPTIONS(self):
        self.send_response(200, "OK")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "X-Requested-With")
        self.send_header("Access-Control-Allow-Credentials", "true")
        self.send_header(
            "Access-Control-Allow-Headers",
            "Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control",
        )
        self.end_headers()


httpd = socketserver.TCPServer(("", PORT), MyProxy)
print("Now serving at", str(PORT))
httpd.serve_forever()
