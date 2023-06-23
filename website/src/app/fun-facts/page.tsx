'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ExclamationCircleIcon, LightBulbIcon, AcademicCapIcon, PhotoIcon} from '@heroicons/react/24/outline'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, ScaleIcon, ChartBarIcon, SpeakerWaveIcon, ClockIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Learn More', href: '/learn-more' },
  { name: 'Citations', href: '/citations' },
  { name: 'Fun Facts!', href: '/fun-facts' },
  { name: 'Solutions', href: '/solutions' },
]

const features = [
  {
    name: 'They Can Weigh as Much as 30 Elephants.',
    icon: ScaleIcon,
  },
  {
    name: 'They Can Grow More than 100 Feet Long!',
    icon: ChartBarIcon,
  },
  {
    name: 'They Are The Loudest Animals on The Planet!',
    icon: SpeakerWaveIcon,
  },
  {
    name: 'They Can Eat about 2.5 Toyota Camrys! (9,000 Pounds!)',
    icon: ScaleIcon,
  },
  {
    name: 'They Live a Long Time! Around 90-100 Years!',
    icon: ClockIcon,
  },
  {
    name: 'They Have the Biggest Tongue! It can Weigh as Much as An Elephant!',
    icon: ScaleIcon,
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
        <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-blue-400">Nuggets Of Knowledge</h2>
                  <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Fun Facts!</p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9 text-2xl">
                        <dt className="inline font-semibold text-white">
                          <feature.icon className="absolute left-1 top-1 h-7 w-7 text-blue-500" aria-hidden="true" />
                          {feature.name}
                        </dt>{' '}
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <img
                src="https://files.worldwildlife.org/wwfcmsprod/images/Blue_Whale/story_full_width/2x7x8ynwvz_shutterstock_764499823.jpg"
                alt="Product screenshot"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[70rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
  )
}
