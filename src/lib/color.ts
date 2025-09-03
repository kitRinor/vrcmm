// get color with selected alpha 
export function getAlphaedColor(color: string, alpha: number) {
  if (color.startsWith("#")) {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } else if (color.startsWith("rgb")) {
    const rgb = color.match(/\d+/g);
    if (rgb) {
      const r = parseInt(rgb[0], 10);
      const g = parseInt(rgb[1], 10);
      const b = parseInt(rgb[2], 10);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
  }
  return color;
}
