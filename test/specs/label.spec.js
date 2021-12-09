describe('Label annotation', function() {
  describe('auto', jasmine.fixtures('label'));

  const options = {
    type: 'label',
    id: 'test',
    xScaleID: 'x',
    yScaleID: 'y',
    xValue: 5,
    yValue: 5,
    content: 'This is my text',
    position: 'center',
    borderWidth: 1,
    padding: 6,
    xAdjust: 0,
    yAdjust: -100,
    callout: {
      enabled: false,
    },
    point: {
      enabled: true,
      radius: 20
    },
    font: {}
  };

  window.testEvents(options);

  window.testEvents(options, 'point', (el) => ({x: el.pointX, y: el.pointY}));

});