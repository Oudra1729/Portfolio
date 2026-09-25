import {
  SiApachekafka,
  SiExpress,
  SiGit,
  SiJavascript,
  SiLaravel,
  SiMui,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import profilepic from "../assets/PHOTO.png";

const RINGS = [
  {
    id: "inner",
    duration: "54s",
    reverse: true,
    inset: "22%",
    icons: [
      { name: "NestJS", Icon: SiNestjs, color: "#E0234E", angle: 22, priority: true },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6", angle: 142, priority: true },
      { name: "Node.js", Icon: SiNodedotjs, color: "#539E43", angle: 262, priority: true },
    ],
  },
  {
    id: "middle",
    duration: "72s",
    reverse: false,
    inset: "11%",
    icons: [
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#5B8DEF", angle: 0, priority: true },
      { name: "Kafka", Icon: SiApachekafka, color: "#F4F4F5", angle: 90, priority: true },
      { name: "React", Icon: SiReact, color: "#61DAFB", angle: 180, priority: true },
      { name: "Express.js", Icon: SiExpress, color: "#E4E4E7", angle: 270, mark: true },
    ],
  },
  {
    id: "outer",
    duration: "96s",
    reverse: true,
    inset: "5%",
    icons: [
      { name: "Laravel", Icon: SiLaravel, color: "#FF2D20", angle: 45 },
      { name: "Git", Icon: SiGit, color: "#F05032", angle: 135 },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E", angle: 225, compact: true },
      { name: "Material UI", Icon: SiMui, color: "#007FFF", angle: 315, compact: true },
    ],
  },
];

const HeroOrbit = () => {
  return (
    <div className="hero-orbit" aria-hidden="false">
      <div className="hero-orbit__stage">
        {RINGS.map((ring) => (
          <div
            key={ring.id}
            className="hero-orbit__ring"
            data-reverse={ring.reverse ? "true" : "false"}
            style={{
              "--orbit-duration": ring.duration,
              "--orbit-inset": ring.inset,
            }}
          >
            {ring.icons.map((item) => (
              <div
                key={item.name}
                className={`hero-orbit__carrier${item.compact ? " hero-orbit__carrier--compact" : ""}`}
                style={{ "--orbit-angle": `${item.angle}deg` }}
              >
                <div className="hero-orbit__anchor">
                  <div className="hero-orbit__level">
                    <div
                      className={`hero-orbit__icon${item.priority ? " hero-orbit__icon--priority" : ""}${item.mark ? " hero-orbit__icon--mark" : ""}`}
                      style={{ color: item.color }}
                      title={item.name}
                    >
                      <item.Icon aria-hidden="true" />
                      <span className="sr-only">{item.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
        <img
          src={profilepic}
          alt="Portrait of Brahim Oudra"
          className="hero-orbit__photo"
        />
      </div>
    </div>
  );
};

export default HeroOrbit;
