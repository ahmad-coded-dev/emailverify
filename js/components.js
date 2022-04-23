import footerLogo from '../images/emailverify_logo.svg';

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="last_part">
                <div class="logo_desc">
                    <a href="./index.html"
                        ><img src="${footerLogo}"
                    /></a>
                    <p>
                        Our highly accurate email verification service will only
                        charge for fake emails and a tiny initial amount to see
                        a full statistical beakdown.
                    </p>
                </div>
                <div class="userfullinks_contactinfo">
                    <div class="userful_links">
                        <h2>Userful Links</h2>
                        <a href="./pricing.html">Pricing</a>
                        <a href="./about.html">About Us</a>
                        <a href="./terms_and_conditions.html"
                            >Terms & Condition</a
                        >
                        <a href="./privacyPolicy.html">Privacy Policy</a>
                    </div>
                    <div class="contact_info">
                        <h2>Contact Us</h2>
                        <p>salam@mslm.io</p>
                    </div>
                </div>
            </div>

            <footer>Copyright © 2022. All right reserved</footer>
        `;
    }
}
customElements.define('the-footer', Footer);
