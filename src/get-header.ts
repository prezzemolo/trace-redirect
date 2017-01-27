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
			"path":		parsedUrl.path
		};

		const callback = (res: any) => {
			resolve(res.headers);
		};

		/* request page */
		const req = parsedUrl.protocol === "http:"
			? http.request(options, callback)
			: parsedUrl.protocol === "https:"
			? https.request(options, callback)
			: null;

		/* reject when not supported protocol */
		if (req === null) reject("not-supported-protocol");

		req.end();
	});
};
