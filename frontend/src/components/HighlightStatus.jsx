export const getHighlightStatusStyle = (isHighlight) => {
    if (isHighlight) {
      return {
        position: 'absolute',
        top: 10,
        right: 10,
        color: 'yellow',
      };
    }
    return {};
  };
  