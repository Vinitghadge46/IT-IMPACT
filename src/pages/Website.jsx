import Section from "../components/Section";
import Heading from "../components/Heading";
import PricingList from "../components/PricingList";
import { LeftLine, RightLine } from "../components/design/Pricing";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ButtonGradient from "../assets/svg/ButtonGradient";

import homeimg1 from "../assets/images/website-1.jpg"
import homeimg2 from "../assets/images/website-2.jpg"

const Website = () => {
  return (
    <>
    <div>
        <Header />
    </div>
    <Section className="section section-sm position-relative">
    <div class="container">
          <div class="row row-30">
            <div class="col-lg-6">
              <div class="block-decorate-img wow fadeInLeft" data-wow-delay=".2s"><img src={homeimg1} alt="" width="570" height="351"/>
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="block-sm offset-top-45">
                <div class="section-name wow fadeInRight" data-wow-delay=".2s">Website Development and Hosting</div>
                <h3 class="wow fadeInLeft text-capitalize devider-bottom" data-wow-delay=".3s">What We<span class="text-primary"> Do</span></h3>
                <p class="offset-xl-40 wow fadeInUp" data-wow-delay=".4s">In today's fast-paced digital world, a strong online presence is crucial for any business to succeed. Our team of experienced developers and hosting experts is here to create beautiful, functional, and secure websites tailored to your needs. With our end-to-end solutions, you get a custom website and reliable hosting, ensuring that your business runs smoothly online. From startups to large enterprises, we deliver web solutions that engage, convert, and scale.</p>
                <p class="default-letter-spacing font-weight-bold text-gray-dark wow fadeInUp" data-wow-delay=".4s">Build and Host Your Dream Website with Us</p>
              </div>
            </div>
          </div>
        </div>
        <div class="decor-text decor-text-1">WEBSITE</div>
    </Section>
    <Section className="section my-15 mb-32 custom-section position-relative section-md" >
  
        <div class="container">
          <div class="row">
            <div class="col-xl-7 col-lg-7 col-12">
              <div class="section-name wow fadeInRight">Features of Web Services</div>
              <h3 class="text-capitalize devider-left wow fadeInLeft text-4xl p-3" data-wow-delay=".2s">Why Businesses<span class="text-primary"> Choose us</span></h3>
              <p>With over decade of experience in business consulting, we have a lot to offer to our clients. Here are some reasons why companies worldwide choose us.</p>
              <div class="row row-15">
                <div class="col-xl-6 wow fadeInUp" data-wow-delay=".2s">
                  <div class="box-default">
                    <div class="box-default-title">Custom Website Development</div>
                    <p class="box-default-description">Fully responsive websites optimized for desktop, tablet, and mobile devices.</p><span class="box-default-icon novi-icon icon-lg mercury-icon-lightbulb-gears"></span>
                  </div>
                </div>
                <div class="col-xl-6 wow fadeInUp" data-wow-delay=".3s">
                  <div class="box-default">
                    <div class="box-default-title">Reliable Hosting Services</div>
                    <p class="box-default-description">High-performance servers that ensure fast load times and minimal downtime.</p><span class="box-default-icon novi-icon icon-lg mercury-icon-target-2"></span>
                  </div>
                </div>
                <div class="col-xl-6 wow fadeInUp" data-wow-delay=".4s">
                  <div class="box-default">
                    <div class="box-default-title">User Experience (UX) & User Interface (UI) Design</div>
                    <p class="box-default-description">Custom UI design to reflect your brand, ensuring consistency and appeal.</p><span class="box-default-icon novi-icon icon-lg mercury-icon-user"></span>
                  </div>
                </div>
                <div class="col-xl-6 wow fadeInUp" data-wow-delay=".5s">
                  <div class="box-default">
                    <div class="box-default-title">Website Maintenance & Support</div>
                    <p class="box-default-description">24/7 customer support for any issues that may arise.</p><span class="box-default-icon novi-icon icon-lg mercury-icon-partners"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="image-left-side wow slideInRight" data-wow-delay=".5s"><img src={homeimg2} alt="" width="636" height="240"/>
        </div>
        <div class="decor-text decor-text-2 wow fadeInUp" data-wow-delay=".3s">features</div>
      
    </Section>

    {/* <Section className="overflow-hidden" id="seo">
      <div className="container relative z-2">
        
        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section> */}
    <div>
        <Footer />
    </div>
    <ButtonGradient />
    </>
  );
};

export default Website;
