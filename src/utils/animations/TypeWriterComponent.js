import React from "react";
import TypeWriter from "typewriter-effect";
const TypeWriterComponent = ({ text }) => {
  return (
    <TypeWriter
      options={{
        strings: text,
        autoStart: true,
        loop: false,
        delay: 20,
      }}
      onInit={(typewriter) => {
        typewriter.start();
      }}
    />
  );
};

export default TypeWriterComponent;
