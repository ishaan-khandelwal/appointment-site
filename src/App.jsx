import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Star,
} from "lucide-react";

import React from "react";

const services = [
  {
    title: "Signature Facial",
    description: "Revitalizing treatments using premium products for glowing, healthy skin",
    price: "₹1,500",
    duration: "60 min",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
  },
  {
    title: "Hair Styling & Cut",
    description: "Expert cuts and styling to complement your unique features and lifestyle",
    price: "₹800",
    duration: "45 min",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
  },
  {
    title: "Bridal Makeup",
    description: "Picture-perfect bridal looks for your most special day",
    price: "₹5,000",
    duration: "120 min",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
  },
  {
    title: "Manicure & Pedicure",
    description: "Complete nail care with relaxing treatments and beautiful finishes",
    price: "₹1,200",
    duration: "75 min",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
  },
  {
    title: "Eyebrow Shaping",
    description: "Precise threading and shaping to frame your face perfectly",
    price: "₹300",
    duration: "20 min",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
  },
  {
    title: "Full Body Spa",
    description: "Rejuvenating treatments to relax and revitalize your entire body",
    price: "₹3,500",
    duration: "90 min",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
  },
];

const serviceOptions = [
  "Signature Facial - ₹1,500",
  "Hair Styling & Cut - ₹800",
  "Bridal Makeup - ₹5,100-₹20,000",
  "Manicure & Pedicure - ₹1,200",
  "Eyebrow Shaping - ₹30-₹300",
  "Full Body Spa - ₹3,500",
];

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert("Appointment booked successfully! We will contact you soon.");
    event.currentTarget.reset();
  };

  return (
    <>
      <header>
        <div className="main-header">
          <div className="container">
            <div className="header-content">
              <a className="logo" href="#top" aria-label="Shree Kaila Devi home">
                <div className="logo-icon">
                  <Star size={22} fill="currentColor" />
                </div>
                <div className="logo-text">
                  <h1>Shree Kaila Devi</h1>
                  <p>Beauty Parlour & Training Center</p>
                </div>
              </a>
              <nav className="nav" aria-label="Main navigation">
                <a href="#services">Services</a>
                <a href="#booking">Book Now</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container">
            <Sparkles className="hero-icon" size={34} />
            <h2>
              Embrace Your <span className="highlight">Natural Beauty</span>
            </h2>
            <p>
              Discover premium beauty services tailored to enhance your unique radiance at
              Shree Kaila Devi Beauty Parlour.
            </p>
            <a href="#booking" className="btn btn-primary">
              Book Your Appointment
            </a>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <div className="section-title">
              <h3>Our Premium Services</h3>
              <p>
                Indulge in our carefully curated selection of beauty treatments designed to
                pamper and rejuvenate.
              </p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <img src={service.image} alt={service.title} className="service-image" />
                  <div className="service-content">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                    <div className="service-meta">
                      <div className="price">
                        <span>{service.price}</span>
                      </div>
                      <div className="duration">
                        <Clock size={16} />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="booking">
          <div className="container">
            <div className="section-title">
              <h3>Book Your Appointment</h3>
              <p>Schedule your perfect beauty session with us.</p>
            </div>
            <div className="booking-card">
              <div className="step-indicator" aria-hidden="true">
                <div className="step active">1</div>
                <div className="step active">2</div>
                <div className="step active">3</div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Select Service</label>
                    <select id="service" name="service" required defaultValue="">
                      <option value="" disabled>
                        Choose a service
                      </option>
                      {serviceOptions.map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="date">Preferred Date</label>
                    <input type="date" id="date" name="date" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="time">Preferred Time</label>
                    <select id="time" name="time" required defaultValue="">
                      <option value="" disabled>
                        Select time
                      </option>
                      {["9:00 AM", "10:30 AM", "12:00 PM", "2:30 PM", "4:00 PM", "5:30 PM", "6:30 PM", "7:00 PM", "7:30 PM"].map(
                        (time) => (
                          <option value={time} key={time}>
                            {time}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Special Requests (Optional)</label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows="3"
                    placeholder="Any specific requirements or preferences..."
                  />
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <h3>Visit Our Parlour</h3>
              <p>Experience luxury and elegance at Shree Kaila Devi Beauty Parlour.</p>
            </div>
            <div className="contact-grid">
              <div className="contact-info">
                <ContactItem icon={<MapPin />} title="Our Location">
                  Shop no. 44, Goverdhan Plaza near Dhanghati Temple
                  <br />
                  Goverdhan, Uttar Pradesh 281502
                  <br />
                  India
                </ContactItem>
                <ContactItem icon={<Phone />} title="Contact Numbers">
                  +91 9319043772
                  <br />
                  +91 7451838020
                </ContactItem>
                <ContactItem icon={<Mail />} title="Email Us">
                  shreekailadevi@gmail.com
                  <br />
                  appointments@shreekailadevi.com
                </ContactItem>
                <ContactItem icon={<Clock />} title="Opening Hours">
                  Monday - Sunday: 10:00 AM - 10:00 PM
                </ContactItem>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Beauty parlour interior"
                  className="contact-image"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-logo">
            <div className="footer-logo-icon">
              <Star size={22} fill="currentColor" />
            </div>
            <div>
              <h5>Shree Kaila Devi</h5>
              <p className="footer-subtitle">Beauty Parlour</p>
            </div>
          </div>
          <p>
            Experience the finest in beauty and wellness at Shree Kaila Devi Beauty
            Parlour. Where elegance meets expertise.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/" aria-label="Facebook">
              <Facebook size={19} />
            </a>
            <a
              href="https://www.instagram.com/shri_kaila_devi_beauty_parlour/reels/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={19} />
            </a>
            <a href="https://wa.me/919319043772" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <Phone size={19} />
            </a>
          </div>
          <p className="copyright">© 2024 Shree Kaila Devi Beauty Parlour. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

function ContactItem({ icon, title, children }) {
  return (
    <article className="contact-item">
      <div className="contact-icon">{icon}</div>
      <div className="contact-details">
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </article>
  );
}

export default App;
