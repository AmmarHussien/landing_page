import "./ServicesSection.css";
import towIcon from "../../assets/car-tow.png";
import fuelIcon from "../../assets/fuel.png";
import oilIcon from "../../assets/oil-icon.png";
import washIcon from "../../assets/wash-icon.png";
import batteryIcon from "../../assets/battery-icon.png";
import tireIcon from "../../assets/tire.png";

function ServicesSection() {
  const services = [
    { icon: towIcon, title: "Car Towing" },
    { icon: fuelIcon, title: "Car Refueling" },
    { icon: tireIcon, title: "Tire Inflate" },
    { icon: oilIcon, title: "Oil Change" },
    { icon: washIcon, title: "Car Wash" },
    { icon: batteryIcon, title: "Battery Recharge" },
  ];

  return (
    <>
      <h1 className="label">Our Service</h1>

      <div className="services">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <img src={service.icon} alt={service.title} />
            <p>{service.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ServicesSection;
