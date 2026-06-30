import { useMemo } from "react";
import Particles from "@tsparticles/react";
import { useTheme } from "../context/ThemeContext";

function AnimatedBackground() {
  const { theme } = useTheme();

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1,
      },

      background: {
        color: {
          value: "transparent",
        },
      },

      fpsLimit: 60,

      particles: {
        number: {
          value: 55,
        },

        color: {
          value: theme === "dark" ? "#38bdf8" : "#334155",
        },

        links: {
          enable: true,
          color: theme === "dark" ? "#38bdf8" : "#334155",
          distance: 150,
          opacity: 0.25,
          width: 1,
        },

        move: {
          enable: true,
          speed: 1,
        },

        opacity: {
          value: 0.4,
        },

        size: {
          value: {
            min: 1,
            max: 4,
          },
        },
      },

      detectRetina: true,
    }),
    [theme]
  );

  return <Particles id="tsparticles" options={options} />;
}

export default AnimatedBackground;