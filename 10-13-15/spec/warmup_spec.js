var code = require('../warmup.js');

describe('toDecimal', function(){
  it('Takes a binary number and converst it to decimal', function(){
    expect(code.toDecimal(0)).toEqual(0);
    expect(code.toDecimal(1)).toEqual(1);
    expect(code.toDecimal(11)).toEqual(3);
    expect(code.toDecimal(1000)).toEqual(8);
    expect(code.toDecimal(1100)).toEqual(12);
  });
});

describe('capitalizeFish', function(){
  it('will capitalize not only the first word of the fish in the array, but the second as well.', function(){
    var fish = [ "rainbow trout", "smallmouth bass", "white bass", "channel catfish" ]
    expect(code.capitalizeFish(fish)).toEqual(["Rainbow Trout", "Smallmouth Bass", "White Bass", "Channel Catfish"]);
  });
});
