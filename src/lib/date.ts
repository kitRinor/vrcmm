

export function formatToDateTime(timestamp: string): string {
  const date = new Date(timestamp);
  return date.toLocaleString();
}
export function formatToDate(timestamp: string): string {
  const date = new Date(timestamp);
  return date.toLocaleDateString();
}
export function formatToTime(timestamp: string): string {
  const date = new Date(timestamp);
  return date.toLocaleTimeString();
}