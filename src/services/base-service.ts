export class BaseService {

    private static encodeQueryString(params: any) {
        const keys = Object.keys(params)
        return keys.length
            ? "?" + keys
                .map(key => encodeURIComponent(key)
                    + "=" + encodeURIComponent(params[key]))
                .join("&")
            : "";
    }

    private static buildURL(url: URL|string, params: any): string {
        return url + BaseService.encodeQueryString(params);
    }

    public static async get<T>(url: URL|string, params: any): Promise<T> {
        let parsedURL = BaseService.buildURL(url, params)
        let response = await fetch(
            parsedURL,
            { next: { revalidate: 10 } }
        );
        return await response.json();
    }
}