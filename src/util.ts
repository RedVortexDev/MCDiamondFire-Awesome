export function objectMap<T, R>(obj: Record<string, T>, func: (key: string, value: T) => R): R[] {
    const result = []
    for(const key in obj) {
        result.push(func(key, obj[key]))
    }
    return result
}

export function isMd() {
    return matchMedia("(min-width: 768px)").matches
}

export function niceUrl(url: string) {
    return url.replaceAll(/(^\w+:\/\/)/g, "") // protocol (https://)
            .replaceAll(/^www\./g, "") // www.
            .replaceAll(/\/$/g, "") // trailing slash

}