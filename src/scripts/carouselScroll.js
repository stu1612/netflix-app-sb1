export default function carouselScroll(
  direction,
  setterState,
  ref,
  index,
  setterIndex
) {
  setterState(true);
  let distance = ref.current.getBoundingClientRect().x - 50;
  if (direction === "left" && index > 0) {
    setterIndex(index - 1);
    ref.current.style.transform = `translateX(${290 + distance}px)`;
  }
  if (direction === "right" && index < 5) {
    setterIndex(index + 1);
    ref.current.style.transform = `translateX(${-290 + distance}px)`;
  }
}
