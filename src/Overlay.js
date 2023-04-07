import { Scroll } from "@react-three/drei";
import { useCustomization } from "./Context/Customization";
const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white  rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const { chairColor, setChairColor, couchColor, setCouchColor } =
    useCustomization();
  return (
    <Scroll html>
      <div className="w-screen">
        <Section>
          <h1 className="w-screen text-4xl text-black font-bold">
            Chair
          </h1>
          <br />
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, eget
            aliquam nisl nunc vel lorem. Sed euismod, nisl nec ultricies.
          </p>
          <br />
          <div className="">
            <div className="">
              <div className="configurator__section__title">Color</div>
              <div className="configurator__section__values">
                <div
                  className={`item ${
                    chairColor === "Beige" ? "item--active" : ""
                  }`}
                  onClick={() => setChairColor("Beige")}
                >
                  <div className="item__label">Beige</div>
                </div>
                <div
                  className={`item ${
                    chairColor === "Grey" ? "item--active" : ""
                  }`}
                  onClick={() => setChairColor("Grey")}
                >
                  <div className="item__label">Grey</div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section right>
          <h1 className="w-screen text-4xl text-black font-bold">
            Couch
          </h1>
          <br />
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, eget
            aliquam nisl nunc vel lorem. Sed euismod, nisl nec ultricies.
          </p>
          <br />
          <div className="">
            <div className="">
              <div className="configurator__section__title">Color</div>
              <div className="configurator__section__values">
                <div
                  className={`item ${
                    couchColor === "Beige" ? "item--active" : ""
                  }`}
                  onClick={() => setCouchColor("Beige")}
                >
                  <div className="item__label">Beige</div>
                </div>
                <div
                  className={`item ${
                    couchColor === "Red" ? "item--active" : ""
                  }`}
                  onClick={() => setCouchColor("Red")}
                >
                  <div className="item__label">Red</div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section left>
        <h1 className="w-screen text-4xl text-black font-bold">
            Lounge chair
          </h1>
          <br />
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, eget
            aliquam nisl nunc vel lorem. Sed euismod, nisl nec ultricies.
          </p>
          <br />
        </Section>
      </div>
    </Scroll>
  );
};
