import { Scroll } from "@react-three/drei";

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
  return (
    <Scroll html>
      <div className="w-screen">
        <Section>
          <h1 className="w-screen text-2xl text-black font-bold">
            DeLonghi Espresso Machine
          </h1>
          <br />
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, eget
            aliquam nisl nunc vel lorem. Sed euismod, nisl nec ultricies
            lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nunc vel lorem.
          </p>
        </Section>
        <Section right>
        <h1 className="w-screen text-2xl text-black font-bold">
            Great flavour. Great culture
          </h1>
          <br/>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, eget
            aliquam nisl nunc vel lorem. Sed euismod, nisl nec ultricies
            lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nunc vel lorem.
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, eget
            aliquam nisl nunc vel lorem. Sed euismod, nisl nec ultricies
            lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nunc vel lorem.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, eget
            aliquam nisl nunc vel lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, eget
            aliquam nisl nunc vel lorem. Sed euismod, nisl nec ultricies
            lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nunc vel lorem.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Section>
        <Section left>
        <h1 className="w-screen text-2xl text-black font-bold">
           Number 1 in Europe
          </h1>
          <br/>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec ultricies lacinia, nunc nisl tincidunt nisl, eget
            aliquam nisl nunc vel lorem. Sed euismod, nisl nec ultricies
            lacinia, nunc nisl tincidunt nisl, eget aliquam nisl nunc vel lorem.
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
