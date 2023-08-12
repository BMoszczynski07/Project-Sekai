type Badge = {
  type: string;
  desc: string | number;
};

type Vocaloid = {
  name: string;
  img?: string;
  desc?: string;
  badges?: Badge[];
};

export default Vocaloid;
