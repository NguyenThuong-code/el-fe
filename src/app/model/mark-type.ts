export enum MarkTypeEnum {
  SIX_POINT_FIVE = 'SIX_POINT_FIVE',
  SEVEN = 'SEVEN',
  SEVEN_POINT_FIVE = 'SEVEN_POINT_FIVE',
}

export const MarkType: { [key in MarkTypeEnum]: { id: number; name: string } } = {
  [MarkTypeEnum.SIX_POINT_FIVE]: { id: 1, name: '6.5' },
  [MarkTypeEnum.SEVEN]: { id: 2, name: '7.0' },
  [MarkTypeEnum.SEVEN_POINT_FIVE]: { id: 3, name: '7.5' },
};
