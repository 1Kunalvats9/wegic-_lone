// components/Navbar.jsx
'use client'; // This directive is important for client-side functionality in Next.js 13+

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  const navRef = useRef(null);
  const linkRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {

    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (hoveredLink !== null && linkRefs.current[hoveredLink]) {
      const { offsetLeft, offsetWidth } = linkRefs.current[hoveredLink];
      setIndicatorStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    } else {
      setIndicatorStyle({ left: 0, width: 0 });
    }
  }, [hoveredLink]);

  const navItems = [
    { name: 'User Cases', href: '/best-practices', target: '_blank' },
    { name: 'Help Center', href: 'https://help.wegic.ai/', target: '_blank' },
    { name: 'Pricing', href: '/pricing', target: '_self' },
  ];

  return (
    <nav
      data-follow-hidden="true"
      className="fixed w-full px-8 py-6 pt-4 z-50 md:bg-transparent"
      style={{ top: 0, transform: 'none' }} 
    >
      <div className="w-full h-full z-10 relative flex items-center gap-2 justify-between transition-all duration-300">
        {/* Logo Section */}
        <div className="flex gap-[18px]">
          <Link href="/" className="flex items-center">
            <div className="hidden text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-auto h-8"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M16 0C7.16031 0 0 7.16346 0 16C0 24.8367 7.16031 32.0001 16 32.0001C22.6932 32.0001 28.4367 27.897 30.8267 22.0667C30.5923 22.2974 30.3406 22.5075 30.0934 22.6934C29.219 23.351 28.0596 23.8495 26.8534 23.4401C25.763 23.0699 25.0723 22.1819 24.6534 21.2534C24.4686 20.8439 24.3199 20.4054 24.2134 19.9467C23.6579 21.0293 23.0055 22.0974 22.2267 22.9201C21.3418 23.8546 20.169 24.5935 18.6934 24.4534C17.479 24.3381 16.5135 23.8147 15.8534 22.9601C15.5923 22.6221 15.3875 22.2463 15.24 21.8534C14.9082 22.3451 14.5392 22.8121 14.12 23.2001C13.3115 23.9485 12.2905 24.4665 11.04 24.4267C8.67669 24.4267 7.31477 22.5139 6.88001 20.3601C6.43993 18.1796 6.81404 15.3909 8.08001 12.6267C9.6973 9.09553 12.0463 6.395 13.2134 5.52001C13.7202 5.13999 14.4466 5.25332 14.8267 5.76001C15.2068 6.2667 15.107 6.98 14.6 7.36002C13.802 7.95833 11.6542 10.3242 10.16 13.5867C9.04831 16.0139 8.79612 18.302 9.12002 19.9067C9.44798 21.5315 10.2357 22.1334 11.0534 22.1334C11.0674 22.1334 11.0926 22.1334 11.1067 22.1334C11.6254 22.1525 12.0827 21.9618 12.56 21.5201C13.0615 21.0559 13.5368 20.3491 14 19.4534C14.4514 18.5806 14.8567 17.6034 15.2667 16.6134L15.28 16.56C15.5154 15.9919 15.7626 15.4168 16.0134 14.8667C16.1871 14.4754 16.3706 14.086 16.5734 13.72C16.9408 13.0565 17.2438 12.5545 17.4534 12.2134C17.5572 12.0444 17.6375 11.9146 17.7067 11.8134C17.7392 11.7657 17.7854 11.7053 17.8267 11.6534C17.8439 11.6316 17.879 11.5736 17.9334 11.52C17.9571 11.4966 18.0179 11.4461 18.1067 11.3867C18.1512 11.3569 18.2328 11.3089 18.3467 11.2667C18.4514 11.228 18.681 11.1626 18.96 11.2134C19.2882 11.273 19.556 11.4644 19.72 11.72C19.8586 11.936 19.8934 12.142 19.8934 12.24C19.91 12.4286 19.8667 12.5769 19.8667 12.6134C19.8428 12.7133 19.8 12.79 19.8 12.8134C19.7723 12.8793 19.7322 12.9381 19.7067 12.9867C19.6508 13.0932 19.58 13.244 19.48 13.4134C19.2816 13.7498 18.9728 14.2322 18.56 14.8667C18.4039 15.1515 18.249 15.4715 18.0934 15.8134C17.4584 17.2491 17.1234 18.7678 17.1867 19.9734C17.2252 20.708 17.4082 21.2254 17.6667 21.5601C17.9003 21.8625 18.2588 22.1119 18.9067 22.1734C19.4095 22.2211 19.9511 22.0039 20.5734 21.3467C21.205 20.6796 21.7876 19.6822 22.36 18.52C22.754 17.7202 23.1058 16.9055 23.4534 16.1067C23.6118 15.7423 23.7751 15.3804 23.9334 15.0267C24.3995 13.9848 24.9254 12.8884 25.5334 12.24C25.9616 11.7833 26.6695 11.7528 27.1334 12.1734C27.5971 12.5939 27.6396 13.316 27.2267 13.7867C26.9664 14.0832 26.7 14.6452 26.5067 15.4534C26.319 16.2382 26.2258 17.1454 26.2667 18.0267C26.308 18.9155 26.4796 19.715 26.7467 20.3067C27.0159 20.9032 27.2351 21.1831 27.6 21.2667C28.6215 21.5006 30.0669 19.9838 30.6001 19.3067C31.3027 18.4143 32.0001 17.1286 32.0001 15.3867C31.6774 6.83443 24.6343 0 16 0Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            {/* Visible SVG */}
            <div className="block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="126"
                height="57"
                fill="none"
                viewBox="0 0 126 57"
                className="w-auto h-8 fill-[#F7F6F5]"
              >
                <path
                  fill="#fff"
                  d="M97.473 6.889a.73.73 0 0 1 1.218-.496l1.14 1.024a.73.73 0 0 0 .44.186l1.53.1a.73.73 0 0 1 .496 1.218l-1.024 1.14a.73.73 0 0 0-.187.44l-.099 1.53a.73.73 0 0 1-1.218.496l-1.14-1.024a.73.73 0 0 0-.44-.186l-1.53-.1A.73.73 0 0 1 96.163 10l1.024-1.14a.73.73 0 0 0 .186-.44z"
                ></path>
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M24.114 2.127a2.23 2.23 0 0 1-.446 3.122c-1.325.994-4.96 5.013-7.508 10.576-1.888 4.124-2.306 8-1.764 10.686.55 2.725 1.832 3.589 3.055 3.589l.082.001c.804.03 1.533-.26 2.312-.982.827-.765 1.619-1.94 2.408-3.466.768-1.487 1.455-3.146 2.16-4.848l.037-.09c.403-.972.817-1.971 1.25-2.921.3-.678.629-1.338.98-1.972a69 69 0 0 1 1.499-2.594c.18-.291.333-.532.455-.71.057-.084.129-.187.206-.283a2.297 2.297 0 0 1 1.019-.753 2.234 2.234 0 0 1 3 1.898c.034.366-.035.653-.052.723v.003c-.047.193-.11.344-.129.387a5 5 0 0 1-.157.33c-.1.188-.238.434-.41.726-.342.58-.86 1.415-1.566 2.501q-.392.722-.785 1.59c-1.075 2.432-1.652 4.992-1.547 7.008.065 1.227.37 2.067.77 2.585.352.455.908.84 1.953.94.75.07 1.586-.237 2.622-1.332 1.055-1.114 2.055-2.783 3.034-4.77.672-1.366 1.277-2.757 1.871-4.124q.408-.94.816-1.86c.795-1.777 1.71-3.704 2.789-4.855a2.23 2.23 0 0 1 3.304 2.997c-.95 1.083-1.346 2.745-1.025 4.49.244 1.325.872 2.527 1.778 3.383.903-4.989 4.642-10.09 10.857-11.11 2.871-.472 5.558.15 7.084 2.145 1.565 2.05 1.264 4.694-.097 6.794-2.083 3.213-5.536 5.573-8.968 6.819-.872.317-1.786.576-2.712.757 1.001.619 2.539.927 4.733.186 2.58-.87 5.25-3.214 8.09-6.192.756-.792 1.532-1.64 2.316-2.497 1.277-1.396 2.573-2.812 3.833-4.044a10 10 0 0 1 1.22-1.139q.386-.341.764-.647c1.946-1.573 3.895-2.456 5.692-2.84q.21-.05.418-.091c2.093-.408 3.79-.056 5.071.493a6.55 6.55 0 0 1 2.978 2.543c1.077 1.722 1.453 4.103.513 7.196a205 205 0 0 1-2 6.238c2.168-2.23 3.645-4.304 4.343-5.495.766-1.305 1.49-2.616 2.134-3.778l.085-.155c.644-1.163 1.24-2.24 1.677-2.915.112-.175.237-.358.366-.524.095-.123.32-.409.647-.644.15-.108.552-.378 1.14-.438a2.28 2.28 0 0 1 2.01.837c.37.46.463.935.492 1.12.037.229.037.428.032.558-.016.46-.138 1.02-.265 1.54a53 53 0 0 1-.62 2.244c-.61 2.068-.762 3.596-.719 4.653.605-.837 1.303-1.838 2.044-2.902l.057-.081c1.364-1.96 2.885-4.146 3.906-5.247 3.095-3.34 6.052-4.514 8.613-4.489a8 8 0 0 1 3.858 1.04l.061.031c.301.16.556.324.744.467.043.034.119.093.202.17.03.027.13.12.238.255a2.22 2.22 0 0 1 .487 1.3 2.23 2.23 0 0 1-1.901 2.302 2.23 2.23 0 0 1-1.446-.273 3 3 0 0 1-.215-.136l-.007-.005a5 5 0 0 0-.302-.195 3.7 3.7 0 0 0-1.123-.33c-.935-.118-2.666.02-4.749 2.541-.472.572-1.382 2.277-1.883 4.29-.516 2.081-.404 3.713.2 4.608.603.893 1.301 1.152 2.071 1.112.898-.045 2.065-.529 3.212-1.538a2.23 2.23 0 1 1 2.947 3.348c-1.666 1.467-3.754 2.535-5.932 2.645-2.306.118-4.504-.862-5.996-3.071-.737-1.092-1.103-2.32-1.234-3.558-.771 1.076-1.498 2.038-2.057 2.648a3.03 3.03 0 0 1-1.764.959 3.1 3.1 0 0 1-1.93-.337c-1.032-.548-1.672-1.556-2.038-2.544a8 8 0 0 1-.38-1.442c-1.915 2.686-5.357 6.64-10.157 9.862-.931 2.245-1.914 4.39-2.943 6.353-1.59 3.035-3.352 5.752-5.29 7.724-1.92 1.95-4.281 3.438-7.026 3.349-3.769-.122-6.182-2.295-7.099-4.992-.836-2.46-.434-5.433 1.289-7.4.935-1.202 2.17-2.006 3.81-2.718 1.631-.707 3.853-1.4 6.892-2.281 2.482-.72 4.746-1.787 6.77-3.027q.506-1.265.992-2.57c-1.004.6-2.01 1.094-2.959 1.475-1.459.586-2.956.978-4.181.978-2.426 0-4.324-1.051-5.321-2.989-.488-.948-.703-2-.743-3.053-2.505 2.485-5.367 4.866-8.508 5.925-3.785 1.277-7.131.648-9.467-1.315a8.45 8.45 0 0 1-2.343-3.187 8 8 0 0 1-1.818-.76c-1.603-.927-2.827-2.268-3.667-3.787q-.275.593-.56 1.17c-1.028 2.09-2.266 4.251-3.795 5.866-1.547 1.635-3.642 2.957-6.284 2.706-2.146-.204-3.881-1.125-5.062-2.654a7.3 7.3 0 0 1-.892-1.506 12.8 12.8 0 0 1-1.684 1.94c-1.424 1.318-3.24 2.237-5.466 2.168-4.227-.022-6.63-3.413-7.386-7.168-.768-3.805-.108-8.646 2.08-13.425 2.787-6.086 6.845-10.755 8.888-12.287a2.23 2.23 0 0 1 3.122.446M74.52 20.009c-.5.553-1.025 1.298-1.51 2.19-.706 1.302-1.237 2.755-1.47 4.068-.244 1.373-.11 2.281.126 2.74.122.237.344.57 1.355.57.41 0 1.299-.168 2.518-.658a17.3 17.3 0 0 0 3.733-2.093c2.534-1.869 4.441-4.365 4.666-7.258.092-1.174-.243-1.795-.509-2.13a2.1 2.1 0 0 0-.733-.59l-.021-.01c-.518-.222-1.48-.411-2.74-.157-1.113.272-2.635.968-4.597 2.568q-.405.36-.818.76m1.803 20.541c-.866.34-1.76.648-2.68.915-3.075.891-5.03 1.513-6.361 2.09-1.286.558-1.78.987-2.086 1.393q-.06.078-.125.15c-.536.592-.845 1.854-.44 3.047.337.988 1.161 1.908 3.02 1.968.955.031 2.182-.474 3.7-2.018 1.5-1.524 3.022-3.806 4.522-6.667q.225-.431.45-.878M50.453 25.278a12.8 12.8 0 0 0 3.025-.72c2.74-.996 5.307-2.832 6.748-5.054.653-1.007.398-1.523.295-1.658-.144-.189-.842-.777-2.816-.453-4.1.673-6.748 4.212-7.251 7.885"
                  clipRule="evenodd"
                ></path>
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M85.814 40.19a2.23 2.23 0 0 1 2.253-2.206c11.06.115 22.134.894 33.256 2.59a2.23 2.23 0 0 1-.673 4.41c-10.886-1.66-21.748-2.426-32.63-2.54a2.23 2.23 0 0 1-2.206-2.254m-27.184.699a2.23 2.23 0 0 1-2.149 2.308c-30.738 1.1-45.64 5.092-52.22 6.855l-.765.204a2.23 2.23 0 1 1-1.146-4.311l.746-.2c6.772-1.811 22.006-5.888 53.226-7.005a2.23 2.23 0 0 1 2.308 2.149"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </Link>
          <div
            ref={navRef}
            className="group/nav ml-0 border gap-1 md:left-1/2 md:bottom-1/2 md:flex md:px-1 static hidden rounded-xl"
            style={{
              backgroundColor: 'transparent',
              backdropFilter: 'blur(0px)',
              boxShadow: 'rgb(255, 255, 255) 0px 0px',
              color: 'rgba(255, 255, 255, 0.7)',
              borderColor: 'transparent',
              transform: 'none',
            }}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {navItems.map((item, index) => (
              <div
                key={index}
                data-index={index}
                className="z-[1] min-w-fit text-sm/[24px] font-semibold box-content py-1 px-5 h-9 hover:text-white flex items-center justify-center"
                onMouseEnter={() => setHoveredLink(index)}
                ref={(el) => (linkRefs.current[index] = el)}
              >
                <Link href={item.href} target={item.target}>
                  {item.name}
                </Link>
              </div>
            ))}
            <div
              style={{
                transition: 'left 0.3s ease-out, width 0.3s ease-out',
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
              className="md:flex box-content py-1 rounded-lg h-9 items-center justify-center absolute z-0 hidden"
            >
              <div
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                className="group-hover/nav:h-9 group-hover/nav:w-full delay-100 h-0 w-0 rounded-lg transition-all transform duration-300 ease-out origin-center"
              ></div>
            </div>
          </div>
        </div>

        <div className="invisible flex-1"></div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <div
            className="flex gap-1 rounded-xl p-1 border h-12 items-center relative"
            style={{
              backgroundColor: 'transparent',
              boxShadow: 'rgb(255, 255, 255) 0px 0px',
              color: 'rgba(255, 255, 255, 0.7)',
              borderColor: 'transparent',
              '--hover-color': 'text-white',
              '--hover-bgColor': 'rgba(255,255,255,0.1)',
              '--color': 'rgba(255,255,255,0.7)',
            }}
          >
            <div
              style={{
                backgroundColor: 'transparent',
                backdropFilter: 'blur(0px)',
                boxShadow: 'rgb(255, 255, 255) 0px 0px',
                color: 'rgba(255, 255, 255, 0.7)',
                borderColor: 'transparent',
              }}
              className="hidden md:flex absolute left-0 rounded-xl px-5 border items-center gap-2 w-full h-full"
            ></div>
            <div className="hover:text-white flex items-center">
              <div className="flex gap-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="none"
                  viewBox="0 0 16 16"
                  className="hidden md:block mr-1 w-4 h-4"
                >
                  <g clipPath="url(#a)">
                    <path
                      stroke="currentColor"
                      strokeLinecap="square"
                      strokeWidth="1.6"
                      d="M8 14.286c3.51 0 6.354-2.814 6.354-6.286S11.509 1.714 8 1.714m0 12.572c-3.509 0-6.354-2.814-6.354-6.286S4.491 1.714 8 1.714m0 12.572c-1.612 0-2.92-2.814-2.92-6.286S6.389 1.714 8 1.714m0 12.572c1.612 0 2.92-2.814 2.92-6.286S9.611 1.714 8 1.714M14.182 8H1.818"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h16v16H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="md:hidden mr-1 w-6 h-6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="square"
                    strokeWidth="1.8"
                    d="M12 21.429c5.264 0 9.53-4.222 9.53-9.43S17.265 2.572 12 2.572m0 18.858c-5.263 0-9.53-4.222-9.53-9.43S6.737 2.572 12 2.572m0 18.858c-2.418 0-4.379-4.222-4.379-9.43s1.96-9.428 4.38-9.428m0 18.858c2.418 0 4.378-4.222 4.378-9.43S14.419 2.572 12 2.572M21.273 12H2.727"
                  ></path>
                </svg>
                <span className="hidden xl:block text-[13px] leading-6 font-semibold">
                  English
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="6"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    fill="currentColor"
                    d="M5 .657h3.243c.89 0 1.337 1.077.707 1.707L5.707 5.607a1 1 0 0 1-1.414 0L1.05 2.364C.42 1.734.866.657 1.757.657z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Login Button */}
          <div
            className="rounded-xl p-1 border h-12 hidden md:block"
            style={{
              backgroundColor: 'transparent',
              backdropFilter: 'blur(0px)',
              boxShadow: 'rgb(255, 255, 255) 0px 0px',
              color: 'rgba(255, 255, 255, 0.7)',
              borderColor: 'transparent',
              '--hover-color': 'text-white',
              '--hover-bgColor': 'rgba(255,255,255,0.1)',
              '--color': 'rgba(255,255,255,0.7)',
            }}
          >
            <button className="hover:text-white px-4 py-2">
              <span>Log in</span>
            </button>
          </div>
          <div className="font-semibold hidden md:block">
            <button
              type="button"
              style={{ padding: '0 1.5rem', fontWeight: 'bold' }}
              className="bg-white text-black rounded-md py-4 px-3 hover:translate-y-1 duration-150 transition-all" 
            >
              <h1 className="py-3 font-medium w-fit items-center">
                Build Your Site
              </h1>
            </button>
          </div>
        </div>

        {/*Hamburger icons for mobilephones */}
        <div
          className="transition-all md:hidden h-10 w-10 flex items-center justify-center rounded-lg hover:bg-white/[.1] active:bg-white/[.2]"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#fff"
            viewBox="0 0 24 24"
            className="md:hidden"
          >
            <rect width="16.8" height="2" x="3.6" y="4.8" rx="1"></rect>
            <rect width="13.2" height="2" x="3.6" y="10.8" rx="1"></rect>
            <rect width="16.8" height="2" x="3.6" y="16.8" rx="1"></rect>
          </svg>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 transition-transform duration-300 ease-in-out md:hidden flex justify-center items-center flex-col
          ${isDrawerOpen ? 'translate-y-0' : '-translate-y-full'}`}
        style={{ '--drawer-background': '#0D0D0D' }} 
      >
        <div className="flex justify-center items-center flex-col gap-4">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="z-[1] text-sm/[24px] text-white/[.5] font-semibold h-9 w-[120px] active:text-white flex items-center justify-center"
            >
              <Link href={item.href} target={item.target} onClick={() => setIsDrawerOpen(false)}>
                {item.name}
              </Link>
            </div>
          ))}
          <div className="z-[1] text-sm/[24px] text-white/[.5] font-semibold h-9 w-[120px] active:text-white flex items-center justify-center">
            <button onClick={() => setIsDrawerOpen(false)}>Log in</button>
          </div>
          <div className="font-semibold mt-4">
            <button
              type="button"
              className="bg-blue-500 text-white rounded-md py-2 px-6 hover:bg-blue-600 transition-colors"
              onClick={() => setIsDrawerOpen(false)}
            >
              <span>Build Your Site</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;