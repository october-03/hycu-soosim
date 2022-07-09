export type memberType = {
  id: string;
  name: string;
  comment?: string;
  freeWork: workType;
  designatedWork: workType;
  gradPic: NodeRequire;
};

export type dataType = {
  industrial: memberType[];
  newMedia: memberType[];
  culture: memberType[];
  visual: memberType[];
  architecture: memberType[];
};

export type workType = {
  image: NodeRequire;
  video?: string;
  title?: string;
  comment?: string;
};
