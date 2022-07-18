export type memberType = {
  id: string;
  name: string;
  comment?: string;
  freeWork: workType;
  designatedWork: workType;
  gradPic: string;
};

export type dataType = {
  industrial: memberType[];
  newMedia: memberType[];
  culture: memberType[];
  visual: memberType[];
  architecture: memberType[];
  professor: memberType[];
};

export type workType = {
  image: string;
  video?: string;
  title?: string;
  comment?: string;
};
