export type onItemClick = (index: number) => void;

export interface MenuProps {
  links: { name: string; link: string }[];
  onClick: (index: number) => void;
  active: number;
}

export interface MobileViewProps {
  menuOpen: boolean;
  onClick: () => void;
}
