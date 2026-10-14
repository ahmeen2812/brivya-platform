/**
 * BRIVYA SOLUTIONS — FORM INPUT SEQUENTIAL ENTRANCE ENGINE
 * Coordinates the precise sequential stagger on the right form bay:
 * Form Title → Full Name → Email → Project Type → Message → Action Buttons.
 */

import gsap from "gsap";
import {
  INQUIRY_MOTION,
  checkIsMobile,
  checkPrefersReducedMotion,
} from "./animationConfig";

export interface FormAnimationTargets {
  readonly formHeading: HTMLElement | null;
  readonly fullNameField: HTMLElement | null;
  readonly emailField: HTMLElement | null;
  readonly projectTypeField: HTMLElement | null;
  readonly messageField: HTMLElement | null;
  readonly actionButtons: HTMLElement | null;
}

/**
 * Builds the sequenced staggered entrance for the 4-field inquiry form
 */
export function buildFormFieldsTimeline(
  targets: FormAnimationTargets,
  masterTimeline: gsap.core.Timeline,
  positionOffset: number = 0.24
): void {
  const {
    formHeading,
    fullNameField,
    emailField,
    projectTypeField,
    messageField,
    actionButtons,
  } = targets;

  // Accessibility bypass for reduced motion
  if (checkPrefersReducedMotion()) {
    gsap.set(
      [
        formHeading,
        fullNameField,
        emailField,
        projectTypeField,
        messageField,
        actionButtons,
      ].filter(Boolean),
      {
        autoAlpha: 1,
        y: 0,
      }
    );
    return;
  }

  const isMobile = checkIsMobile();
  const fieldY = isMobile
    ? INQUIRY_MOTION.travel.mobileFieldY
    : INQUIRY_MOTION.travel.desktopFieldY;

  // 1. Form Section Title
  if (formHeading) {
    masterTimeline.fromTo(
      formHeading,
      {
        autoAlpha: 0,
        y: fieldY,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.48,
        ease: INQUIRY_MOTION.easings.executiveDecel,
      },
      positionOffset
    );
  }

  // 2. Strict Sequential Stagger: Name → Email → Type → Message
  const orderedFields = [
    fullNameField,
    emailField,
    projectTypeField,
    messageField,
  ].filter(Boolean) as HTMLElement[];

  if (orderedFields.length > 0) {
    masterTimeline.fromTo(
      orderedFields,
      {
        autoAlpha: 0,
        y: fieldY,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.46,
        stagger: INQUIRY_MOTION.stagger.fields,
        ease: INQUIRY_MOTION.easings.powerOut,
      },
      positionOffset + 0.1
    );
  }

  // 3. Action Buttons Group (Primary + Secondary)
  if (actionButtons) {
    const buttonsDelay = positionOffset + 0.1 + orderedFields.length * INQUIRY_MOTION.stagger.fields;
    masterTimeline.fromTo(
      actionButtons,
      {
        autoAlpha: 0,
        y: fieldY,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.48,
        ease: INQUIRY_MOTION.easings.powerOut,
      },
      buttonsDelay
    );
  }
}