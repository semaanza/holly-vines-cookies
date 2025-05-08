export const formatPhoneNumber = (value) => {
  const cleaned = value.replace(/\D/g, ""); // Remove non-digit characters
  const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
  if (!match) return value;
  const [, area, prefix, line] = match;
  if (line) return `(${area}) ${prefix}-${line}`;
  if (prefix) return `(${area}) ${prefix}`;
  if (area) return `(${area}`;
  return "";
};
