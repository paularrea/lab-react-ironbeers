import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className="home">
      <div className="beersImg"><Link to="/beers" style={{ textDecoration: "none" }}>
        Beers
      </Link></div>
      <p>
        Our beer has a knack for turning up wherever vibrant, open-minded people
        come together. We’ve seen our cans at hip hop festivals, our kegs
        holding up countertops in Singaporean food halls, and our labels and
        stickers on countless walls and bars. We aim to always support the
        people drinking our beer, no matter how far they are from our home
        borough. Community involvement is a cornerstone of our brewery.
      </p>
      <div className="newImg"><Link to="/new-beer" style={{ textDecoration: "none" }}>
        New Beer
      </Link></div>
      <p>
        We brew The Stonewall Inn IPA in support of The Stonewall Inn Gives Back
        Initiative, and proudly marched with them at World Pride 2019 in NYC.
        Local groups including the Prospect Park Alliance, Transportation
        Alternatives, and Brooklyn Museum have received beer from us for their
        events. To see how we can support your group, get in touch with the
        button below.
      </p>
      <div className="randomImg"><Link to="/random-beer" style={{ textDecoration: "none" }}>
        Random Beer
      </Link></div>
      <p>
        We aim to always support the people drinking our beer, no matter how far
        they are from our home borough. Community involvement is a cornerstone
        of our brewery. We brew The Stonewall Inn IPA in support of The
        Stonewall Inn Gives Back Initiative, and proudly marched with them at
        World Pride 2019 in NYC. Local groups including the Prospect Park
        Alliance, Transportation Alternatives, and Brooklyn Museum have received
        beer from us for their events.
      </p>
    </div>
  );
};

export default navbar;
