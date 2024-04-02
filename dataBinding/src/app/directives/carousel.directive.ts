import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";
import { IcarouselContext } from "../interfaces/carousel-interface";
import { setInterval } from "timers/promises";

@Directive({
  selector: "[appCarousel]",
})
export class CarouselDirective implements OnInit {
  context: IcarouselContext | null = null;
  index: number = 0;
  timer:any;

  constructor(
    private templateRef: TemplateRef<IcarouselContext>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input("appCarouselFrom") images: string[] = [];

  public ngOnInit(): void {
    this.context = {
      $implicit: this.images[0],
      controller: {
        next: () => this.nextSlid(),
        prev: () => this.prevSlid(),
      },
      activeSlide: 0,
    };
    this.viewContainer.createEmbeddedView(this.templateRef, this.context);
  }
  public nextSlid(): void {
    this.index++;
    if (this.index >= this.images.length) {
      this.index = 0;
    }
    if (this.context) {
      this.context.$implicit = this.images[this.index];
      this.context.activeSlide = this.index;
    }
  }
  public prevSlid(): void {
    this.index--;
    if (this.index < 0) {
      this.index = this.images.length - 1;
    }
    if (this.context) {
      this.context.$implicit = this.images[this.index];
      this.context.activeSlide = this.index;
    }
  }
  public autoplay(): void {
    this.timer = setInterval(()=>{
      this.nextSlid();
    }, 1000);
  }

  public clearAutoPlay(): void {
    clearInterval(this.timer);
  }
}
