export function formatToMonthDay(isoString: string): string {
  // Dateへ変換
  const date = new Date(isoString);

  const formatter = new Intl.DateTimeFormat("ja-JP", {
    year: "2-digit",
    month: "numeric",
    day: "numeric",
  });

  return formatter.format(date);
}