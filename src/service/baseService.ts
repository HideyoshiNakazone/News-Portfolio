export class BaseService {

    private encodeQueryString(params: any) {
        const keys = Object.keys(params)
        return keys.length
            ? "?" + keys
                .map(key => encodeURIComponent(key)
                    + "=" + encodeURIComponent(params[key]))
                .join("&")
            : "";
    }

    private buildURL(url: URL|string, params: any): string {
        return url + this.encodeQueryString(params);
    }

    public async get<T>(url: URL|string, params: any): Promise<T> {
        let response = await fetch(
            this.buildURL(url, params),
            { next: { revalidate: 10 } }
        );
        return await response.json();
    }
}