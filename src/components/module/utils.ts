export const getTitle = (title: string) => {
  switch (title) {
    case "visual":
      return "시각디자인";
    case "newMedia":
      return "뉴미디어디자인";
    case "architecture":
      return "건축공간디자인";
    case "industrial":
      return "리빙디자인";
    case "culture":
      return "예술문화디자인";
    default:
      return "#000";
  }
};

export const getColor = (title: string) => {
  switch (title) {
    case "visual":
      return "#f7493b";
    case "newMedia":
      return "#ffd43c";
    case "architecture":
      return "#82969f";
    case "industrial":
      return "#00aee9";
    case "culture":
      return "#f7617b";
    default:
      return "#000";
  }
};
