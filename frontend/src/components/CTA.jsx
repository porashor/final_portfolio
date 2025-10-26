import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">Let's get in toch with my special offers!</h2>
      <p className="text-lg mb-6 max-w-xl mx-auto">
        I always provide special for my clients, so don't hesitate to contact me and get a special offer to make you dream live. You can checkout your special offer by clicking on Book Now button.
      </p>
      <a
        href="/booking"
        className="inline-block bg-light font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-purple-100 transition duration-300"
      >
        Book Now
      </a>
    </section>
  );
};

export default CallToAction;
