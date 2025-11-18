"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <>
      {/* Page Heading */}
      <section className="section-page-heading py-20 bg-primary text-white">
        <div className="container mx-auto text-center">
          <div className="lg:px-8 flex flex-col items-center max-w-4xl mx-auto gap-4">
            <h1
              className="lg:text-[4.5rem] lg:leading-[1.2] capitalize"
              data-aos="fade-up-sm"
            >
              Privacy Policy
            </h1>
            <p
              className="text-white/70"
              data-aos="fade-up-sm"
              data-aos-delay="150"
            >
              Last update: October 30, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section py-16">
        <div className="container mx-auto">
          <div
            className="content max-w-[950px] mx-auto space-y-6"
            data-aos="fade-up-sm"
            data-aos-delay="150"
          >
            <h6 className="text-xl font-semibold">Introduction</h6>
            <p>
              Welcome to CloudPeak! We're thrilled to have you on board and
              excited to help you take control of your financial journey. Before
              you start using our services, we kindly ask you to read through
              these Terms of Use carefully. This document is designed to inform
              you about your rights and responsibilities when using our
              platform.
            </p>
            <p>
              These Terms of Use constitute a legally binding agreement between
              you and CloudPeak, governing your access to and use of our
              website, mobile application, and all associated services
              (collectively, the "Service"). By accessing or using the Service,
              you agree to comply with and be bound by these terms. If you do
              not agree to these terms, please refrain from using our Service.
            </p>

            <h6 className="text-xl font-semibold">Our Mission</h6>
            <p>
              At CloudPeak, our mission is to simplify financial management for
              individuals and businesses alike. We provide a comprehensive suite
              of tools designed to help you track, manage, and optimize your
              financial health. From budgeting and expense tracking to
              investment planning and financial reporting, our goal is to
              empower you with the insights and resources needed to make
              informed financial decisions.
            </p>

            <h6 className="text-xl font-semibold">Agreement Details</h6>
            <p>
              By creating an account and using CloudPeak, you acknowledge that
              you have read, understood, and agree to abide by these Terms of
              Use. This agreement outlines important information regarding your
              use of the Service, including:
            </p>

            <ul className="list-disc ml-6 space-y-1">
              <li>
                <strong>Account Creation and Security</strong>: Guidelines for
                creating and maintaining a secure account.
              </li>
              <li>
                <strong>Service Usage</strong>: Permitted uses and prohibited
                activities.
              </li>
              <li>
                <strong>Subscription and Billing</strong>: Plans, billing
                cycles, and payment terms.
              </li>
              <li>
                <strong>Privacy and Data Security</strong>: How your data is
                collected, used, and protected.
              </li>
              <li>
                <strong>Intellectual Property</strong>: Content usage rights and
                ownership rules.
              </li>
              <li>
                <strong>Dispute Resolution</strong>: Steps for handling
                conflicts.
              </li>
            </ul>

            <h6 className="text-xl font-semibold">
              Commitment to Transparency
            </h6>
            <p>
              We believe in maintaining a transparent relationship with our
              users. As part of this commitment, we strive to keep you informed
              about any changes to our Terms of Use. We will notify you of
              significant updates, and your continued use of the Service will
              signify your acceptance.
            </p>

            <h6 className="text-xl font-semibold">Your Responsibilities</h6>
            <p>
              You are responsible for safeguarding your account credentials,
              complying with laws, and respecting other users.
            </p>

            <h6 className="text-xl font-semibold">Support and Assistance</h6>
            <p>
              Our dedicated support team is available to help. If you need
              assistance or have questions, please reach out.
            </p>

            <h6 className="text-xl font-semibold">Security</h6>
            <p>
              Thank you for choosing CloudPeak. We strive to provide a secure
              platform and support your financial success.
            </p>

            <h6 className="text-xl font-semibold">Conclusion</h6>
            <p>
              Thank you for choosing CloudPeak. Please take time to review these
              Terms carefully. Contact us with any questions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
