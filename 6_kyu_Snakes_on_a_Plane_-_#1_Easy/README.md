``` javascript
describe("SolutionTests", function() {

    it("one", function() {
      var aPlane = [
        'AAA__AAAAA'.split(''),
        'A___AA___A'.split(''),
        'A_AAA____A'.split(''),
        'A______AAA'.split(''),
        'AAAAAAAA__'.split('')
      ]
      show({data: aPlane, count: 1})
      Test.assertEquals(snakesOn(aPlane), 1)
    });

    it("two", function() {
      var aPlane = [
        '_A_AAAAA__'.split(''),
        '_AA____AAA'.split(''),
        'D_AA_____A'.split(''),
        'DD_AAAAA_A'.split(''),
        '_D_____AAA'.split('')
      ]
      show({data: aPlane, count: 2})
      Test.assertEquals(snakesOn(aPlane), 2)
    });

    it("three", function() {
      var aPlane = [  
        '__AAAAA__A'.split(''),
        '__A___A__A'.split(''),
        'K_____AAAA'.split(''),
        'K_DDDD____'.split(''),
        'K____DDDD_'.split('')
      ]
      show({data: aPlane, count: 3})
      Test.assertEquals(snakesOn(aPlane), 3)
    });

    it("little-snakes", function() {
      var aPlane = [  
        'A________B'.split(''),
        '__________'.split(''),
        '____C_____'.split(''),
        '__________'.split(''),
        'D________E'.split('')
      ]
      show({data: aPlane, count: 5})
      Test.assertEquals(snakesOn(aPlane), 5)
    });
```
