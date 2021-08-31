import React from "react";
import "./StoryReel.css";
import Story from "./Story";
import aviLogo from "./images/aviLogo.png";
import aviStory from "./images/aviStory.jpg";
import bhrLogo from "./images/bhrLogo.png";
import bhrStory from "./images/bhrStory.jpg";
import harryLogo from "./images/harryLogo.jpg";
import harryStory from "./images/harryStory.jpg";
import sakLogo from "./images/sakLogo.png";
import sakStory from "./images/sakStory.jpg";
import tanLogo from "./images/tanLogo.png";
import tanStory from "./images/tanStory.jpg";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story image={sakStory} profileSrc={sakLogo} title="Saksham Jaiswal" />
      <Story image={tanStory} profileSrc={tanLogo} title="Tannu Pandey" />
      <Story image={aviStory} profileSrc={aviLogo} title="Aviroop Poddar" />
      <Story image={harryStory} profileSrc={harryLogo} title="Harry Bhai" />
      <Story image={bhrStory} profileSrc={bhrLogo} title="Vikram" />
    </div>
  );
}

export default StoryReel;
