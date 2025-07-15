import React from 'react';

export const HomeBrands = () => {
  const companies = [
    {
      name: "Reporter",
      icon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA4CAMAAAC16DqDAAAArlBMVEX+AAD/////AADyAAD9+/v79fXxe3rshobxycnvhYbsa2jwY2f6AAD8///3AADmAAD77u7spKPuOTf3z9DnZmjoZWPoc3Twdnfus7Hpe3nx5uXogH/nXF7wXWLrqKXuhH/niInrl5LmTE3ourfmNjfuSUfvPkHwm5z2wsTkl5f3wL3uGBruWVrbdXXeAAD14uDfFRLlKiveraziHCDhpab12djbTkvgPTzfaGjhwcJyR9yJAAACCUlEQVRIie2WW5eaMBSFsyEZ6VSJgVEQ7YxyEy8jpZZq//8fa4Kjotyc167ZD5Ls87kXHjlRAlojoNamIIzrVfWAUY3NB4TpWlXfgOcaWy9wcq8TXrU/h5Mv/Av/D/DaaRrVTxMdP1XkuIBwqvYEBJ3ySutu3NCnJZzNvlf047VMa/1eCa/7qG8lWnbkytc38u2Glvy0Fe9d6I/iOb8V/8guNO3EjXLplN+Cl7PPfDN+R0v1WnCj6sv+NOHVbKV5A+7VuCq/KX1h1tDarPHe63i/pTPLe17zW/u+MG8rfse3esOr7I5npsz7DzyRF/6U3YVf+uO3TtN12or8czYafuTnuOEv9AMnwcK80o+cM0FpTVhoWWEchfISx5ZlRVGk9mqpXOnLvSrFcewPyNC3bXvJE/m6Whv22tI2rtHTt4Vr24btCrl0Xw072cozcviCwMWKeUK8U08wtgNSrI9IXAhhIFjmVIhFSkWKn1D4S4ZfLH929jTgAX6Dm3OsMMrgag6ifj4cOWHucYGQKhxgGQPDhMmlSORoxPJN0j0QB34/B6Mil/uEF+l/8pTTYLfbwcg2ZIKln9N3zPJU154Unu44T9MDJurej/B9HNW/tb9INI2Y8nAfbMfKHWsTiaey5KWeblCVziPdDPdheIj34aYvpfNQJ3rhqgvJZAutzOrrkcSp0Sz73sA/m5Eys3qopDYAAAAASUVORK5CYII=",
      
    },
    {
      name: "Lakshya",
      icon:
        "https://api.lakshyacommerce.com/uploads/backend/setting/1714646008734logo.png",
      
    },
    {
      name: "Dilse FM",
      icon:
        "https://yt3.googleusercontent.com/RS4KMxrEwCPXSvbTyH9pdMFGobFRPb584qiiwfsbRmvZAFxyjNAuuDOPAeoZ07NV-X8ctfauXg=s160-c-k-c0x00ffffff-no-rj",
      
    },
    {
      name: "Al Madina UAE",
      icon: "https://www.almadinahypermarket.ae/assets/img/madina-logo.png",
      
    },
    {
      name: "Yellow Cloud",
      icon: "https://www.yellowcloudonline.com/wp-content/uploads/2025/03/yellowcloudonline-3rd.png",
      
    },
    {
      name: "Spaco",
      icon: "http://www.spaco.co.in/images/footer-logo.png",
      
    },
    {
      name: "Hedge",
      icon: "https://hedgeequities.com/Hedge%20Logo/Website%20Images%201100%20x%20320-01.png",
      
    },
    {
      name: "Emaraj",
      icon: "https://emaraj.com/wp-content/uploads/2024/04/EMARAJ-LOGO-2048x834.png",
      
    },
  ];

  return (
    <div className="bg-black text-white py-20 px-4">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          TRUSTED BY LEADING BRANDS
        </h2>
        <p className="text-center text-gray-300 mb-12 uppercase tracking-widest">
          The silent force behind brand growth across Kerala and UAE
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
  {companies.map((company, index) => (
    <div
      key={index}
      className="rounded-lg p-6 hover:scale-110 hover:shadow-md transition duration-300 text-center flex flex-col items-center"
    >
      <img
        src={company.icon}
        alt={company.name}
        className="max-h-12 w-auto mb-4 object-contain"
      />
      <h3 className="text-lg font-semibold mb-1">{company.name}</h3>
    </div>
  ))}

  {/* Centered "Many More" */}
  <div className="col-span-full flex justify-center mt-4">
    <div className="rounded-lg p-6 transition duration-300 text-center flex flex-col justify-center items-center">
      <h3 className="text-lg font-semibold mb-1">Many More</h3>
    </div>
  </div>
</div>


        {/* Closing line */}
        <p className="text-xl lg:text-2xl font-light text-gray-300 text-center mt-12 max-w-3xl mx-auto">
          Through personalized consultation, market positioning, and algorithm strategies, Sham has
          helped brands scale with measurable results.
        </p>
      </div>
    </div>
  );
};
