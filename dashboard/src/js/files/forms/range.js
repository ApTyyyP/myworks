// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
  const priceSlider = document.querySelector('#range');
  if (priceSlider) {
    let textFrom = priceSlider.getAttribute('data-from');
    let textTo = priceSlider.getAttribute('data-to');

    let formatForSlider = {
      from: function (formattedValue) {
          return Number(formattedValue);
      },
      to: function(numericValue) {
          return Math.round(numericValue);
      }
    };

    noUiSlider.create(priceSlider, {
      start: [0, 5000],
      step: 1,
      connect: true,
      range: {
        'min': [0],
        'max': [5000]
      },
      format: formatForSlider,
      tooltips: {
          // tooltips are output only, so only a "to" is needed
          to: function(numericValue) {
              return numericValue.toFixed(0);
          }
      }
    });

    // Values are parsed as numbers using the "from" function in "format"
    priceSlider.noUiSlider.set(['1025', '3800']);

    let formatValues = [
        document.getElementById('formatting-start'),
        document.getElementById('formatting-end')
    ];

    /*
    const priceStart = document.getElementById('price-start');
    const priceEnd = document.getElementById('price-end');
    priceStart.addEventListener('change', setPriceValues);
    priceEnd.addEventListener('change', setPriceValues);
    */
    function setPriceValues() {
      let priceStartValue;
      let priceEndValue;
      if (priceStart.value != '') {
        priceStartValue = priceStart.value;
      }
      if (priceEnd.value != '') {
        priceEndValue = priceEnd.value;
      }
      priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
    }
  }
}
rangeInit();