import React from "react";
import ContentLoader from "react-content-loader";
function PizzaLoading() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="103" y="156" rx="0" ry="0" width="2" height="0" />
      <circle cx="135" cy="123" r="120" />
      <rect x="0" y="300" rx="0" ry="0" width="287" height="0" />
      <rect x="0" y="260" rx="3" ry="3" width="276" height="24" />
      <rect x="-2" y="299" rx="6" ry="6" width="276" height="84" />
      <rect x="1" y="401" rx="5" ry="5" width="98" height="29" />
      <rect x="142" y="401" rx="13" ry="13" width="133" height="29" />
    </ContentLoader>
  );
}

export default PizzaLoading;
