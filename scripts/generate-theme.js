const fs = require('fs');
const path = require('path');

const { kebabCase } = require('lodash');

const PAPYRUS_COLLECTION = 'Papyrus UI';

const INPUT_FILE_PATH =
  'packages/theme/src/assets/design-tokens/design-tokens.json';

const OUTPUT_DIR_PATH = 'packages/theme/src/assets/themes/';

const FALLBACK_FONTS =
  "system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'";

const fontWeightMapping = {
  Thin: '100',
  ExtraLight: '200',
  Light: '300',
  Regular: '400',
  Medium: '500',
  SemiBold: '600',
  Bold: '700',
  ExtraBold: '800',
  Black: '900',
};

const textDecorationMapping = {
  NONE: 'none',
};

const textTransformMapping = {
  ORIGINAL: 'none',
  UPPER: 'uppercase',
};

// Helper function to format effect tokens into a CSS box-shadow string
const formatEffectToken = (effects) =>
  effects
    .map((effect) => {
      const color = `rgba(${effect.color.r}, ${effect.color.g}, ${effect.color.b}, ${effect.color.a})`;
      return `${effect.type === 'INNER_SHADOW' ? 'inset ' : ''}${
        effect.offset.x
      }px ${effect.offset.y}px ${effect.radius}px ${effect.spread}px ${color}`;
    })
    .join(', ');

// Helper function to format typography tokens into CSS-compatible values
const formatTypographyToken = (typography) => {
  const {
    fontSize,
    fontFamily,
    fontWeight,
    lineHeight,
    lineHeightUnit,
    letterSpacing,
    letterSpacingUnit,
    textCase,
    textDecoration,
  } = typography;
  const formattedFontFamily = `'${fontFamily}', ${FALLBACK_FONTS}`;
  const formattedFontSize = `${fontSize / 16}rem`;
  const formattedFontWeight = fontWeightMapping[fontWeight] || '400';

  const formattedLineHeight =
    lineHeightUnit === 'PERCENT'
      ? `${lineHeight / 100}`
      : `${lineHeight / 16 / (fontSize / 16)}`;

  const formattedLetterSpacing =
    letterSpacingUnit === 'PERCENT'
      ? `${letterSpacing / 100}em`
      : `${letterSpacing / 16}rem`;

  const formattedTextTransform = textTransformMapping[textCase] || 'none';

  const formattedTextDecoration =
    textDecorationMapping[textDecoration] || 'none';

  return {
    fontFamily: formattedFontFamily,
    fontSize: formattedFontSize,
    fontWeight: formattedFontWeight,
    lineHeight: formattedLineHeight,
    letterSpacing: formattedLetterSpacing,
    textTransform: formattedTextTransform,
    textDecoration: formattedTextDecoration,
  };
};

// Helper function to set nested properties based on token name
const setNestedProperty = (obj, keyParts, value) => {
  let current = obj;
  for (let i = 0; i < keyParts.length - 1; i++) {
    const part = keyParts[i];
    current[part] = current[part] || {};
    current = current[part];
  }
  current[keyParts[keyParts.length - 1]] = value;
};

// Function to recursively process tokens
const processTokens = (tokens) => {
  const result = {};

  tokens.forEach((token) => {
    let tokenGroup = result;
    const tokenNameParts = token.name.split('/');

    // If typography, place it under the 'typography' group
    if (token.type === 'typography') {
      tokenGroup = result['typography'] = result['typography'] || {};
    }

    // Create the value depending on the token type
    let tokenValue;
    switch (token.type) {
      case 'color':
      case 'string':
        tokenValue = token.value;
        break;
      case 'number':
        tokenValue = `${token.value / 16}rem`;
        break;
      case 'typography':
        tokenValue = formatTypographyToken(token.value);
        break;
      case 'effect':
        tokenValue = formatEffectToken(token.value.effects);
        break;
      default:
        tokenValue = token.value;
    }

    // Set the nested property based on the token name parts
    setNestedProperty(tokenGroup, tokenNameParts, tokenValue);
  });

  return result;
};

// Function to generate mode-specific files
const generateModeFiles = (collections) => {
  const papyrusUI = collections.find(
    (collection) => collection.name === PAPYRUS_COLLECTION,
  );
  const otherCollections = collections.filter(
    (collection) => collection.name !== PAPYRUS_COLLECTION,
  );

  if (!papyrusUI) {
    throw new Error('Papyrus UI collection not found');
  }

  papyrusUI.modes.forEach((mode) => {
    const modeData = processTokens(mode.variables);

    // Distribute other collections to each mode file
    otherCollections.forEach((collection) => {
      const collectionData = processTokens(collection.modes[0].variables); // Assuming single mode for non-Papyrus collections
      Object.assign(modeData, collectionData);
    });

    const outputFileName = `${kebabCase(mode.name)}.json`;
    const outputFilePath = path.join(OUTPUT_DIR_PATH, outputFileName);

    fs.writeFileSync(outputFilePath, JSON.stringify(modeData, null, 2));
    console.log(`Generated: ${outputFileName}`);
  });
};

// Read and parse the design tokens JSON file
const designTokens = JSON.parse(fs.readFileSync(INPUT_FILE_PATH, 'utf-8'));

// Generate the files
generateModeFiles(designTokens.collections);
