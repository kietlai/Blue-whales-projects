'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ExclamationCircleIcon, LightBulbIcon, AcademicCapIcon, PhotoIcon} from '@heroicons/react/24/outline'

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, NoSymbolIcon, MagnifyingGlassIcon, LinkIcon,NewspaperIcon, BanknotesIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Learn More', href: '/learn-more' },
  { name: 'Citations', href: '/citations' },
  { name: 'Fun Facts!', href: '/fun-facts' },
  { name: 'Solutions', href: '/solutions' },
]

const cards = [
  {
    name: 'Money',
    description: 'The Cost of outfiting many whales with trackers would be very expensive and costly to maintain.',
    icon: BanknotesIcon,
  },
  {
    name: 'Push Back from Companies',
    description: 'Companies would not like to move out of areas that whales are in because those routes would be the most profitabe. Moving away would cost money to take a detour.',
    icon: NoSymbolIcon,
  },
  {
    name: 'Policies against Pollution',
    description: 'Polices against pollution would suffer push back from companies that operate in these waters which would cost alot of money and for oil companies be there whole reason for them working in those waters.',
    icon: NewspaperIcon,
  },
]

const features = [
  {
    name: 'Ecological solution',
    description: 'They can limit pollution by implementing regulations so that the krill don\'t die and we have plenty of food for the Blue Whale.',
    icon: NewspaperIcon,
  },
  {
    name: 'Engineering/Technology',
    description: 'Using tracking we can route ships around the Blue Whales in order to prevent ship strikes and fishing nets getting stuck in them.',
    icon: LinkIcon,
  },
]

const currents = [
  {
    name: 'Protection',
    description:
      'They are a protected species so people are not allowed to harm them',
    icon: NoSymbolIcon,
  },
  {
    name: 'Assessment Reports/Tracking',
    description: 'Scientist go through and mark and track Blue Whales in order to get more informed on there movement and size of there population.',
    icon: MagnifyingGlassIcon,
  },
]
export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="bg-blend-luminosity">
      <div className="bg-gray-900 z-50">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Blue Whale</span>
                <img
                  className="h-8 w-auto"
                  src="life-preserver.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="/" className="text-sm font-semibold leading-6 text-white">
              </a>
            </div>
          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
              <div className="flex items-center justify-between">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Blue Whales</span>
                  <img
                    className="h-8 w-auto"
                    src="life-preserver.svg"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/25">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-white hover:bg-gray-800"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
      <section>
        <div className='py-8 pt-32 text-center'>
          <h1 className='text-6xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-emerald-300 to-blue-600 sm:text-9xl'>Solutions</h1>
        </div>
        <div className="bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Whats Currently Being Done?</h2>
          </div>
        </div>
        <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-blue-400">What&apos;s being one now.</h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Current Conservation Methods</p>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    The global community currently working on a number of conservation methods. These include:
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                    {currents.map((current) => (
                      <div key={current.name} className="relative pl-9">
                        <dt className="inline font-semibold text-white">
                          <current.icon className="absolute left-1 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                          {current.name}
                        </dt>{' '}
                        <dd className="inline">{current.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <img
                src="https://www.cybersmile.org/wp-content/uploads/Everything-You-Need-To-Know-About-The-Blue-Whale-Challenge.jpg"
                alt="Product screenshot"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
          <img
            src="https://www.antarctica.gov.au/site/assets/files/45670/ia40342.1920x768.jpg?f=037035"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover brightness-50"
          />
          <div
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-emerald-400 to-[#776fff] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-emerald-500 to-[#776fff] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Is it Working?</h2>
            <p className="mt-6 text-2xl leading-8 text-gray-300">
              It is effective the Blue Whale&apos;s population has been increasing recently.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-transparent py-24">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-800 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
                <div className="lg:row-start-2 lg:max-w-md">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Other possible solutions
                    <br />
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    There are some solutions already at play but we can do more.
                  </p>
                </div>
                <img
                  src="https://files.worldwildlife.org/wwfcmsprod/images/Blue_Whale/story_full_width/2x7x8ynwvz_shutterstock_764499823.jpg"
                  alt="Product screenshot"
                  className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none lg:-translate-x-48 scale-[.70] "
                  width={2432}
                  height={1442}
                />
                <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
                  <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative">
                        <dt className="ml-9 inline-block font-semibold text-white">
                          <feature.icon className="absolute left-1 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                          {feature.name}
                        </dt>{' '}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <div
                className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-emerald-400 to-[#9089fc] opacity-25"
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
          <img
            src="https://cdn.vox-cdn.com/thumbor/B0eSkBMbmzpKZA8c7k7o9R8Wr_U=/0x0:4000x2250/1070x602/filters:focal(1680x805:2320x1445):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70780516/GettyImages_1346022120.0.jpg"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover brightness-40"
          />
          <div
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-emerald-400 to-[#776fff] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-emerald-300 to-[#776fff] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">How does this work?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              If you were to help elimanate the threats to the blue whales or minimize the threats it will allow the Blue Whale population to increase. 
            </p>
          </div>
        </div>
      </section>
      <section>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://www.antarctica.gov.au/site/assets/files/45670/ia40342.1920x768.jpg?f=037035"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center brightness-40"
      />
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-emerald-400 to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-emerald-400 to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Constraints & Limitations</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Somethings take resources and may have Limitations, Constaints such as not being able to make the best trackers because you do not have enough money.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
              <card.icon className="h-7 w-5 flex-none text-indigo-400" aria-hidden="true" />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      </section>
    </div>
  </main>
  )
}
