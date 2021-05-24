/* eslint-disable no-useless-constructor */
import { IContext } from './context-types';

type TRenderContext =
  | 'mobile-scroll'
  | 'mobile-no-scroll'
  | 'desktop-scroll'
  | 'desktop-no-scroll';

const always: TRenderContext[] = [
  'mobile-scroll',
  'mobile-no-scroll',
  'desktop-scroll',
  'desktop-no-scroll',
];

export class ContextRenderer {
  constructor(private readonly contexts = always) {}

  private has(context: TRenderContext) {
    return this.contexts.some((ctx) => ctx === context);
  }

  canRender({ breakpoint, isScrolled }: IContext) {
    let render = true;

    if (breakpoint === 'mobile') {
      if (isScrolled && !this.has('mobile-scroll')) {
        render = false;
      }

      if (!isScrolled && !this.has('mobile-no-scroll')) {
        render = false;
      }
    } else if (breakpoint === 'desktop') {
      if (isScrolled && !this.has('desktop-scroll')) {
        render = false;
      }

      if (!isScrolled && !this.has('desktop-no-scroll')) {
        render = false;
      }
    }

    return render;
  }
}
