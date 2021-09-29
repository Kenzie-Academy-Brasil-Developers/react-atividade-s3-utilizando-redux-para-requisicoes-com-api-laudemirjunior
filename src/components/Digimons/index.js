import { useSelector } from "react-redux";

const Digimons = () => {
  const { digimons } = useSelector((state) => state);

  return (
    <div className="digimon">
      {digimons.map((digimon, index) => {
        return (
          <div key={index}>
            <img src={digimon.img} alt="" />
            <h3>{digimon.name}</h3>
            <h2>{digimon.level}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Digimons;
