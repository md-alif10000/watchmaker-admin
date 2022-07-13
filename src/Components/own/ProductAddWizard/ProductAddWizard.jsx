import { useState } from "react";
import Basicdata from "./Basicdata";
import Pictures from "./Pictures";
import styles from "./ProductAddWizard.module.css";
import Riepilogo from "./Riepilogo";
import TitleText from "./TitleText";
import WatchData from "./WatchData";
import ArrowBack from "remixicon-react/ArrowLeftLineIcon";

const ProductAddWizard = () => {
  const [step, setstep] = useState(0);

  const getComponent = () => {
    switch (step) {
      case 0:
        return <Basicdata />;
      case 1:
        return <TitleText />;
      case 2:
        return <WatchData />;
      case 3:
        return <Pictures />;
      case 4:
        return <Riepilogo />;
      default:
        return <Basicdata />;
    }
  };

  const getTitle = () => {
    switch (step) {
      case 0:
        return "Basic data";
      case 1:
        return "Text ,title and Price";
      case 2:
        return "InSert Watch data";
      case 3:
        return "Pictures";
      case 4:
        return "Riepilogo ";
      default:
        return "Basic Data";
    }
  };

  return (
    <div className={styles.wizard}>
      <div className={styles.header}>
        <ArrowBack
          size={32}
          className="text-primary "
          onClick={() => setstep(step - 1)}
          style={{ position: "absolute", left: "15px" }}
        />
        <h3>{getTitle()} </h3>
      </div>

      <div className={styles.content}>
        <div className={styles.progress}>
          <div className={`${step >= 0 && "bg-primary"}`}></div>
          <div className={`${step >= 1 && "bg-primary"}`}></div>
          <div className={`${step >= 2 && "bg-primary"}`}></div>
          <div className={`${step >= 3 && "bg-primary"}`}></div>
          <div className={`${step >= 4 && "bg-primary"}`}></div>
        </div>
        {getComponent()}
      </div>

      <div className={styles.actions}>
        <button>Save Draft</button>
        <button className={styles.next} onClick={() => setstep(step + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductAddWizard;
