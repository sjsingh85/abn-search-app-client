export function parseABN(str: string) {
  const noSpacesStr = str.replace(/\s+/g, "");
  const abn = Number(noSpacesStr);
  if (isNaN(abn)) {
    return null;
  }

  return abn;
}
