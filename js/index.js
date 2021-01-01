$(function () {
  const argsTag = '[object Arguments]';
  const arrayTag = '[object Array]';
  const boolTag = '[object Boolean]';
  const dateTag = '[object Date]';
  const errorTag = '[object Error]';
  const mapTag = '[object Map]';
  const numberTag = '[object Number]';
  const objectTag = '[object Object]';
  const regexpTag = '[object RegExp]';
  const setTag = '[object Set]';
  const stringTag = '[object String]';
  const symbolTag = '[object Symbol]';
  const weakMapTag = '[object WeakMap]';

  const arrayBufferTag = '[object ArrayBuffer]';
  const dataViewTag = '[object DataView]';
  const float32Tag = '[object Float32Array]';
  const float64Tag = '[object Float64Array]';
  const int8Tag = '[object Int8Array]';
  const int16Tag = '[object Int16Array]';
  const int32Tag = '[object Int32Array]';
  const uint8Tag = '[object Uint8Array]';
  const uint8ClampedTag = '[object Uint8ClampedArray]';
  const uint16Tag = '[object Uint16Array]';
  const uint32Tag = '[object Uint32Array]';

  const cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[
    arrayBufferTag
  ] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[
    dateTag
  ] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[
    int8Tag
  ] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[
    mapTag
  ] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[
    regexpTag
  ] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[
    symbolTag
  ] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[
    uint16Tag
  ] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[weakMapTag] = false;

  $('.judge__gallery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.judge__nav',
  });

  $('.judge__nav').slick({
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.judge__gallery',
    autoplay: true,
    dots: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
    ],
  });

  window.addEventListener('hashchange', function (event) {
    event.preventDefault();
    const url = location.hash.substr(1);
    const target = document.querySelector(`.${url}`).offsetTop - 60;
    window.scrollTo({
      top: target,
      left: 0,
      behavior: 'smooth',
    });
  });

  document.addEventListener(
    'wheel',
    () => {
      if (window.scrollY > 50) {
        document.querySelector('.nav').classList.add('nav-scrolled');
      } else {
        document.querySelector('.nav').classList.remove('nav-scrolled');
      }
    },
    { capture: false, passive: true }
  );
});
