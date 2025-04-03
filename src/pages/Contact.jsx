import { GoArrowRight } from "react-icons/go";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../context/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../services/helper";

export const Contact = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (user) {
      setContact({
        fullname: user.fullname || "",
        email: user.email || "",
        phone: String(user.phone) || "",
        message: "",
      });
    }
  }, [user]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/api/form/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });

      const res_data = await response.json();
      setLoading(false);

      if (response.ok) {
        toast.success(res_data.message);
        setContact({ fullname: user.fullname || "", email: user.email || "", phone: String(user.phone) || "", message: "" });
      } else {
        toast.error(res_data.extraDetail || "Something went wrong. Try again.");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Failed to send message. Please check your internet connection.");
    }
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-lg text-gray-600">Uploading...</p>
      </div>
    );
  }

  return (
    <section className="flex flex-col gap-10 items-center p-6">
      <div className="flex justify-between w-full sm:w-96">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Contact Us</h1>
          <NavLink to="/login" className="text-sm text-gray-600">
            or <span className="text-blue-600 font-medium">Login to your account</span>
          </NavLink>
        </div>
        <button onClick={handleGoBack} className="p-2 text-red-500 text-xl cursor-pointer">
          <GoArrowRight />
        </button>
      </div>

      <form onSubmit={handleFormSubmit} className="w-full sm:w-96">
        <ul className="space-y-4">
          <li className="border p-2 rounded-md">
            <label htmlFor="fullname" className="text-gray-500 block">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input type="text" name="fullname" id="fullname" value={contact.fullname} onChange={handleInputChange} required autoComplete="off" className="w-full outline-none text-gray-700 font-medium" />
          </li>

          <li className="border p-2 rounded-md">
            <label htmlFor="email" className="text-gray-500 block">
              Email <span className="text-red-500">*</span>
            </label>
            <input type="email" name="email" id="email" value={contact.email} onChange={handleInputChange} required autoComplete="off" className="w-full outline-none text-gray-700 font-medium" />
          </li>

          <li className="border p-2 rounded-md">
            <label htmlFor="phone" className="text-gray-500 block">
              Phone <span className="text-red-500">*</span>
            </label>
            <input type="number" name="phone" id="phone" value={contact.phone} onChange={handleInputChange} required autoComplete="off" className="w-full outline-none text-gray-700 font-medium" />
          </li>

          <li className="border p-2 rounded-md">
            <label htmlFor="message" className="text-gray-500 block">
              Comment <span className="text-red-500">*</span>
            </label>
            <textarea name="message" id="message" value={contact.message} onChange={handleInputChange} required rows={5} className="w-full outline-none text-gray-700 font-medium resize-none"></textarea>
          </li>

          <button type="submit" className="w-full mt-4 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all">
            Send Message
          </button>
        </ul>
      </form>
    </section>
  );
};
