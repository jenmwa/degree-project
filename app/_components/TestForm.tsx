// import React, { ChangeEvent, FormEvent, useState } from "react";

// export default function TestForm() {
//   const [formData, setFormData] = useState({});
//   const [postContent, setPostContent] = useState("");

//   async function handleSubmit(e: any) {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     console.log(formData);
//   }

//   const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
//     console.log("handleonChange");

//     // const { name, value } = e.target;
//     // setFormData({ ...formData, [name]: value });
//     const name = e.target.name;
//     if (e.target.type === "text") {
//       setFormData({ ...formData, [name]: e.target.value });
//     }
//     if (e.target.type === "number") {
//       setFormData({ ...formData, [name]: +e.target.value });
//     }
//     if (e.target.type === "textarea") {
//       setFormData({ ...formData, [name]: e.target.value });
//     }
//     console.log("FormData:", formData, postContent);
//   };

//   console.log(formData);

//   return (
//     <form className="container">
//       <h1>Get in touch</h1>
//       <div className="email block">
//         <label htmlFor="frm-email">Email</label>
//         <input
//           id="frm-email"
//           type="email"
//           name="email"
//           autoComplete="email"
//           onChange={handleOnChange}
//           required
//         />
//       </div>
//       <div className="block phone">
//         <label htmlFor="frm-phone">Phone</label>
//         <input
//           id="frm-phone"
//           type="text"
//           name="phone"
//           autoComplete="tel"
//           onChange={handleOnChange}
//           required
//         />
//       </div>
//       <div className="block amount">
//         <label htmlFor="frm-amount">Amount</label>
//         <input
//           id="frm-amount"
//           type="number"
//           name="amount"
//           autoComplete="Amount"
//           onChange={handleOnChange}
//           required
//         />
//       </div>
//       <div className="name block">
//         <div>
//           <label htmlFor="frm-first">First Name</label>
//           <input
//             id="frm-first"
//             type="text"
//             name="first"
//             autoComplete="given-name"
//             onChange={handleOnChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="frm-last">Last Name</label>
//           <input
//             id="frm-last"
//             type="text"
//             name="last"
//             autoComplete="family-name"
//             onChange={handleOnChange}
//             required
//           />
//         </div>
//       </div>

//       <div className="message block">
//         <label htmlFor="frm-message">Message</label>
//         <textarea
//           id="frm-message"
//           rows={6}
//           name="message"
//           value={postContent}
//           onChange={(e) => setPostContent(e.target.value)}
//         ></textarea>
//       </div>

//       <div className="button block">
//         <button type="submit">Submit</button>
//       </div>
//     </form>
//   );
// }
