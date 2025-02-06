const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-celestial-blue py-16"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* About ACM Section */}
        <div className="flex flex-col text-left">
          <h2 className="text-4xl font-bold text-gunmetal mb-4">About ACM</h2>
          <p className="text-lg text-white leading-relaxed text-justify">
            ACM @ Northeastern is a student-run chapter that fosters a community of computing
            enthusiasts. We organize workshops, hackathons, and networking events to help students
            develop skills, collaborate on projects, and connect with industry professionals.
          </p>
        </div>

        

        {/* Our Mission Section */}
        <div className="flex flex-col text-left md:text-right">
          <h3 className="text-4xl font-bold text-gunmetal mb-4">Our Mission</h3>
          <p className="text-lg text-white leading-relaxed text-justify">
            At ACM @ Northeastern, we are committed to empowering students to grow their technical
            and leadership skills, engage with the tech community, and develop a passion for
            computing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
