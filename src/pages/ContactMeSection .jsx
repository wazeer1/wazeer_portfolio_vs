import React from "react";

const ContactMeSection = () => {
  return (
    <div className=" " id="contact">
      <h2 className="text-3xl text-white font-bold mb-12 text-center">
        📬 Contact Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* VS Code-style contact info sidebar */}
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-gray-200 shadow-lg space-y-4">
          <h3 className="text-xl text-[#DCDCAA] font-semibold mb-2">
            settings.json
          </h3>
          <pre className="text-sm text-green-400 bg-[#1e1e1e]/50 p-4 rounded-lg overflow-auto">
            {`{
  "name": "Wazeer ahmed",
  "email": "mailtowazeer@gmail.com",
  "location": "Ernakulam, India",
  "availableForWork": true,
  "freelance": true
}`}
          </pre>

          <p className="text-sm text-gray-300 mt-4">
            Let's work together on something cool! Drop me a message and I’ll
            get back to you ASAP. 🚀
          </p>
        </div>

        {/* Contact form */}
        <form
          className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-gray-200 shadow-lg space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("📨 Message Sent!");
          }}
        >
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              required
              className="w-full bg-[#1e1e1e]/70 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full bg-[#1e1e1e]/70 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              required
              rows="4"
              className="w-full bg-[#1e1e1e]/70 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded-lg transition-transform hover:scale-105"
          >
            Send Message ✉️
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMeSection;
