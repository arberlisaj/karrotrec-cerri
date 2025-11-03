"use client";

const Form = () => {
  return (
    <div>
      <form
        onSubmit={() => {
          alert("Thank you for your message! We will get back to you soon.");
        }}
        className="space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded p-3"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block  text-sm font-medium mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+355 69 123 4567"
            className="w-full border border-gray-300 rounded p-3"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Tell us about your towing needs..."
            rows={5}
            className="w-full border border-gray-300 rounded p-3"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-4 rounded cursor-pointer hover:bg-neutral-800"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
