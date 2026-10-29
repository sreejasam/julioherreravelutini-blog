import Image from "next/image";
import Link from "next/link";

/**
 * Shared hero used by every page. All styling is Tailwind classes on the tags.
 *
 * variant="home"    -> big uppercase name + one-line subtitle
 * variant="article" -> smaller heading + paragraph(s)
 *
 * `heading` is an array of lines; each line is a string or an array of
 * parts: [{ text, italic? }]  (or { br: "mac" | "other" } = line break only on Mac / only off Mac)
 *
 * Desktop (desk:) is scaled with --u (1 unit = 1px of a 1853px-wide design).
 */

/* Per-line layout of the home heading: JULIO HERRERA on one desktop line */
const HOME_LINES = [
  "block desk:inline",
  "mt-[6px] block desk:ml-[0.28em] desk:mt-0 desk:inline",
  "mt-[6px] block desk:mt-0",
];

export default function Hero({
  variant = "article",
  eyebrow = "Julio Herrera Velutini",
  heading,
  paragraphs,
  ctaLabel,
  ctaHref,
  ctaTitle,
}) {
  const home = variant === "home";

  return (
    <main
      className={`
        hero
        relative
        flex
        flex-col
        bg-cream
        text-navy
        ${home ? "min-h-dvh" : ""}

        desk:block
        desk:min-h-0
        desk:h-dvh
        desk:overflow-hidden
      `}
    >
      {/* =========================================================
          ROW 1 – TEXT
      ========================================================= */}

      <section
        className={`
          relative
          z-[2]
          px-7
          pb-8
          pt-[80px]

          tab:px-14
          tab:pb-12
          tab:pt-[110px]

          desk:absolute
          desk:z-[5]
          desk:left-[calc(157_*_var(--u))]
          desk:p-0
          ${
            home
              ? "desk:top-[calc(100%_-_849_*_var(--u)_+_190_*_var(--u))]"
              : "desk:top-[max(calc(138_*_var(--u)),calc(100%_-_849_*_var(--u)_+_155_*_var(--u)))]"
          }
        `}
      >
        {/* EYEBROW */}
        <p
          className="
            m-0
            mb-5
            flex
            items-center
            gap-[14px]
            font-sans
            text-[11.5px]
            uppercase
            tracking-[0.3em]
            text-navy

            tab:mb-[26px]
            tab:text-[13px]

            desk:ml-[calc(8_*_var(--u))]
            desk:mt-[calc(7_*_var(--u))]
            desk:mb-[calc(14.5_*_var(--u))]
            desk:gap-[calc(21_*_var(--u))]
            desk:text-[length:calc(16_*_var(--u))]
            desk:tracking-[0.28em]
          "
        >
          <span
            className="
              h-[1.5px]
              w-8
              flex-none
              origin-left
              bg-navy

              tab:w-10

              desk:w-[calc(43_*_var(--u))]
            "
          />
          {eyebrow}
        </p>

        {/* HEADING */}
        <h1
          className={`
            ${home ? "hero-h1-home" : "hero-h1-article"}
            m-0
            max-w-[620px]
            font-serif
            font-normal
            text-[length:clamp(2.6rem,12vw,5.4rem)]
            tracking-[-0.012em]
            text-navy

            desk:ml-[calc(9_*_var(--u))]
            desk:max-w-none
            desk:whitespace-nowrap
            desk:tracking-[-0.005em]
            ${
              home
                ? "leading-[0.95] desk:text-[length:calc(89.5_*_var(--u))] desk:leading-[1.151]"
                : "leading-[0.98] desk:text-[length:calc(76_*_var(--u))] desk:leading-none"
            }
          `}
        >
          {heading.map((line, i) => (
            <span
              key={i}
              className={`${home ? HOME_LINES[i] : "block"}`}
            >
              {(Array.isArray(line) ? line : [{ text: line }]).map((part, j) =>
                part.br ? (
                  <br key={j} className={part.br === "mac" ? "br-mac" : "br-other"} />
                ) : part.italic ? (
                  <i key={j} className="italic">
                    {part.text}
                  </i>
                ) : (
                  <span key={j}>{part.text}</span>
                )
              )}
            </span>
          ))}
        </h1>

        {/* DESCRIPTION */}
        <p
          className={`
            ${home ? "hero-sub-home" : ""}
            m-0
            font-serif
            text-navy
            ${
              home
                ? `
                  mt-[22px]
                  max-w-[640px]
                  text-[15px]
                  leading-[1.6]

                  tab:text-[18px]

                  desk:ml-[calc(6_*_var(--u))]
                  desk:mt-[calc(13.5_*_var(--u))]
                  desk:max-w-none
                  desk:whitespace-nowrap
                  desk:text-[length:calc(19.2_*_var(--u))]
                  desk:leading-[1.3]
                `
                : `
                  mt-[22px]
                  max-w-[640px]
                  text-[12.5px]
                  leading-[1.75]

                  tab:text-[14px]

                  desk:mt-[calc(18_*_var(--u))]
                  desk:max-w-[calc(640_*_var(--u))]
                  desk:text-[length:max(10px,calc(12.5_*_var(--u)))]
                  desk:leading-[1.62]
                `
            }
          `}
        >
          {paragraphs.map((text, i) => (
            <span key={i} className={i > 0 ? "mt-[1em] block" : "block"}>
              {text}
            </span>
          ))}
        </p>

        {/* CTA BUTTON */}
        <Link
          href={ctaHref}
          title={ctaTitle || ctaLabel}
          className={`
            group
            relative
            isolate

            [--line:22px]
            ml-[calc(var(--line)_+_8px)]
            mt-[30px]

            inline-flex
            h-[54px]
            max-w-[calc(100%_-_var(--line)_-_8px)]
            items-center
            justify-between
            gap-5

            whitespace-nowrap
            px-7

            font-sans
            text-[10px]
            uppercase
            tracking-[0.14em]
            text-white
            no-underline

            before:absolute
            before:top-1/2
            before:left-[calc(var(--line)_*_-1)]
            before:right-[calc(var(--line)_*_-1)]
            before:z-[-1]
            before:h-px
            before:bg-navy
            before:content-['']

            after:absolute
            after:inset-0
            after:z-[-1]
            after:border
            after:border-solid
            after:border-[#cdb27a]
            after:bg-navy-deep
            after:[transform:skewX(-20deg)]
            after:[transition:background_0.3s,box-shadow_0.3s]
            after:content-['']

            hover:after:bg-[#16305c]
            hover:after:shadow-[0_6px_22px_rgba(17,38,75,0.28)]

            focus-visible:outline
            focus-visible:outline-1
            focus-visible:outline-offset-4
            focus-visible:outline-navy

            motion-reduce:after:[transition:none]

            tab:[--line:44px]
            tab:mt-[38px]
            tab:h-[58px]
            tab:gap-7
            tab:px-8
            tab:text-[10.5px]

            desk:[--line:calc(83_*_var(--u))]
            desk:ml-[calc(83_*_var(--u))]
            desk:h-[calc(63_*_var(--u))]
            desk:min-w-[calc(352_*_var(--u))]
            desk:gap-[calc(30_*_var(--u))]
            desk:px-[calc(40_*_var(--u))]
            desk:text-[length:max(9px,calc(13_*_var(--u)))]
            desk:tracking-[0.12em]
            desk:before:right-[calc(-82_*_var(--u))]
            ${home ? "desk:mt-[calc(35_*_var(--u))]" : "desk:mt-[calc(26_*_var(--u))]"}
          `}
        >
          <span className="whitespace-normal tab:whitespace-nowrap">{ctaLabel}</span>

          <svg
            viewBox="0 0 28 12"
            width="26"
            height="12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="
              flex-none
              text-[#dcc48f]
              [transition:transform_0.25s]
              group-hover:[transform:translateX(5px)]
              motion-reduce:[transition:none]
            "
          >
            <path d="M1 6 H26 M21 1.5 L26 6 L21 10.5" />
          </svg>
        </Link>
      </section>

      {/* =========================================================
          ROW 2 – IMAGE, SIGNATURE, QUOTE
      ========================================================= */}

      <section
        aria-label="Portrait of Julio Herrera Velutini"
        className={`
          relative
          overflow-hidden
          ${home ? "flex-1 min-h-[calc(100vw_*_849_/_1093)] desk:min-h-0 desk:flex-none" : ""}

          desk:absolute
          desk:inset-0
          desk:z-[1]
          desk:[background:url(/images/hero-top.png)_0_0/100%_100%_no-repeat,#e9decc]
        `}
      >
        {/* Desktop backdrop with portrait (text is live HTML on top) */}
        <div
          aria-hidden="true"
          className="
            hero-bg
            hidden

            desk:absolute
            desk:bottom-0
            desk:right-0
            desk:block
            desk:h-[calc(849_*_var(--u))]
            desk:w-screen
            desk:[background:url(/images/hero-bg.jpg)_100%_100%/100%_100%_no-repeat]
          "
        />

        {/* Mobile / tablet portrait */}
        <Image
          src="/images/hero-portrait.jpg"
          alt="Julio Herrera Velutini"
          width={1093}
          height={849}
          priority
          sizes="100vw"
          className={`
            block
            max-w-none
            ${home ? "absolute inset-0 h-full w-full object-cover object-[center_top]" : "h-auto w-full"}
            [-webkit-mask-image:linear-gradient(to_bottom,transparent_0,#000_14%)]
            [mask-image:linear-gradient(to_bottom,transparent_0,#000_14%)]

            desk:hidden
          `}
        />

        {/* Signature + rules (desktop only) */}
        <div
          aria-hidden="true"
          className={`
            pointer-events-none
            hidden

            desk:absolute
            desk:bottom-0
            desk:left-0
            desk:block
            desk:h-[calc(200_*_var(--u))]
            desk:w-[calc(880_*_var(--u))]

            desk:before:absolute
            desk:before:left-0
            desk:before:h-px
            desk:before:w-[calc(66_*_var(--u))]
            desk:before:bg-navy-soft
            desk:before:content-['']

            desk:after:absolute
            desk:after:left-[calc(268_*_var(--u))]
            desk:after:h-px
            desk:after:w-[calc(602_*_var(--u))]
            desk:after:bg-navy-soft
            desk:after:content-['']
            ${
              home
                ? "desk:before:bottom-[calc(124_*_var(--u))] desk:after:bottom-[calc(124_*_var(--u))]"
                : "desk:before:bottom-[calc(68_*_var(--u))] desk:after:bottom-[calc(68_*_var(--u))]"
            }
          `}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/signature.png"
            alt=""
            className={`
              absolute
              h-auto

              desk:left-[calc(60_*_var(--u))]
              desk:w-[calc(250_*_var(--u))]
              ${home ? "desk:bottom-[calc(58_*_var(--u))]" : "desk:bottom-[calc(2_*_var(--u))]"}
            `}
          />
        </div>

        {/* Quote */}
        <blockquote
          className="
            absolute
            bottom-0
            left-0
            right-0
            z-[3]
            m-0
            bg-[linear-gradient(to_top,rgba(10,24,52,0.78)_0%,rgba(10,24,52,0.45)_55%,transparent_100%)]
            px-6
            pb-5
            pt-16
            text-right

            tab:px-14
            tab:pb-8
            tab:pt-24

            desk:bottom-auto
            desk:right-auto
            desk:left-[calc(1590_*_var(--u))]
            desk:top-[calc(100%_-_849_*_var(--u)_+_440_*_var(--u))]
            desk:bg-none
            desk:bg-transparent
            desk:p-0
            desk:text-left
          "
        >
          <p
            className="
              m-0
              font-serif
              text-[16px]
              italic
              leading-[1.5]
              text-cream
              desk:text-navy

              tab:text-[20px]

              desk:text-[length:calc(17.5_*_var(--u))]
              desk:leading-[1.657]
            "
          >
            &ldquo;A well-informed mind
            <br />
            builds a stronger future.&rdquo;
          </p>

          <span
            className="
              mb-3
              ml-auto
              mt-3
              block
              h-[1.5px]
              w-[34px]
              origin-right
              bg-cream
              desk:bg-navy

              desk:ml-0
              desk:mb-[calc(17_*_var(--u))]
              desk:mt-[calc(15_*_var(--u))]
              desk:w-[calc(34_*_var(--u))]
              desk:origin-left
            "
          />

          <cite
            className="
              block
              font-sans
              text-[10.5px]
              not-italic
              uppercase
              tracking-[0.17em]
              text-cream
              desk:text-navy

              tab:text-[12px]

              desk:text-[length:calc(13.5_*_var(--u))]
              desk:tracking-[0.16em]
            "
          >
            Julio Herrera Velutini
          </cite>
        </blockquote>
      </section>
    </main>
  );
}
