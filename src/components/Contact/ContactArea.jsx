import {useFormik} from "formik";
import * as Yup from "yup";
import ErrorMsg from "../common/ErrorMsg";
import schema from "../common/schema";

const ContactArea = () => {
  const handleOnSubmit = (values, {resetForm}) => {
    alert(
      `${
        values.name +
        "\n" +
        values.email +
        "\n" +
        values.subject +
        "\n" +
        values.msg
      }`
    );
    resetForm();
  };
  const {handleChange, handleSubmit, handleBlur, errors, values, touched} =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        subject: "",
        msg: ""
      },
      validationSchema: schema,
      onSubmit: handleOnSubmit
    });

  return (
    <>
      <section className="contact__area pt-115 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-xl-7 col-lg-6">
              <div className="contact__wrapper">
                <div className="section__title-wrapper mb-40">
                  <h2 className="tp-title">Get in touch</h2>
                  <p>
                    Have a question or just want to say hi? We would love to
                    hear from you.
                  </p>
                </div>
                <div className="contact__form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <div className="contact__form-input">
                          <input
                            id="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            placeholder="Your Name"
                          />
                          {touched.name && <ErrorMsg error={errors.name} />}
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-md-6">
                        <div className="contact__form-input">
                          <input
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="email"
                            placeholder="Your Email"
                          />
                          {touched.email && <ErrorMsg error={errors.email} />}
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__form-input">
                          <input
                            id="subject"
                            value={values.subject}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            placeholder="Your Subject"
                          />
                          {touched.subject && (
                            <ErrorMsg error={errors.subject} />
                          )}
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__form-input">
                          <textarea
                            id="msg"
                            value={values.msg}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Write  Your Message"
                          ></textarea>
                          {touched.msg && <ErrorMsg error={errors.msg} />}
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="contact__btn">
                          <button type="submit" className="tp-solid-btn">
                            Send your message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 offset-xxl-1 col-xl-4 offset-xl-1 col-lg-5 offset-lg-1">
              <div className="contact__info white-bg p-relative z-index-1">
                <div className="contact__shape">
                  <img
                    className="contact-shape-1"
                    src="assets/img/contact/contact-shape-1.png"
                    alt=""
                  />
                  <img
                    className="contact-shape-2"
                    src="assets/img/contact/contact-shape-2.png"
                    alt=""
                  />
                </div>
                <div className="contact__info-inner white-bg">
                  <div className="contact__info-item d-flex align-items-start mb-35">
                    <div className="contact__info-icon mr-15">
                      <svg className="map" viewBox="0 0 24 24">
                        <path
                          className="st0"
                          d="M21,10c0,7-9,13-9,13s-9-6-9-13c0-5,4-9,9-9S21,5,21,10z"
                        />
                        <circle className="st0" cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div className="contact__info-text">
                      <h4>Mongolia</h4>
                      <p>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"
                        >
                          MPM Complex - 30, Unesco Street, 14220 Ulaanbaatar,
                          Mongolia
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="contact__info-item d-flex align-items-start mb-35">
                    <div className="contact__info-icon mr-15">
                      <svg className="mail" viewBox="0 0 24 24">
                        <path
                          className="st0"
                          d="M4,4h16c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6C2,4.9,2.9,4,4,4z"
                        />
                        <polyline className="st0" points="22,6 12,13 2,6 " />
                      </svg>
                    </div>
                    <div className="contact__info-text">
                      <h4>Email us directly</h4>
                      <p></p>
                      <p>
                        <a href="odd@mobicom.mn">odd@mobicom.mn</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
