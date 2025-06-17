export const getDictionary = async (locale: string) => {
  const cleanLocale = locale.replace(/[^a-z-]/gi, "") as "pt-br" | "en";

  switch (cleanLocale) {
    case "en":
      return import("./dictionaries/en.json").then((mod) => mod.default);
    case "pt-br":
      return import("./dictionaries/pt-br.json").then((mod) => mod.default);
    default:
      throw new Error(`Unsupported locale: ${locale}`);
  }
};
