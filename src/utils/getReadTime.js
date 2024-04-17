export default function getReadTime(ev) {
  const lettersPerSecond = 0.09;

  let textLength = ev.length;

  if (textLength > 0) {
    return textLength * lettersPerSecond;
  }

  return 0;
}
