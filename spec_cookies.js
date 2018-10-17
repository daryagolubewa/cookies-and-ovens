describe ("cookies", () => {

   let cookies;

  beforeEach(() => {
    cookies = new ChocolateCookie();
  });

    it("has a form", () => {
      expect(cookies.form).toEqual('round');
    });

     it("has a size", () => {
      expect(cookies.size).toEqual('medium');
    });

      it("has a filling", () => {
      expect(cookies.filling).toEqual('chocolate');
    });
       it("has a timing", () => {
      expect(cookies.timing).toEqual(30);
    });

  //       it("makeDoughCookies", () => {
  //       let doughCookies = cookies.makeDoughCookies(2)
  //     expect(doughCookies).toEqual([ Cookie { form: 'round', size: 'medium', filling: 'chocolate', timing: 30 },
  // Cookie { form: 'round', size: 'medium', filling: 'chocolate', timing: 30 } ]);
  //   });
  

});

