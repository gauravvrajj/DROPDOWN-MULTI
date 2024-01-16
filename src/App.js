
import { React} from "react";
// import List from "./Components/List"
import "./App.css";
import { useState } from "react";
import Select from "react-select";
import youtube from './icon/5882172_brand_logo_video_youtube_icon.png'
import gmail from './icon/5882200_email_gmail_google_mail_icon.png'
import instagram from './icon/5882205_instagram_logo_media_social_icon.png'
import github from './icon/6214513_github_logo_icon.png'
import linkedin from './icon/5882206_linkedin_logo_media_social_icon.png'
const options = [
  { value: "youtube", label: "youtube", image: youtube, web:"www.youtube.com"},
  { value: "gmail", label: "gmail", image: gmail, web:"www.gmail.com" },
  { value: "instagram", label: "instagram", image:instagram, web:"www.instagram.com" },
  { value: "github", label: "github", image:github, web:"www.github.com"},
  { value: "linkedin", label: "linkedin" , image:linkedin, web:"www.linkedin.com"}
];

export default function App() {
  const [selectedOption, setSelectedOption] = useState();

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const filterOptions = (candidate, input) => {
    if (input) {
      if (candidate.label.toLowerCase().includes(input.toLowerCase()))
        return true;
      if (
        selectedOption.some((opt) => {
          if (opt.value === candidate.value) return true;
          else return false;
        })
      )
        return true;
      return false;
    }
    return true;
  };

  return (
    <div className="app">
    <h1 className="main">Pick Users</h1>
    <div className="search">

      <Select
        value={selectedOption}
        placeholder="Add new users..."
        onChange={handleChange}
        options={options}
        formatOptionLabel={social => (
          <div className="social-option">
            <img src={social.image} alt="social" />
            <span>{social.label}</span>
          </div>
        )}
        isMulti
        hideSelectedOptions={true}
        isSearchable
        filterOption={filterOptions}
      />
       <hr className="line"/>
    </div>
    </div>
  );
}

// function App() {
//   const [value, setValue] = useState("");
//   return (
//     <div className="app">
//       <h1 className="main">Pick Users</h1>
//       <div className="search">

//       {/* <input
//       className="searchbar"
// type="text"
//    placeholder=" Add new User..." /> */}

// <Search
//         options={animals}
//         label="name"
//         id="id"
//         selectedVal={value}
//         handleChange={(val) => setValue(val)}
//       />
//    <hr className="line"/>
   


//       </div>
//       {/* <List /> */}
//     </div>
//   );
// }

// export default App;

