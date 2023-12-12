export function removeDuplicates(array: any[], property: string) {
  const seen = new Set();
  return array.filter(obj => {
    const value = obj[property];
    if (!seen.has(value)) {
      seen.add(value);
      return true;
    }
    return false;
  });
}