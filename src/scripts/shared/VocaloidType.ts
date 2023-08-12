type Badge = {
  type: string;
  desc: string | number;
};

type AllVocaloids = {
  name: "All Vocaloids";
};

type OneVocaloid = {
  name: string;
  img: string;
  desc: string;
  badges: Badge[];
};

type Vocaloid = OneVocaloid | AllVocaloids;

export default Vocaloid;
