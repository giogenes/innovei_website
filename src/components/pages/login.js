import React from "react";

import logo from "../../res/logo.svg";

function Login() {
  return (
    <div>
      <div className="h-screen -my-32 pt-32 flex ">
        <img className="blur-xl" src={logo} />
      </div>
      <div className="flex flex-col z-100">
        <h className="mx-auto text-8xl -my-96 text-gray-800 font-semibold">
          This Page is Under Construction
        </h>
      </div>
    </div>
  );
}

export default Login;
