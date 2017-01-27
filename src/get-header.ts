/* import modules */
import * as http from "http";
import * as https from "https";
import * as URL from "url";

/* returns header object */
export default function (url: string): Promise<any> {
	return new Promise((resolve, reject) => {
		/* parse url to URLObject */
		const parsedUrl = URL.parse(url);

		/* structure option object for http / https module */
		const options = {
			"headers": {
				"User-Agent": "track-redirect npm module"
			},
			"host":		parsedUrl.hostname,
			"method":	"HEAD",
			"path":		parsedUrl.path,
			"port":		Number(parsedUrl.port)
		};

		/* request page */
		if (parsedUrl.protocol === "http:") {
			const req = http.request(options, (res) => {
				resolve(res.headers);
			});
			req.end();
		} else if (parsedUrl.protocol === "https:") {
			const req = https.request(options, (res) => {
				resolve(res.headers);
			});
			req.end();
		}
	});
};
