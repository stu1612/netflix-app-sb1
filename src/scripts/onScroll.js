export default function onScroll(setter) {
  window.onscroll = () => {
    setter(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
}
