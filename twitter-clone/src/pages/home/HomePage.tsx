import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { URLS } from "../../common/constants";

const HomePage = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(URLS.LOGIN);
    }
  });

  return <div>Home Page</div>;
};

export default HomePage;
