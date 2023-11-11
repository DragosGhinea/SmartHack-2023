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
        print(content_length)
        data_string = self.rfile.read(int(content_length))

        response = requests.post(
            "https://data.veridion.com/search/v1/companies",
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

        self.end_headers()
        self.wfile.write(response.content)


httpd = socketserver.TCPServer(("", PORT), MyProxy)
print("Now serving at", str(PORT))
httpd.serve_forever()
