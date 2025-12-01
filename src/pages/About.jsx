import React from 'react'

const about = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-gray-800">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-8 tracking-wide">
          About <span className="text-black">Our Brand</span>
        </h1>

        {/* Intro Text */}
        <p className="text-lg text-center leading-8 max-w-3xl mx-auto">
          We are a modern clothing brand built for people who value comfort,
          confidence, and individuality. Our mission is to create high-quality,
          stylish, and affordable apparel that lets you express who you truly are.
        </p>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-14 mt-14">

          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">Our Story</h2>
            <p className="text-lg leading-7">
              Founded with a passion for creativity and craftsmanship, our clothing
              brand started with a simple idea — **style should be accessible to all**.
              Every piece we create combines fine materials, elegant design, and
              attention to detail. We aim to inspire confidence through fashion that
              feels as good as it looks.
            </p>
          </div>

          {/* Right Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-3">What We Believe</h2>
            <ul className="list-disc pl-5 space-y-2 text-lg leading-7">
              <li>Premium Quality Fabrics</li>
              <li>Timeless and Trend-Driven Designs</li>
              <li>Ethically Crafted Products</li>
              <li>Comfort Without Compromise</li>
              <li>Affordable Fashion for Everyone</li>
            </ul>
          </div>

        </div>

        {/* Highlight Box */}
        <div className="bg-white shadow-lg rounded-xl p-8 mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Why Choose Us?
          </h2>
          <p className="text-lg leading-7 text-center">
            We blend creativity with quality to bring you outfits that make a
            statement. Whether it’s everyday wear, street fashion, or festive
            collections — we promise **comfort, style, and originality** in every stitch.
          </p>
        </div>

      </div>
    </div>
  );
};

export default about
