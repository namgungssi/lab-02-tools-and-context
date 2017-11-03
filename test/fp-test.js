'use strict';



const fp = require('../lib/fp.js');
const expect = require('expect')



//test map
describe ('mapCall', function () {
  it ('mapCall : success', function () {
    expect (fp.mapCall ([1, 2, 3], number => number * 2)).toEqual ([2, 4, 6]);
  });

  it ('mapCallTwo : success', function () {
    expect (fp.mapCall (['one', 'two', 'three'], index => index.toUpperCase ())).toEqual (['ONE', 'TWO', 'THREE']);
  });
});



describe ('mapApply', funcion () {
  it ('mapApply : success', function () {
    expect (fp.mapApply ([1, 2, 3], number => number * 2)).toEqual ([2, 4, 6]);
  });

  it ('mapApplyTwo : success', function () {
    expect (fp.mapApply (['one', 'two', 'three'], index => index.toUpperCase ())).toEqual (['ONE', 'TWO', 'THREE']);
  });
});



describe ('mapBind', function () {
  it ('mapBind : success', funtion () {
    expect (fp.mapBind ()).toEqual ([2, 4, 6]);
  });

  it ('mapBindTwo : success', function () {
    expect (fp.mapBind ()).toEqual (['ONE', 'TWO', 'THREE']);
  });
});



//filter
describe ('filterCall', function () {
  it ('filterCall : success', function () {
    expect (fp.filterCall ([1, 2, 3], number => number < 3)).toEqual (1, 2]);
  });
});

  it ('filterCallTwo : success', function () {
    expect (fp.filterCall (['ONE', 'TWO' 'THREE'], word => word.length > 3)).toEqual (['TWO', 'THREE']);
  });



//apply
describe ('filterApply', function () {
  it ('filterApply : success', function () {
    expect (fp.filterApply ([1, 2, 3])), number => number < 3)).toEqual (1, 2]);
  };

  it ('filterApplyTwo : success', function () {
    expect (fp.filterApply (['ONE', 'TWO', 'THREE'], word => word.length > 3)).toEqual ('TWO', 'THREE']);
  });



//bind
describe ('filterBind', function () {
  it ('filterBind : success', function () {
    expect (fp.filterBind ()).toEqual ([1, 2]);
  });
});



describe ('filterBindTwo', function () {
  it ('filterBindTwo success', function () {
    expect (fp.filterBindTwo ()).toEqual (['TWO', 'THREE']);
  });
});



//reduce
describe ('reduceCall', function () {
  it ('reduceCall : success', function () {
    expect (fp.reduceCall ([1, 2, 3], (accumulator, number) => accumulator + number, 14)).toEqual (20);
  ));
};

  it ('reduceCallTwo : success' function () {
    expect (fp.reduceCallTwo (['ONE', 'THREE', 'ONE', 'TWO', 'THREE', 'TWO'], (accumulator, index) => {
      if (! accumulator.icludes (index);
    }
  return accumulator;
}, [])).toEqual (['ONE', 'TWO', 'THREE']);

}));



describe ('reduceBind', function () {
  it ('reduceBind : success', function () {
    expect (fp.reduceBind ()).toEqual (6);
  });
});



describe ('reduceBindTwo', function () {
  it ('reduceBindTwo : success', function () {
    expect (fp.reduceBindTwo ()).toEqual (['ONE', 'TWO', 'THREE']);
  });
});
};



//concat
describe ('concatCall', function () {
  it ('concatCall : success', function () {
    expect (fp.concatCall ([1, 2, 3], [4, 5, 6])).toEqual ([1, 2, 3, 4, 5, 6]);
  });

  it ('concatCallTwo : success', function () {
    expect (fp.concatCallTwo (['ONE', 'TWO', 'THREE'], ['FOUR', 'FIVE', 'SIX'])).toEqual (['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX']);
  });
});



describe ('concatApply', function () {
  it ('concatApply : success', function () {
    expect (fp.concatApply ([1, 2, 3], [4, 5, 6])).toEqual (([1, 2, 3, 4, 5, 6]));
  });
});

  it ('concatApplyTwo : success', function () {
    expect (fp.concatApplyTwo (['one', 'two', 'three'], ['four', 'five' 'six'])).toEqual (['one', 'two', 'three', 'four', 'five', 'six']);
  });



describe ('concatBind', function () {
  it ('concatBind : sucess', function () {
    expect (fp.concatBind ()).toEqual ([1, 2, 3, 4, 5, 6]);
  });
});



describe ('concatBindTwo', function () {
  it ('concatBindTwo : success', function () {
    expect (fp.concatBindTwo ()).toEqual (['one', 'two', 'three', 'four', 'five', 'six']);
  });
});



//splice
describe ('spliceCall', function () {
  it ('spliceCall : success', function () {
    expect (fp.spliceCall (['a', 'b', 'c'], 1, 2, 'd')).toEqual (['a', 'b', 'c', 'd']);
  );
});
};



describe ('spliceCallTwo', function () {
  it ('spliceCallTwo : success' function () {
    expect (fp.spliceCallTwo (['yes', 'no', 'maybe'], 1, 2, 'so')).toEqual (['yes', 'no', 'maybe', 'so']);
  });
});



describe ('spliceApply', function () {
  it ('spliceApply : success', function () {
    expect (fp.spliceApply ([1, 2, 3], [4, 5])).toEqual ([1, 3]);
  });

  it ('spliceApplyTwo : success', function () {
    expect (fp.spliceApplyTwo (['yes', 'maybe', 'no'], [1, 2, 'so'])).toEqual (['yes', 'no', 'maybe' 'so'])
  })
});



describe ('spliceBind', function () {
  it ('spliceBind : success', function () {
    expect (fp.spliceBind ()).toEqual ([1, 2, 4, 3]);
  });
});



describe ('spliceBindTwo', function () {
  it ('spliceBindTwo : success' function () {
    expect (fp.spliceBindTwo ()).toEqual (['yes', 'no']);
  });
});
