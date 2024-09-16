// import React from "react";
import Section from "./Section";
import { socials } from "../constants";
import { logo } from "../assets";


const Footer = () => {
  return (
    <Section id="footer" crosses className="!px-0 !py-10">
      <div class="container">
          <div class="row row-30">
            <div class="col-lg-3 wow fadeInLeft">
              <a class="brand" href="#"><img class="brand-logo-dark" src={logo} alt="" width={180} height={20}/><img class="brand-logo-light" src="images/logo-inverse-200x34.png" alt="" width="100" height="17"/></a>
              <p class="footer-classic-description offset-top-0 offset-right-25">IT-IMPACT provides a full range of business consulting & advisory services to small, medium, and international companies worldwide. We use innovations and experience to drive your success.</p>
            </div>
            <div class="col-lg-3 col-sm-8 wow fadeInUp">
              <p class="footer-classic-title">contact info</p>
              <div class="d-block offset-top-0 text-gray-600">A 14 Rented Quarters, Sai Chowk, Shastri Nagar, <span class="d-lg-block">Pimpri-Chinchwad, Maharashtra 411017</span></div><a class="d-inline-block accent-link" href="mailto:#">info@itimpactdeal.com</a><a class="d-inline-block" href="tel:#">+91 705-703-5174</a>
              <ul>
                <li>Mon-Thu:<span class="d-inline-block offset-left-10 text-gray-600">9:30 AM - 9:00 PM</span></li>
                <li>Fri:<span class="d-inline-block offset-left-10 text-gray-600">10:00 AM - 9:00 PM</span></li>
                <li>Sat:<span class="d-inline-block offset-left-10 text-gray-600">10:00 AM - 3:00 PM</span></li>
              </ul>
            </div>
            <div class="col-lg-2 col-sm-4 wow fadeInUp" data-wow-delay=".3s">
              <p class="footer-classic-title">Quick Links</p>
              <ul class="footer-classic-nav-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contacts</a></li>
              </ul>
            </div>
            <div class="col-lg-4 wow fadeInLeft" data-wow-delay=".2s">
              <p class="footer-classic-title">newsletter</p>
              <form class="rd-mailform text-left footer-classic-subscribe-form" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php">
                <div class="form-wrap">
                  <label class="form-label" for="subscribe-email">Your Email Address</label>
                  <input class="form-input" id="subscribe-email" type="email" name="email" data-constraints="@Email @Required"/>
                </div>
                <div class="form-button group-sm text-center text-lg-left">
                  <button class="button bg-blue-700 hover:bg-n-8 button-circle" type="submit">sign up</button>
                </div>
              </form>
              <p className="p-3">Be the first to find out about our latest news, updates, and special offers.</p>
            </div>
          </div>
        </div>
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={25} height={25} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
