function formatNumber(num: number) {
  if (num >= 1000000000) {
    // Convert to Billion
    return (num / 1000000000).toFixed(2) + " B";
  } else if (num >= 1000000) {
    // Convert to Million
    return (num / 1000000).toFixed(2) + " M";
  } else if (num >= 1000) {
    // Convert to Thousand (K)
    return (num / 1000).toFixed(2) + " K";
  } else {
    // Return the number as is if it's less than 1000
    return num.toString();
  }
}

export default formatNumber;
