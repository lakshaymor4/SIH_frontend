import React, { useState } from 'react';
import calen from "../assets/images/calen.jpg"
function MyForm() {
  const initialFormData = {
    name: '',
    bloodGroup: '',
    age: '',
    contactNo: '',
    email: '',
    language: '',
    gender: '',
    address: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send the data to an API
    console.log(formData);
    // Reset the form after submission
    setFormData(initialFormData);
  };

  const indianLanguages = [
    'Hindi',
    'Bengali',
    'Telugu',
    'Marathi',
    'Tamil',
    'Urdu',
    'Gujarati',
    'Kannada',
    'Odia',
    'Punjabi',
    'Malayalam',
    'Assamese',
    'Maithili',
    'Sanskrit',
    'Kashmiri',
    'Nepali',
    'Konkani',
  ];

  return (
    <>
    
            <div className="flex flex-row pt-28 ml-10 ">
               <div className="pl-20 "> <h1 className="font-bold text-5xl text-indigo-900">Appointment<br /> <div className="pt-4">Booking</div></h1>
                 <p className="text-xs text-slate-500 mt-4 pr-20">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ducimus nulla, molestias velit commodi cumque, quibusdam libero dignissimos esse quia voluptatum soluta unde laudantium eius mollitia maxime officia deleniti autem?
    Asperiores, recusandae. Consectetur, soluta cum omnis deleniti labore culpa quas rem exercitationem natus incidunt molestias ad, reprehenderit quia quaerat libero alias commodi magnam delectus repudiandae, deserunt eligendi quibusdam. Aut, ullam.
    Dicta, eos dolor deleniti magni cupiditate reprehenderit culpa. Quibusdam expedita sunt iste sint deserunt nulla aliquam fugit deleniti officiis illo odit nostrum quisquam, beatae eos vero possimus consequuntur? Itaque, excepturi.
    </p>
</div>
        <img src = {calen} className="cover h-full"/>
        </div>
    <div className='bg-[url("./assets/images/back.jpg")] flex flex-col items-end pr-20 pt-20'>
    <div className='main-form pl-8 pt-8 pr-10 rounded-[2.5em] '>
      
      <form onSubmit={handleSubmit}>
        <div className='side '>
          <label>Name:</label>
          <br></br>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className='side'>
          <label>Blood Group:</label>
          <br></br>
          <input
            type="text"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleInputChange}
            placeholder="Enter your blood group"
            required
          />
        </div>
        <div className='side'>
          <label>Age:</label>
          <br></br>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Enter your age"
            required
          />
        </div>
        <div className='side'>
          <label>Contact No:</label>
          <br></br>
          <input
            type="text"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleInputChange}
            placeholder="Enter your contact number"
            required
          />
        </div>
        <div className='side'>
          <label>Email:</label>
          <br></br>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className='side  border-solid border-black rounded-[2.5em]'>
          <label>Select Language:</label>
          <br></br>
          <select
            name="language"
            value={formData.language}
            onChange={handleInputChange}
            required
            className=''
          >
            <option value="" disabled>
              Select Language
            </option>
            {indianLanguages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>
        <div className='side flex flex-row'>
          <label>Gender:</label>
          <br></br>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleInputChange}
            required
          />{' '}
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleInputChange}
            required
          />{' '}
          Female
          <input
            type="radio"
            name="gender"
            value="Other"
            onChange={handleInputChange}
            required
          />{' '}
          Other
        </div>
        <div className='side'>
          <label>Address:</label>
          <br></br>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter your address"
            required
          />
        </div>
        <div className='side'>
            <label>Full Name:</label>
                <br></br>
                <textarea
            name="fullname"
            value={formData.fullname}
            onChange={handleInputChange}
            placeholder="Enter your Full name"
            required
            />
        </div>
                <div className='side'>
            <label>Relationship:</label>
                
                <br></br><textarea
            name="relationship"
            value={formData.relationship}
            onChange={handleInputChange}
            placeholder="Enter Relationship"
            required
            />
        </div>
                <div className='side'>
            <label>Contact No:</label>
                <br></br>
                <textarea
            name="contactno"
            value={formData.contactno}
            onChange={handleInputChange}
            placeholder="Enter your Phone number"
            required
            />
        </div>
                <div className='side'>
            <label>Additional Information</label>
                <br></br>
                <textarea
            name="addinfo"
            value={formData.additionalinfo}
            onChange={handleInputChange}
            placeholder="Enter"
            required
            />
        </div>

        <button type="submit" className='bg-[#536CF5] text-white pt-4 pb-4 pl-10 pr-10 rounded-[2.5em] text-xl ml-4'>Submit</button>
      </form>
    </div>
    </div>
    </>
  );
}

export default MyForm;
