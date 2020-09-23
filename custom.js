(function () {
  const foragerNav = document.getElementById('foragerNav');
  if (!foragerNav) {
    const body = document.getElementsByTagName('body')[0];
    const nav = document.createElement('div');
    const footer = document.createElement('div');
    const navigationTemplate = `<div class="nav-wrap">
                                      <div data-collapse="medium" data-animation="default" data-duration="400" data-w-id="6f7e9c9c-4db8-484b-e861-52dd10233f73" role="banner" class="nav w-nav">
                                          <div class="nav__container"><a href="index.html" aria-current="page" class="brand w-nav-brand w--current"><img src="https://uploads-ssl.webflow.com/5f3ce7d38b0a42cbcba07bf6/5f3cf834a3374f7acc475e92_Logo.svg" alt="" class="brand__logo"></a>
                                          <nav role="navigation" class="nav__menu w-nav-menu"><a href="https://wf-forager.webflow.io/#product" class="nav__link w-nav-link">Product</a><a href="pricing.html" class="nav__link w-nav-link">Pricing</a><a href="https://forager.apideck.com/" target="_blank" class="nav__link w-nav-link">Integrations</a>
                                              <div class="nav__link">
                                              <div data-hover="1" data-delay="0" data-w-id="ec4aeda7-663f-b49e-b681-78d8d1b7383a" class="dropdown w-dropdown">
                                                  <div class="dropdown__link w-dropdown-toggle">
                                                  <div class="w-icon-dropdown-toggle"></div>
                                                  <div class="dropdown__title">Company</div>
                                                  </div>
                                                  <nav class="dropdown__content w-dropdown-list"><a href="https://angel.co/company/forager-ai" target="_blank" class="dropdown__item w-dropdown-link">Jobs</a><a href="contact-us.html" class="dropdown__item w-dropdown-link">Contact Us</a></nav>
                                              </div>
                                              </div><a href="sign-in.html" class="nav__link w-nav-link">Log In</a><a href="sign-in.html" class="nav__link hidden w-nav-link">Sign in</a><a href="#" data-w-id="ec4aeda7-663f-b49e-b681-78d8d1b7384e" class="nav__btn w-nav-link">Request access</a></nav>
                                          <div class="menu-btn w-nav-button">
                                              <div class="menu-btn__line"></div>
                                              <div class="menu-btn__line-sm"></div>
                                          </div>
                                          </div>
                                      </div>
                                      </div>`;

    const bottomTemplate = `<div class="section cta">
                                <div class="container hp">
                                  <div class="cta__cont">
                                    <h2 class="section__title section__title--white">Get Started with Forager Today</h2>
                                    <p class="cta__desc">Turbo charge your sales pipeline</p>
                                    <div class="cta__btn"><a data-w-id="0605a95f-861c-c66e-4821-ac29d52e9e42" href="#" class="btn btn--green w-button">Request access</a></div>
                                  </div>
                                </div>
                              </div>
                              <div class="footer">
                                <div class="container">
                                  <div class="row">
                                    <div class="col footer__col">
                                      <div class="footer__cont"><a href="index.html" aria-current="page" class="footer__brand w-inline-block w--current"><img src="images/Logo.svg" alt="" class="footer__img"></a>
                                        <p class="footer__desc">Your Always-On B2B Sales Engine</p>
                                      </div>
                                    </div>
                                    <div class="col footer__col-sm">
                                      <div class="footer__links">
                                        <div class="links-title">Product</div><a href="https://wf-forager.webflow.io/#how-it-works" class="footer__link">How it works</a><a href="pricing.html" class="footer__link">Pricing</a><a href="https://forager.apideck.com/" target="_blank" class="footer__link">Integrations</a><a href="https://wf-forager.webflow.io/pricing#faq" class="footer__link">FAQ</a><a href="sign-in.html" class="footer__link">Log In</a></div>
                                    </div>
                                    <div class="col footer__col-sm">
                                      <div class="footer__links">
                                        <div class="links-title">Contact</div><a href="contact-us.html" class="footer__link">Contact Us</a><a href="mailto:partnership@forager.ai?subject=Partnering%20with%20Forager" class="footer__link">Partnership</a><a href="mailto:press@forager.ai?subject=Forager%20press%20inquiry" class="footer__link">Press</a><a href="#" class="footer__link">Affiliates</a></div>
                                    </div>
                                    <div class="col footer__col-sm">
                                      <div class="footer__links">
                                        <div class="links-title">Company</div><a href="https://angel.co/company/forager-ai" target="_blank" class="footer__link">Careers</a><a href="privacy-policy.html" class="footer__link">Privacy</a><a href="terms-conditions.html" class="footer__link">Terms</a></div>
                                    </div>
                                  </div>
                                  <p class="footer__desc-sm">© 2020 forager.ai all right reserved</p>
                                </div>
                              </div>`;

    nav.setAttribute('id', 'foragerNav');
    footer.setAttribute('id', 'foragerFooter');
    nav.innerHTML = navigationTemplate;
    footer.innerHTML = bottomTemplate;
    body.insertBefore(nav, body.firstChild);
    body.appendChild(footer);
  }
})();
