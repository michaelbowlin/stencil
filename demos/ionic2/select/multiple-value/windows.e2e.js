describe('select/multiple-value: windows', function() {

it('should init', function() {
  browser.get('http://localhost:8876/dist/e2e/select/multiple-value/index.html?ionicplatform=windows&ionicOverlayCreatedDiff=0&ionicanimate=false&snapshot=true');
});

"use strict";
it('should open toppings multiple select', function () {
    element(by.css('.e2eSelectToppings button')).click();
});

});
