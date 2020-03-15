/* eslint-disable */
'use strict';

$('.hslider').slick({
  infinite: true,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 1,
  dots: true,
});

$('.sslider').slick({
  infinite: false,
  variableWidth: true,
  slidesToShow: 4,
  dots: true,
});