export default function useDomProps(domElement) {
  if (domElement) {
    const element = document.getElementById(domElement);
    const rect = element.getElementById(domElement).getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
      width: element.offsetWidth,
      height: element.offsetHeight,
    };
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}
