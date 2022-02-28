import FontFaceObserver from "fontfaceobserver";

export default async function handleFontLoad(fontName: string, fallbackStyle: string) {
  const fallbackStyleSheet = document.createElement("style");
  fallbackStyleSheet.innerHTML = fallbackStyle;
  document.head.appendChild(fallbackStyleSheet);

  try {
    await new FontFaceObserver(fontName).load();

    fallbackStyleSheet.parentElement?.removeChild(fallbackStyleSheet);
  } catch (err) {
    console.error(`Font ${fontName} was unable to load`);
  }
}
