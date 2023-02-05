interface Feature {
  title: string;
  description: string;
  features: string[];
  footerText?: string;
  image?: {
    src: string;
    alt: string;
  };
}
export type Data = Feature[];
export interface FeatureContentProps {
  data: Feature;
  margin?: boolean;
}
