// // import React, { useState } from "react";
// // import axios from "axios";
// // import { useParams, useNavigate } from "react-router-dom";
// // import "./PersonalizedPick.css";

// // export default function PersonalizedPick({ closeForm }) {
// //   const { category } = useParams();
// //   const navigate = useNavigate();

// //   const [form, setForm] = useState({
// //     name: "",
// //     email: "",
// //     category: category || "",
// //     budget: "",
// //     useCase: "",
// //     urgency: "Immediate",
// //   });

// //   const [paymentScreenshot, setPaymentScreenshot] = useState(null);
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   const handleChange = (e) =>
// //     setForm({ ...form, [e.target.name]: e.target.value });

// //   const handleFileChange = (e) => {
// //     setPaymentScreenshot(e.target.files[0]);
// //   };

// //   const validateForm = () => {
// //     return (
// //       form.name &&
// //       form.email &&
// //       form.category &&
// //       form.budget &&
// //       form.useCase &&
// //       form.urgency &&
// //       paymentScreenshot
// //     );
// //   };

// //   const handleSubmit = async () => {
// //     if (!validateForm()) {
// //       setError("Fill all fields and upload payment screenshot.");
// //       return;
// //     }

// //     setLoading(true);
// //     setError("");

// //     try {
// //       const formData = new FormData();
// //       Object.entries(form).forEach(([key, value]) =>
// //         formData.append(key, value)
// //       );
// //       formData.append("paymentProof", paymentScreenshot);

// //       await axios.post(
// //         "http://localhost:5000/personalized-pick",
// //         formData,
// //         { headers: { "Content-Type": "multipart/form-data" } }
// //       );

// //       alert("Payment submitted successfully!");
// //       if (closeForm) closeForm();
// //       navigate("/");
// //     } catch (err) {
// //       console.error(err);
// //       setError("Submission failed. Try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="pp-overlay">
// //       <div className="pp-modal">
// //         {closeForm && (
// //           <button className="pp-close-btn" onClick={closeForm}>
// //             ✕
// //           </button>
// //         )}

// //         <h3 className="pp-title">Pay ₹299 & Get Personalized Pick</h3>

// //         <div className="pp-qr">
// //           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6pcwkj2OmSn97Tgz88hhQtm52O0pSF6PStA&s" alt="Payment QR" />
// //           <p>Scan & Pay ₹299</p>
// //         </div>

// //         <label>Name</label><input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
// //         <label>Email</label><input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
// //         <label>Budget</label><input name="budget" placeholder="Budget" value={form.budget} onChange={handleChange} />
// //         <label>Use Case</label><input name="useCase" placeholder="Use Case" value={form.useCase} onChange={handleChange} />
        
// //         <label>Category</label>
// //         <select name="category" value={form.category} onChange={handleChange}>
// //           <option value="">Select Category</option>
// //           <option>IEMs</option>
// //           <option>Mobiles</option>
// //           <option>Laptops</option>
// //           <option>Audio</option>
// //           <option>Wearables</option>

// //         </select>

// //         <label>Urgency</label>
// //         <select name="urgency" value={form.urgency} onChange={handleChange}>
// //           <option>Immediate</option>
// //           <option>Within a month</option>
// //           <option>Flexible</option>
// //         </select>

// //         <label className="pp-label">Upload Payment Screenshot</label>
// //         <input type="file" accept="image/*" onChange={handleFileChange} />

// //         {error && <p className="pp-error">{error}</p>}

// //         <button
// //           className="pp-submit-btn"
// //           onClick={handleSubmit}
// //           disabled={loading}
// //         >
// //           {loading ? "Submitting..." : "Submit & Get Recommendation"}
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import "./PersonalizedPick.css";

// export default function PersonalizedPick({ closeForm }) {
//   const { category } = useParams();
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     category: category || "",
//     budget: "",
//     useCase: "",
//     urgency: "Immediate",
//   });

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const validateForm = () => {
//     return (
//       form.name &&
//       form.email &&
//       form.category &&
//       form.budget &&
//       form.useCase &&
//       form.urgency
//     );
//   };

//   const handleSubmit = async () => {
//     if (!validateForm()) {
//       setError("Please fill all fields.");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       await axios.post("http://localhost:5000/personalized-pick", form);

//       alert("Your personalized request has been submitted!");
//       if (closeForm) closeForm();
//       navigate("/");
//     } catch (err) {
//       console.error(err);
//       setError("Submission failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="pp-overlay">
//       <div className="pp-modal">
//         {closeForm && (
//           <button className="pp-close-btn" onClick={closeForm}>
//             ✕
//           </button>
//         )}

//         <h3 className="pp-title">Get Your Personalized Pick</h3>

//         <label>Name</label>
//         <input
//           name="name"
//           placeholder="Your name"
//           value={form.name}
//           onChange={handleChange}
//         />

//         <label>Email</label>
//         <input
//           name="email"
//           placeholder="Your email"
//           value={form.email}
//           onChange={handleChange}
//         />

//         <label>Budget</label>
//         <input
//           name="budget"
//           placeholder="Your budget"
//           value={form.budget}
//           onChange={handleChange}
//         />

//         <label>Use Case</label>
//         <input
//           name="useCase"
//           placeholder="Gaming, Music, Office, etc."
//           value={form.useCase}
//           onChange={handleChange}
//         />

//         <label>Category</label>
//         <select
//           name="category"
//           value={form.category}
//           onChange={handleChange}
//         >
//           <option value="">Select Category</option>
//           <option>IEMs</option>
//           <option>Mobiles</option>
//           <option>Laptops</option>
//           <option>Audio</option>
//           <option>Wearables</option>
//         </select>

//         <label>Urgency</label>
//         <select
//           name="urgency"
//           value={form.urgency}
//           onChange={handleChange}
//         >
//           <option>Immediate</option>
//           <option>Within a month</option>
//           <option>Flexible</option>
//         </select>

//         {error && <p className="pp-error">{error}</p>}

//         <button
//           className="pp-submit-btn"
//           onClick={handleSubmit}
//           disabled={loading}
//         >
//           {loading ? "Submitting..." : "Submit Request"}
//         </button>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./PersonalizedPick.css";

export default function PersonalizedPick({ closeForm }) {
  const { category } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    category: category || "",
    budget: "",
    useCase: "",
    urgency: "Immediate",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // validation
  const validateForm = () => {
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.category ||
      !form.budget ||
      !form.useCase.trim() ||
      !form.urgency
    ) {
      return false;
    }
    return true;
  };

  // submit
  const handleSubmit = async () => {
    if (!validateForm()) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await axios.post(
        "http://localhost:5000/personalized-pick",
        {
          ...form,
          budget: Number(form.budget), // IMPORTANT
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert("Your personalized request has been submitted.");
      closeForm && closeForm();
      navigate("/");
    } catch (err) {
      console.error("Submit error:", err.response?.data || err.message);
      setError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pp-overlay">
      <div className="pp-modal">
        {closeForm && (
          <button className="pp-close-btn" onClick={closeForm}>
            ✕
          </button>
        )}

        <h3 className="pp-title">Get Your Personalized Pick</h3>

        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
        />

        <label>Budget</label>
        <input
          type="number"
          name="budget"
          placeholder="Enter budget"
          value={form.budget}
          onChange={handleChange}
        />

        <label>Use Case</label>
        <input
          type="text"
          name="useCase"
          placeholder="Gaming, Music, Office, etc."
          value={form.useCase}
          onChange={handleChange}
        />

        <label>Category</label>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="IEMs">IEMs</option>
          <option value="Mobiles">Mobiles</option>
          <option value="Laptops">Laptops</option>
          <option value="Audio">Audio</option>
          <option value="Wearables">Wearables</option>
        </select>

        <label>Urgency</label>
        <select
          name="urgency"
          value={form.urgency}
          onChange={handleChange}
        >
          <option value="Immediate">Immediate</option>
          <option value="Within a month">Within a month</option>
          <option value="Flexible">Flexible</option>
        </select>

        {error && <p className="pp-error">{error}</p>}

        <button
          className="pp-submit-btn"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Request"}
        </button>
      </div>
    </div>
  );
}
