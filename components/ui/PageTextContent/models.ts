export enum EEntityType {
  TITLE = 'title',
  TEXT = 'text',
}

export enum ETextAnchor {
  START = 'start',
  MIDDLE = 'middle',
}

export type TEntityConfig = {
  landscapePath: string;
  portraitPath: string;
  landscapeId: string;
  landscapeHref: string;
  portraitId: string;
  portraitHref: string;
  text: string;
  entityClass: string;
  startXCoordinate: number;
  textAnchor: ETextAnchor,
}[];

type TCreateEntityConfig = (params: {
  type: EEntityType,
  list: string[],
  entityId: string,
  createStartYCoordinate: (idx: number) => number
})=> TEntityConfig;

export type TComponentProps = {
  aspectRatio?: number,
  titleList?: string[],
  paragraphList?: string[][],
}

export const defaultProps = {
  aspectRatio: 1 / 1.205,
  titleList: ()=> [],
  paragraphList: ()=> [],
};

export const createEntityConfig: TCreateEntityConfig = (
  { type,
    list,
    entityId,
    createStartYCoordinate,
  }) => {
  return list.reduce<TEntityConfig>((config, currentItem, currentIdx) => {
    const landscapeId = `landscape-content-${entityId}-${type}-path-${currentIdx}`;
    const portraitId = `portrait-content-${entityId}-${type}-path-${currentIdx}`;
    const startY = createStartYCoordinate(currentIdx);

    const startXCoordinate = type === EEntityType.TITLE ? 50 :
      !currentIdx ? 4 : 0.5;

    const textAnchor = type === EEntityType.TITLE ? ETextAnchor.MIDDLE : ETextAnchor.START;

    config.push({
      landscapePath: `M0,${startY} C0,${startY},50,${startY - 7},100,${startY}`,
      portraitPath: `M0,${startY - 3.5} H100`,
      landscapeId,
      portraitId,
      landscapeHref: `#${landscapeId}`,
      portraitHref: `#${portraitId}`,
      text: currentItem,
      entityClass: `page-text-content__line_${type}`,
      startXCoordinate,
      textAnchor,

    });

    return config;
  }, []);

};

export const createContentConfig = (titleList: string[], paragraphList: string[][], contentId: string): TEntityConfig => {
  let prevParagraphLinesAmount = 0;

  const textConfig = paragraphList.flatMap((paragraph, paragraphIdx) => {
    prevParagraphLinesAmount = paragraphIdx ? prevParagraphLinesAmount + paragraphList[paragraphIdx - 1].length : 0;

    return createEntityConfig({
      type: EEntityType.TEXT,
      list: paragraph,
      entityId: contentId + paragraphIdx,
      createStartYCoordinate: (idx) => {
        return 8 + (titleList.length - 1) * 7 + 7 + (idx + prevParagraphLinesAmount) * 5;
      },

    });
  });

  return [
    ...createEntityConfig({
      type: EEntityType.TITLE,
      list: titleList,
      entityId: contentId,
      createStartYCoordinate: (idx) => {
        return 8 + idx * 7;
      },
    }),
    ...textConfig,
  ];
};
