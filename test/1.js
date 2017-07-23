describe('add', function() {
  it('1足す1は2であること', function() {
    expect(add(1, 1)).to.be(2);
  });

  it('5かける5は25であること', function() {
    expect(multiply(5,5)).to.be(25);
  });
});

