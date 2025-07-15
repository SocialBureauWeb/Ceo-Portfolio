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
      name: "Al Madina UAE",
      icon: "https://www.almadinahypermarket.ae/assets/img/madina-logo.png",
      
    },
    {
      name: "Yellow Cloud",
      icon: "https://www.yellowcloudonline.com/wp-content/uploads/2025/03/yellowcloudonline-3rd.png",
      
    },
    {
      name: "Spaso",
      icon: "data:image/jpeg;base64,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",
      
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
<div className="rounded-lg p-6 transition duration-300 text-center flex flex-col justify-center items-center">
      <h3 className="text-lg font-semibold mb-1">Many More</h3>
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
