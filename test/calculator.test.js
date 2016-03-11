describe('Calculator', function() {

    // inject the HTML fixture for the tests
    beforeEach(function () {
        fixture.base = 'test';
        fixture.load('calculator.html');
    });

    // remove the html fixture from the DOM
    afterEach(function () {
        fixture.cleanup();
    });

    // call the init function of calculator to register DOM elements
    beforeEach(function () {
        window.calculator.init();
    });

    it('should return 3 from 1 + 2', function () {
        document.getElementById('x').value = 1;
        document.getElementById('y').value = 2;
        document.getElementById('add').click();
        expect(document.getElementById('result').innerHTML).toBe('3');
    });

    it('should calculate zero from invalid x value', function () {
        document.getElementById('x').value = 'hello';
        document.getElementById('y').value = 2;
        document.getElementById('add').click();
        expect(document.getElementById('result').innerHTML).toBe('0');
    });

    it('should calculate zero from invalid y value', function () {
        document.getElementById('x').value = 1;
        document.getElementById('y').value = 'good bye';
        document.getElementById('add').click();
        expect(document.getElementById('result').innerHTML).toBe('0');
    });

});