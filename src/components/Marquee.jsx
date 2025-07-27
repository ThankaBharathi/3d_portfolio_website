import { Icon } from "@iconify/react/dist/iconify.js";
import gsap from "gsap";
import { Observer } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(Observer);

const Marquee = ({
  items,
  className = "text-white bg-black",
  icon = "mdi:star-four-points",
  iconClassName = "",
  reverse = false,
}) => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let timeline = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () =>
        timeline.totalTime(timeline.rawTime() + timeline.duration() * 100),
    });

    const length = items.length;
    const startX = items[0].offsetLeft;
    const times = [];
    const widths = [];
    const xPercents = [];
    let curIndex = 0;
    const pixelsPerSecond = (config.speed || 1) * 100;
    const snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1);
    let totalWidth, curX, distanceToStart, distanceToLoop, item;

    gsap.set(items, {
      xPercent: (i, el) => {
        const w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
        xPercents[i] = snap((parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 + gsap.getProperty(el, "xPercent"));
        return xPercents[i];
      },
    });

    gsap.set(items, { x: 0 });
    totalWidth = items[length - 1].offsetLeft + (xPercents[length - 1] / 100) * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);

    for (let i = 0; i < length; i++) {
      item = items[i];
      curX = (xPercents[i] / 100) * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");

      timeline.to(item, {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      }, 0)
      .fromTo(item, {
        xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100),
      }, {
        xPercent: xPercents[i],
        duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
        immediateRender: false,
      }, distanceToLoop / pixelsPerSecond);

      times[i] = distanceToStart / pixelsPerSecond;
    }

    function toIndex(index, vars) {
      vars = vars || {};
      Math.abs(index - curIndex) > length / 2 && (index += index > curIndex ? -length : length);
      const newIndex = gsap.utils.wrap(0, length, index);
      let time = times[newIndex];
      if (time > timeline.time() !== index > curIndex) {
        vars.modifiers = { time: gsap.utils.wrap(0, timeline.duration()) };
        time += timeline.duration() * (index > curIndex ? 1 : -1);
      }
      curIndex = newIndex;
      vars.overwrite = true;
      return timeline.tweenTo(time, vars);
    }

    timeline.next = (vars) => toIndex(curIndex + 1, vars);
    timeline.previous = (vars) => toIndex(curIndex - 1, vars);
    timeline.current = () => curIndex;
    timeline.toIndex = (index, vars) => toIndex(index, vars);
    timeline.times = times;
    timeline.progress(1, true).progress(0, true);

    if (config.reversed) {
      timeline.vars.onReverseComplete();
      timeline.reverse();
    }
    return timeline;
  }

  useEffect(() => {
    const timeline = horizontalLoop(itemsRef.current, {
      repeat: -1,
      paddingRight: 30,
      reversed: reverse,
    });

    Observer.create({
      onChangeY(self) {
        let factor = 2.5;
        if ((!reverse && self.deltaY < 0) || (reverse && self.deltaY > 0)) {
          factor *= -1;
        }
        gsap.timeline({
          defaults: {
            ease: "none",
          },
        })
        .to(timeline, { timeScale: factor * 2.5, duration: 0.2, overwrite: true })
        .to(timeline, { timeScale: factor / 2.5, duration: 1 }, "+=0.3");
      },
    });
    return () => timeline.kill();
  }, [items, reverse]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden w-full h-20 md:h-[100px] flex items-center marquee-text-responsive font-light uppercase whitespace-nowrap ${className}`}
    >
      <div className="flex">
        {items.map((text, index) => (
          <span
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className="flex items-center px-16 gap-x-32"
          >
            {text} <Icon icon={icon} className={iconClassName} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
