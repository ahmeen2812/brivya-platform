import gsap from "gsap";

/**
 * Moves the magnetic indicator bar to the target element's exact horizontal bounds
 */
export function animateMagneticGlider(
  gliderElement: HTMLElement | null,
  targetElement: HTMLElement | null,
  containerElement: HTMLElement | null,
  lineWidth = 28,
): void {
  if (!gliderElement || !targetElement || !containerElement) return;

  const targetRect = targetElement.getBoundingClientRect();
  const containerRect = containerElement.getBoundingClientRect();

  // Calculate relative left offset within the container
  const relativeLeft = targetRect.left - containerRect.left;
  const centeredX = relativeLeft + (targetRect.width - lineWidth) / 2;

  gsap.killTweensOf(gliderElement);
  gsap.to(gliderElement, {
    x: centeredX,
    width: lineWidth,
    opacity: 1,
    scaleX: 1,
    duration: 0.38,
    ease: "power3.out",
  });
}

/**
 * Smoothly scales an individual navigation item on hover
 */
export function animateItemMicroZoom(
  itemElement: HTMLElement | null,
  isHovered: boolean,
): void {
  if (!itemElement) return;

  gsap.killTweensOf(itemElement);
  gsap.to(itemElement, {
    scale: isHovered ? 1.05 : 1,
    y: isHovered ? -1 : 0,
    duration: 0.25,
    ease: "power2.out",
  });
}

/**
 * Executes a prismatic specular light sheen beam across the logo
 */
export function animateLogoPrismaticSheen(sheenElement: HTMLElement | null): void {
  if (!sheenElement) return;

  gsap.killTweensOf(sheenElement);
  gsap.fromTo(
    sheenElement,
    { x: "-120%", opacity: 0 },
    {
      x: "180%",
      opacity: 0.85,
      duration: 0.65,
      ease: "power2.inOut",
    },
  );
}

/**
 * Executes the Kinetic Arrow Loop (accepts Element/SVGElement to prevent type mismatch)
 */
export function animateKineticArrowLoop(arrowElement: Element | null): void {
  if (!arrowElement) return;

  gsap.killTweensOf(arrowElement);

  const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

  tl.to(arrowElement, {
    x: 16,
    opacity: 0,
    duration: 0.16,
    ease: "power2.in",
  })
    .set(arrowElement, {
      x: -16,
      opacity: 0,
    })
    .to(arrowElement, {
      x: 0,
      opacity: 1,
      duration: 0.26,
      ease: "power2.out",
    });
}