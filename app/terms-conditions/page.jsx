"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TermsAndConditions() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* Page Heading */}
      <section className="section-page-heading py-16 md:py-20 lg:py-24 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="lg:px-8 flex flex-col items-center gap-4">
            <h1
              className="lg:text-[4.5rem] lg:leading-[1.2] capitalize text-white"
              data-aos="fade-up-sm"
            >
              Terms and Conditions
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

      {/* Terms Content */}
      <section className="section py-16 md:py-20 lg:py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div
            className="max-w-4xl mx-auto space-y-8 prose prose-lg dark:prose-invert"
            data-aos="fade-up-sm"
            data-aos-delay="150"
          >
            <h2>Introduction</h2>
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

            <h2>Our Mission</h2>
            <p>
              At CloudPeak, our mission is to simplify financial management for
              individuals and businesses alike. We provide a comprehensive suite
              of tools designed to help you track, manage, and optimize your
              financial health. From budgeting and expense tracking to
              investment planning and financial reporting, our goal is to
              empower you with the insights and resources needed to make
              informed financial decisions.
            </p>

            <h2>Agreement Details</h2>
            <p>
              By creating an account and using CloudPeak, you acknowledge that
              you have read, understood, and agree to abide by these Terms of
              Use. This agreement outlines important information regarding your
              use of the Service, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Account Creation and Security</strong>: Guidelines for
                creating and maintaining a secure account.
              </li>
              <li>
                <strong>Service Usage</strong>: Permitted uses of the Service
                and activities that are prohibited.
              </li>
              <li>
                <strong>Subscription and Billing</strong>: Details on our
                subscription plans, billing cycles, and payment terms.
              </li>
              <li>
                <strong>Privacy and Data Security</strong>: How we collect, use,
                and protect your personal information.
              </li>
              <li>
                <strong>Intellectual Property</strong>: Your rights to use the
                Service and our rights to the content and technology provided.
              </li>
              <li>
                <strong>Dispute Resolution</strong>: Procedures for resolving
                any disputes that may arise between you and CloudPeak.
              </li>
            </ul>

            <h2>Commitment to Transparency</h2>
            <p>
              We believe in maintaining a transparent relationship with our
              users. As part of this commitment, we strive to keep you informed
              about any changes to our Terms of Use. We will notify you of
              significant updates, and your continued use of the Service will
              signify your acceptance of these changes.
            </p>

            <h2>Your Responsibilities</h2>
            <p>
              As a user of CloudPeak, you play a crucial role in maintaining the
              integrity and security of our platform. You are responsible for
              safeguarding your account credentials, complying with all
              applicable laws, and using the Service in a manner that respects
              the rights and experiences of other users.
            </p>

            <h2>Support and Assistance</h2>
            <p>
              Our dedicated support team is here to help you make the most of
              CloudPeak. If you have any questions about these Terms of Use or
              encounter any issues while using the Service, please don't
              hesitate to reach out to us. We're committed to providing you with
              the assistance and information you need.
            </p>

            <h2>Security</h2>
            <p>
              Thank you for choosing CloudPeak. We are honored to be a part of
              your financial journey and are committed to providing you with the
              tools and support necessary to achieve your financial goals.
              Please take the time to review these Terms of Use thoroughly, and
              don't hesitate to contact us if you have any questions or
              concerns.
            </p>

            <h2>Conclusion</h2>
            <p>
              Thank you for choosing CloudPeak. We are honored to be a part of
              your financial journey and are committed to providing you with the
              tools and support necessary to achieve your financial goals.
              Please take the time to review these Terms of Use thoroughly, and
              don't hesitate to contact us if you have any questions or
              concerns.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
