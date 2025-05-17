export interface TextStyles {
  fontSize: string; // rem;
  lineHeight: string; // em or px;
}

export function calculateTextHeight({ fontSize, lineHeight }: TextStyles) {
  return `calc(${fontSize} * ${lineHeight})`;
}
