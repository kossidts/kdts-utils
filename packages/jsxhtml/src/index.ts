/**
 * A tag function that enables writting jsx like template literals
 */
export function jsxhtml(strings: TemplateStringsArray, ...values: unknown[]): string {
    let out = "";
    strings.forEach((str, idx) => {
        out += str;
        const value = values[idx];
        // Join arrays to strings
        if (Array.isArray(value)) {
            out += value.join("");
        }
        // Add strings and numbers. Numbers will be coerced to string.
        else if (typeof value === "string" || typeof value === "number") {
            out += value;
        }
        // object, undefined, null, boolean - Don't output a value.
    });
    return out;
}
