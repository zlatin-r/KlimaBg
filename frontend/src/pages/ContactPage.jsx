import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Изпращане...");

    try {
      const response = await fetch("http://localhost:8000/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Съобщението е изпратено успешно!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Неуспешно изпращане на съобщение. Опитайте отново.");
      }
    } catch (error) {
      setStatus("Възникна грешка. Опитайте отново.");
    }
  };

  return (
    <div className="antialiased bg-gray-100">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-blue-300 w-full max-w-6xl p-12 sm:p-16 rounded-xl shadow-lg text-blue-900 overflow-hidden">
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Свържете се с нас</h1>
              <p className="pt-2 text-blue-800 text-sm">Имате въпроси, предложения или обратна връзка? Ще се радваме да чуем от вас!</p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+1 (234) 567-890</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>support@klima.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Адрес: ул. Зелена 123, Еко град, Планета Земя</span>
              </div>
            </div>
            <div className="flex space-x-4 text-lg">
              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></a>
              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 2h-3a5 5 0 00-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" /></svg></a>
              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 21.172a4.5 4.5 0 01-6.364 0L2.121 14.828a4.5 4.5 0 010-6.364l6.364-6.364a4.5 4.5 0 016.364 0l6.364 6.364a4.5 4.5 0 010 6.364l-6.364 6.364z" /></svg></a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute z-0 w-40 h-40 bg-blue-200 rounded-full -right-28 -top-28"></div>
            <div className="absolute z-0 w-40 h-40 bg-blue-200 rounded-full -left-28 -bottom-16"></div>
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-12 text-gray-600 md:flex-1">
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm">Име</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-300" />
                </div>
                 <div>
                  <label htmlFor="email" className="text-sm">Имейл</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-300" />
                </div>
                 <div>
                  <label htmlFor="message" className="text-sm">Съобщение</label>
                  <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-300"></textarea>
                </div>
                <button type="submit" className="inline-block self-end bg-blue-600 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">Изпрати съобщение</button>
                {status && <p className="text-sm text-gray-700 mt-4">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
