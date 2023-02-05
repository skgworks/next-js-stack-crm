export type onItemClick = (index: number) => void;

interface FAQ {
  title: string;
  content: JSX.Element;
}
export interface Data {
  title: string;
  faqs: FAQ[];
}

export interface AccordionProps {
  data: FAQ;
  index: number;
  active: boolean;
  onItemClick: (index: number) => void;
}
