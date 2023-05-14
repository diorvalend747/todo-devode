export const options = [
  {
    value: "very-high",
    label: "Very High",
    color: "labelVeryHigh",
  },
  {
    value: "high",
    label: "High",
    color: "labelHigh",
  },
  {
    value: "normal",
    label: "Medium",
    color: "labelNormal",
  },
  {
    value: "low",
    label: "Low",
    color: "labelLow",
  },
  {
    value: "very-low",
    label: "Very Low",
    color: "labelVeryLow",
  },
];

export const sorting = [
  {
    value: "latest",
    label: "Terbaru",
  },
  {
    value: "oldest",
    label: "Terlama",
  },
  {
    value: "a-z",
    label: "A-Z",
  },
  {
    value: "z-a",
    label: "Z-A",
  },
  {
    value: "undone",
    label: "Belum Selesai",
  },
];

export function formatCurrentDate(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = Intl.DateTimeFormat("id-ID", options).format(date);
  return formattedDate;
}
