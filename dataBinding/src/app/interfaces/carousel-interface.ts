export interface IcarouselContext {
  $implicit: string;
  controller: {
    next: () => void;
    prev: () => void;
  };
  activeSlide: number;
}
