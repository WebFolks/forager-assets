(function () {
  const foragerNav = document.getElementById('foragerNav');
  if (!foragerNav) {
    const body = document.getElementsByTagName('body')[0];
    const nav = document.createElement('div');
    const modal = document.createElement('div');
    const footer = document.createElement('div');
    const navigationTemplate = `<div class="nav-wrap nav-wrap--white">
                                  <div data-collapse="medium" data-animation="default" data-duration="400" data-w-id="6f7e9c9c-4db8-484b-e861-52dd10233f73" role="banner" class="nav w-nav">
                                    <div class="nav__container">
                                      <a href="https://forager.ai" aria-current="page" class="brand w-nav-brand w--current">
                                      <img src="https://uploads-ssl.webflow.com/5f3ce7d38b0a42cbcba07bf6/5f3cf834a3374f7acc475e92_Logo.svg" alt="" class="brand__logo">
                                      </a>
                                      <nav role="navigation" class="nav__menu w-nav-menu">
                                        <a href="https://forager.ai/#product" class="nav__link w-nav-link">Product</a>
                                        <a href="https://forager.ai/pricing" class="nav__link w-nav-link">Pricing</a>
                                        <a href="/" class="nav__link w-nav-link w--current">Integrations</a>
                                        <div class="nav__link">
                                          <div data-hover="1" data-delay="0" data-w-id="ec4aeda7-663f-b49e-b681-78d8d1b7383a" class="dropdown w-dropdown">
                                          <div class="dropdown__link w-dropdown-toggle">
                                          <div class="w-icon-dropdown-toggle"></div>
                                          <div class="dropdown__title">Company</div>
                                        </div>
                                        <nav class="dropdown__content w-dropdown-list">
                                          <a href="https://angel.co/company/forager-ai" target="_blank" class="dropdown__item w-dropdown-link">Jobs</a>
                                          <a href="https://forager.ai/contact-us" class="dropdown__item w-dropdown-link">Contact Us</a>
                                        </nav>
                                        </div>
                                        </div>
                                        <a href="https://forager.ai/sign-in" class="nav__link w-nav-link">Log In</a>
                                        <a href="https://forager.ai/sign-in" class="nav__link hidden w-nav-link">Sign in</a>
                                        <a href="#" onclick="window.showModalDialog()" class="nav__btn w-nav-link ">Request access</a>
                                      </nav>
                                      <a href="#navigation" class="menu-btn w-nav-button">
                                      <div class="menu-btn__line"></div>
                                      <div class="menu-btn__line-sm"></div>
                                      </a>
                                    </div>
                                  </div>
                                </div>`;
    const bottomTemplate = `<div class="section cta">
                                <div class="container hp">
                                  <div class="cta__cont">
                                    <h2 class="section__title section__title--white">Get Started with Forager Today</h2>
                                    <p class="cta__desc">Turbo charge your sales pipeline</p>
                                    <div class="cta__btn"><a href="#" onclick="window.showModalDialog()"  class="btn btn--green w-button">Request access</a></div>
                                  </div>
                                </div>
                              </div>


                              <div class="footer" id="navigation">
                                <div class="container">
                                  <div class="row">
                                    <div class="col footer__col">
                                      <div class="footer__cont">
                                        <a href="https://forager.ai/" aria-current="page" class="footer__brand w-inline-block w--current">
                                          <img src="https://uploads-ssl.webflow.com/5f3ce7d38b0a42cbcba07bf6/5f3cf834a3374f7acc475e92_Logo.svg" alt="" class="footer__img">
                                        </a>
                                        <p class="footer__desc">Your Always-On B2B Sales Engine</p>
                                      </div>
                                    </div>
                                    <div class="col footer__col-sm">
                                      <div class="footer__links">
                                        <div class="links-title">Product</div>
                                          <a href="https://forager.ai/#how-it-works" class="footer__link">How it works</a>
                                          <a href="https://forager.ai/pricing" class="footer__link">Pricing</a>
                                          <a href="/" class="footer__link">Integrations</a>
                                          <a href="https://forager.ai/pricing#faq" class="footer__link">FAQ</a>
                                          <a href="https://forager.ai/sign-in" class="footer__link">Log In</a></div>
                                    </div>
                                    <div class="col footer__col-sm">
                                      <div class="footer__links">
                                        <div class="links-title">Contact</div>
                                          <a href="https://forager.ai/contact-us" class="footer__link">Contact Us</a>
                                          <a href="mailto:partnership@forager.ai?subject=Partnering%20with%20Forager" class="footer__link">Partnership</a>
                                          <a href="mailto:press@forager.ai?subject=Forager%20press%20inquiry" class="footer__link">Press</a>
                                          <a href="#" class="footer__link">Affiliates</a>
                                        </div>
                                    </div>
                                    <div class="col footer__col-sm">
                                      <div class="footer__links">
                                        <div class="links-title">Company</div>
                                          <a href="https://angel.co/company/forager-ai" target="_blank" class="footer__link">Careers</a>
                                          <a href="https://forager.ai/privacy-policy" class="footer__link">Privacy</a>
                                          <a href="https://forager.ai/terms-conditions" class="footer__link">Terms</a>
                                        </div>
                                    </div>
                                  </div>
                                  <p class="footer__desc-sm">© 2020 forager.ai all right reserved</p>
                                </div>
                              </div>`;
    const modalTemplate = `<div class="modal" id="webflowModal">
                            <div class="modal__bg" onclick="window.hideModalDialog()"></div>
                            <div class="modal__form w-form">
                              <form id="email-form" name="email-form" data-name="Email Form" class="request-form">
                                <div class="request-form__header">
                                  <h3 class="request-form__title">Fill the form below to get <br>request access</h3>
                                </div><img onclick="window.hideModalDialog()" src="https://uploads-ssl.webflow.com/5f3ce7d38b0a42cbcba07bf6/5f3e5b971a9b6be0aa576f07_close-icon.svg" alt="" class="form-ic"><input type="text" class="request-form__t-field w-input" maxlength="256" name="Name-2" data-name="Name 2" placeholder="Full Name" id="Name-2" required=""><input type="email" class="request-form__t-field w-input" maxlength="256" name="Email-2" data-name="Email 2" placeholder="Email Address" id="Email-2" required=""><input type="text" class="request-form__t-field w-input" maxlength="256" data-name="" placeholder="Company Name" id="node" required=""><input type="text" class="request-form__t-field w-input" maxlength="256" data-name="" placeholder="Website URL" id="node-2" required="">
                                <div class="request-form__btn"><input type="submit" value="Request access" data-wait="Please wait..." class="btn btn--green width w-button"></div>
                              </form>
                              <div class="w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                              </div>
                              <div class="w-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                              </div>
                            </div>
                          </div>`;

    nav.setAttribute('id', 'foragerNav');
    footer.setAttribute('id', 'foragerFooter');
    modal.setAttribute('id', 'modalForager');
    nav.innerHTML = navigationTemplate;
    footer.innerHTML = bottomTemplate;
    modal.innerHTML = modalTemplate;
    body.insertBefore(nav, body.firstChild);
    body.appendChild(footer);
    body.appendChild(modal);
  }

  window.showModalDialog = function showModalDialog() {
    const webflowModal = document.getElementById('webflowModal');

    webflowModal.classList.add('modal-visible');
  };

  window.hideModalDialog = function hideModalDialog() {
    const webflowModal = document.getElementById('webflowModal');

    webflowModal.classList.remove('modal-visible');
  };
})();
