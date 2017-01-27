import get from "./get-header";

export default async (url: string): Promise<string> => {
	let destination = url;
	while (true) {
		const header = await get(destination);
		if (header.location) {
			destination = header.location;
		} else {
			break;
		}
	}
	return destination;
};
