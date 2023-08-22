"use client";
import TypewriterComponent from "typewriter-effect";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className={`flex  flex-col items-center justify-between w-full  dark:bg-gray-900 bg-gradient-to-r from-blue-900 via-blue-500 to-green-600`}
    >
      <nav class='bg-white border-gray-200 dark:bg-gray-900 w-full'>
        <div class='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <a
            href='/VideoCall/lobby.html'
            class='flex items-center'
          >
            <span class='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              SkillSphere.
            </span>
          </a>
          <button
            data-collapse-toggle='navbar-default'
            type='button'
            class='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-default'
            aria-expanded='false'
          >
            <span class='sr-only'>Open main menu</span>
            <svg
              class='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
          <div
            class='hidden w-full md:block md:w-auto'
            id='navbar-default'
          >
            <ul class='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              <li>
                <a
                  href='#'
                  class='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'
                  aria-current='page'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href='#'
                  class='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <section class=' dark:bg-white w-screen '>
          <div class='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
            <div class='mr-auto place-self-center lg:col-span-7 '>
              <h1 class='max-w-2xl mb-8 text-4xl font-extrabold tracking-tight leading-10 md:text-5xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                Empowering Africa Through Education
              </h1>
              <div class='max-w-2xl mb-6  lg:mb-8 md:text-lg lg:text-xl xl:text-2xl h-[15px] text-black font-bold'>
                <TypewriterComponent
                  onInit={(typewriter) => {
                    typewriter.changeDeleteSpeed(10);
                  }}
                  options={{
                    strings: [
                      "Unlocking Knowledge, Transforming Lives.",
                      "Cultivating Excellence, Shaping Leaders ",
                      "Fulfilling Dreams, Creating Opportunities",
                      "Empowering Progress by Bridging Gaps",
                      "Only SkillSphere.",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <p className='max-w-2xl mb-6  lg:mb-8 md:text-lg lg:text-xl text-black'>
                SkillSphere, your gateway to high-quality educational courses
                designed for the people of Africa. We believe in the
                transformative power of education. Our mission is to empower
                individuals across the continent with the knowledge and skills
                required to excel in the modern world.
              </p>
              <a
                href='#'
                className='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'
              >
                Get started
                <svg
                  class='w-5 h-5 ml-2 -mr-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </a>
              <a
                href='#'
                className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 text-white bg-black dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
              >
                Speak to Sales
              </a>
            </div>
            <div class='lg:mt-0 lg:col-span-5 lg:flex'>
              <Image
                src='/illustration'
                alt='mockup'
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>
      </div>
      <section class='bg-white dark:bg-gray-900 w-full'>
        <div class='container my-24 mx-auto md:px-6'>
          <section className='mb-32'>
            <h2 className='mb-12 text-center text-3xl font-bold text-white bg-blue-900 p-6'>
              Why should you choose SkillSphere?
            </h2>

            <div class='flex flex-wrap items-center'>
              <div className='mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12'>
                <div
                  class='relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20'
                  data-te-ripple-init
                  data-te-ripple-color='light'
                >
                  <Image
                    src='/woman.jpg'
                    width={500}
                    height={500}
                    alt=''
                  />
                  <a href='#!'>
                    <div class='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,0%,0.4)] bg-fixed'>
                      <div class='flex h-full items-center justify-center'>
                        <div class='px-6 py-12 text-center text-white md:px-12'>
                          <h3 class='mb-6 text-2xl font-bold uppercase'>
                            The future is
                            <u class='text-[hsl(210,12%,80%)]'>now</u>
                          </h3>
                          <p class='text-[hsl(210,12%,80%)]'>
                            We are revolutionizing the way students learn. Our
                            platform offers a diverse range of courses and
                            engaging live classes, all designed to cater to
                            different learning styles and preferences. From
                            mathematics to music, we have it all!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class='relative overflow-hidden bg-cover bg-no-repeat'>
                      <div class='absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100'></div>
                    </div>
                  </a>
                </div>
              </div>

              <div class='w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12'>
                <div class='mb-12 flex'>
                  <div class='shrink-0'>
                    <div class='rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='2'
                        stroke='currentColor'
                        class='h-6 w-6 text-white'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z'
                        />
                      </svg>
                    </div>
                  </div>
                  <div class='ml-4 grow'>
                    <p class='mb-1 font-bold text-white'>
                      24/7 Support for Your Success
                    </p>
                    <p class='text-neutral-500 dark:text-neutral-300'>
                      We understand that learning does not adhere to a strict
                      schedule. That is why our dedicated support team is
                      available around the clock. Have a question at midnight or
                      need guidance during the early hours? We are here to
                      assist you every step of the way.
                    </p>
                  </div>
                </div>

                <div class='mb-12 flex'>
                  <div class='shrink-0'>
                    <div class='rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='2'
                        stroke='currentColor'
                        class='h-6 w-6 text-white'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z'
                        />
                      </svg>
                    </div>
                  </div>
                  <div class='ml-4 grow'>
                    <p class='mb-1 text-white font-bold'>
                      A Foundation of Safety and Reliability
                    </p>
                    <p class='text-neutral-500 dark:text-neutral-300'>
                      Safety is our top priority. With a solid framework in
                      place, you can trust our platform to provide a secure
                      environment for your learning journey. We take your
                      privacy seriously, ensuring your data and experience are
                      safeguarded at all times.
                    </p>
                  </div>
                </div>

                <div class='mb-12 flex'>
                  <div class='shrink-0'>
                    <div class='rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='2'
                        stroke='currentColor'
                        class='h-6 w-6 text-white'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'
                        />
                      </svg>
                    </div>
                  </div>
                  <div class='ml-4 grow'>
                    <p class='mb-1 text-white font-bold'>
                      Your Learning, Your Pace
                    </p>
                    <p class='text-neutral-500 dark:text-neutral-300'>
                      Whether you are a fast learner or prefer to take your
                      time, our platform adapts to your pace. We understand that
                      everyone&apos;s journey is unique, and our flexible
                      approach allows you to absorb knowledge at a speed that
                      suits you.
                    </p>
                  </div>
                </div>

                <div class='flex'>
                  <div class='shrink-0'>
                    <div class='rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='2'
                        stroke='currentColor'
                        class='h-6 w-6 text-white'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z'
                        />
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z'
                        />
                      </svg>
                    </div>
                  </div>
                  <div class='ml-4 grow'>
                    <p class='mb-1 font-bold text-white'>
                      Unparalleled Speed for Seamless Learning
                    </p>
                    <p class='text-neutral-500 dark:text-neutral-300'>
                      Say goodbye to buffering and lag. Our platform&apos;s
                      lightning-fast performance ensures that you&apos;ll have
                      an uninterrupted and smooth learning experience. Focus on
                      absorbing knowledge, not waiting for videos to load.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className='bg-white dark:bg-gray-900 w-full'>
        <div className='container my-12 mx-auto md:px-6'>
          <section className='mb-32 text-center lg:text-left'>
            <div className='px-6 py-12 md:px-12'>
              <div className='grid items-center lg:grid-cols-2 lg:gap-x-12'>
                <div className='mb-12 lg:mb-0'>
                  <h2 className='my-12 text-5xl font-bold leading-tight tracking-tight text-white'>
                    Are you ready <br />
                    <span className='text-success dark:text-success-400 text-white'>
                      to change your story?
                    </span>
                  </h2>
                  <p className='mb-10 text-white'>
                    Ready to embark on your learning journey? Join us today and
                    experience education like never before. Elevate your skills,
                    expand your horizons, and engage in a world of knowledge
                    with our innovative EdTech platform. Your future starts now.
                  </p>
                  <a
                    class='mb-2 inline-block rounded bg-success px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] md:mr-2 md:mb-0'
                    href='#!'
                    role='button'
                  >
                    Get started
                  </a>
                  <a
                    class='text-white bg-slate-600 inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:text-success-700 dark:hover:bg-neutral-700 dark:hover:bg-opacity-40'
                    data-te-ripple-init
                    data-te-ripple-color='light'
                    href='#!'
                    role='button'
                  >
                    Learn more
                  </a>
                </div>

                <div class='mb-12 lg:mb-0'>
                  <Image
                    src='/woman2.jpg'
                    alt=''
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <footer class='p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800 w-full'>
        <div class='mx-auto max-w-screen-xl text-center'>
          <a
            href='#'
            class='flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white'
          >
            SkillSphere.
          </a>
          <p class='my-6 text-gray-500 dark:text-gray-400'>
            Learn, Experience, and Build.
          </p>
          <ul class='flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white'>
            <li>
              <a
                href='#'
                class='mr-4 hover:underline md:mr-6 '
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#'
                class='mr-4 hover:underline md:mr-6'
              >
                Premium
              </a>
            </li>
            <li>
              <a
                href='#'
                class='mr-4 hover:underline md:mr-6 '
              >
                Campaigns
              </a>
            </li>
            <li>
              <a
                href='#'
                class='mr-4 hover:underline md:mr-6'
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href='#'
                class='mr-4 hover:underline md:mr-6'
              >
                Affiliate Program
              </a>
            </li>
            <li>
              <a
                href='#'
                class='mr-4 hover:underline md:mr-6'
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href='#'
                class='mr-4 hover:underline md:mr-6'
              >
                Contact
              </a>
            </li>
          </ul>
          <span class='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2021-2022{" "}
            <a
              href='#'
              class='hover:underline'
            >
              SkillSphere™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </main>
  );
}
