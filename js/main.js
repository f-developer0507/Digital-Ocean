var owl = $('.owl-carousel');

owl.owlCarousel({
  items: 2,
  margin: 67,
  autoWidth: true,
  loop: true,
});
// Go to the previous item
$('.slider__btn--prev').click(function() {
  owl.trigger('prev.owl.carousel');
})
// Go to the next item
$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})
