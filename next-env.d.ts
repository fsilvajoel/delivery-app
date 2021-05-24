/// <reference types="next" />
/// <reference types="next/types/global" />

type ImagePath = string;

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export = content;
}

declare module '*.png' {
  const content: ImagePath;
  export = content;
}

declare module '*.jpeg' {
  const content: ImagePath;
  export = content;
}

declare module '*.jpg' {
  const content: ImagePath;
  export = content;
}
