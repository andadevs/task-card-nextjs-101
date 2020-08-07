/**
 * @file components/presentationals/TskCard/index.js
 * @name Component/Presentational/TskCard
 * @classdesc Component for card context
 * @memberof Component/Presentationals
 * @since v1.0.0
 * @author boykland/clenondavis <clenondavis@outlook.com>
 * @example
 * <TskCard />
 */

//#region dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faBell,
  faCircle,
  faCheckCircle,
  faCamera,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import ImageUploading from "react-images-uploading";
//#endregion
//#region component
import { TskTag } from "../";
//#endregion
//#region styles
import { cardStyle } from "../../../styles";
//#endregion

/**
 * @function
 * @name TskCard
 * @memberof Component/Presentational/TskCard
 * @description Functional component for card
 * @param {-} none -
 * @return {COMPONENT} card component context
 */
const TskCard = ({ data }) => {
  const { title, due_date, is_completed } = data;

  return (
    <div className={cardStyle.card}>
      <div className={cardStyle.header}>
        <div className={cardStyle.iconContainer}>
          <FontAwesomeIcon className={cardStyle.icon} icon={faLaptop} />
        </div>
        <div className={cardStyle.titleContainer}>
          <h1 className={cardStyle.title}>
            <span className={cardStyle.text}>{title}</span>
          </h1>
          <TskTag icon={faBell} text={due_date} />
        </div>
        <div className={cardStyle.check}>
          {is_completed ? (
            <FontAwesomeIcon
              className={cardStyle.checked}
              icon={faCheckCircle}
            />
          ) : (
            <FontAwesomeIcon className={cardStyle.uncheck} icon={faCircle} />
          )}
        </div>
      </div>
      <div className={cardStyle.content}>
        <div className={cardStyle.container}>
          <ImageUploading
            maxNumber={4}
            maxFileSize={6000000}
            multiple
            acceptType={["jpg", "png"]}
            onChange={() => {}}
            onError={() => {}}
          >
            {({ imageList, onImageUpload, onImageRemoveAll }) => (
              <>
                <div
                  className={cardStyle.floatFileBoxAccion}
                  onClick={onImageUpload}
                >
                  <FontAwesomeIcon className={cardStyle.icon} icon={faCamera} />
                </div>
                {imageList.map((image) => (
                  <div key={image.key} className="image-item">
                    <div className={cardStyle.boxDefault}>
                      <img
                        className={cardStyle.img}
                        src={image.dataURL}
                        alt="image"
                      />
                      <div className={cardStyle.accion}>
                        <FontAwesomeIcon
                          className={cardStyle.close}
                          icon={faTimesCircle}
                          onClick={image.onRemove}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </ImageUploading>
        </div>
      </div>
      <div className="tsk-crd-footer"></div>
    </div>
  );
};

export default TskCard;
